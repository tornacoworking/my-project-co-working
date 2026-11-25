import { useId, useRef, useState } from 'react';
import { CONTACT } from '../data/stats.js';

const SPACE_TYPES = ['Coworking Spaces', 'Virtual Office Space'];
const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT;

const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email, like name@company.com.'),
  phone: (v) => (/^[6-9]\d{9}$/.test(v.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '')) ? '' : 'Enter a valid 10-digit mobile number.'),
  spaceType: (v) => (v ? '' : 'Choose the type of space you need.'),
  city: (v) => (v.trim() ? '' : 'Tell us which city you are looking in.'),
};

const variants = {
  hero: {
    form: 'bg-white/95 backdrop-blur-md border border-white/60 shadow-[0_24px_60px_rgba(2,6,23,0.35)]',
    defaultHeading: 'Get a free quote',
    defaultSub: 'Tell us what you need. A workspace expert will call you back, free of charge.',
  },
  'virtual-office': {
    form: 'bg-white shadow-[0_24px_60px_rgba(2,6,23,0.45)]',
    defaultHeading: 'Enquire about a virtual office',
    defaultSub: 'GST, MCA and business-address packages. We reply within one working day.',
  },
};

const inputBase =
  'block w-full min-h-12 rounded-xl border bg-white px-3.5 text-base text-slate-900 placeholder:text-slate-500 transition-colors focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/30';

const Field = ({ id, label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-semibold text-slate-800">{label}</label>
    {children}
    {error && <p id={`${id}-error`} className="text-sm font-medium text-red-700" role="alert">{error}</p>}
  </div>
);

/**
 * Reusable enquiry form used on the homepage hero and the virtual-office section.
 *
 * Submits as JSON to VITE_LEAD_ENDPOINT when that is set; otherwise falls back to opening the visitor's
 * mail client (the original behaviour). Props `city` / `spaceType` pre-fill and follow the page's search bar.
 */
const LeadForm = ({
  variant = 'hero',
  id,
  heading,
  subheading,
  city: cityProp = '',
  spaceType: spaceTypeProp = '',
  defaultSpaceType = '',
  cities = [],
  onSpaceTypeChange,
}) => {
  const theme = variants[variant] || variants.hero;
  const uid = useId();
  const fid = (name) => `${uid}-${name}`;
  const listId = `${uid}-cities`;

  const [values, setValues] = useState({ name: '', email: '', phone: '', spaceType: spaceTypeProp || defaultSpaceType, city: cityProp });
  // Errors are derived: a field shows one only after the visitor has interacted with it and left it, or after a submit attempt.
  // Programmatic focus (e.g. jumping to #enquiry-form) never counts as interaction.
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const interacted = useRef(new Set());
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [result, setResult] = useState('');
  const [synced, setSynced] = useState({ cityProp, spaceTypeProp });
  const formRef = useRef(null);

  // Follow the search bar: when the page's selected city / space type changes, update the matching field.
  if (synced.cityProp !== cityProp || synced.spaceTypeProp !== spaceTypeProp) {
    setSynced({ cityProp, spaceTypeProp });
    setValues((prev) => ({
      ...prev,
      city: synced.cityProp !== cityProp ? cityProp : prev.city,
      spaceType: synced.spaceTypeProp !== spaceTypeProp && spaceTypeProp ? spaceTypeProp : prev.spaceType,
    }));
  }

  const validate = (name, value) => validators[name](value);
  const errors = Object.fromEntries(
    Object.keys(validators).map((name) => [name, touched[name] || submitAttempted ? validate(name, values[name]) : '']),
  );

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (status === 'success' || status === 'error') setStatus('idle');
    if (name === 'spaceType' && onSpaceTypeChange) onSpaceTypeChange(value);
  };

  const blur = (name) => {
    if (interacted.current.has(name)) setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Mark a field as interacted-with when the visitor clicks into it or presses a key in it (including Tab to leave it).
  const markInteracted = (event) => {
    const { name } = event.target;
    if (name) interacted.current.add(name);
  };

  const submit = async (event) => {
    event.preventDefault();
    setSubmitAttempted(true);
    const firstInvalid = Object.keys(validators).find((name) => validate(name, values[name]));
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('loading');
    const payload = { ...values, source: variant, page: window.location.pathname, submittedAt: new Date().toISOString() };
    try {
      if (LEAD_ENDPOINT) {
        const response = await fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        setResult(`Thanks, ${values.name.trim()}! We'll call you back shortly.`);
      } else {
        const subject = encodeURIComponent(`Workspace Enquiry - ${values.spaceType} in ${values.city}`);
        const body = encodeURIComponent(
          `New Workspace Enquiry:\n\nClient Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nType of Space: ${values.spaceType}\nCity: ${values.city}\nSubmission Date: ${new Date().toLocaleString()}\n`,
        );
        window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
        setResult(`Thanks, ${values.name.trim()}! Your email app has opened with your enquiry. Press send and we'll be in touch.`);
      }
      setStatus('success');
      setValues((prev) => ({ ...prev, name: '', email: '', phone: '' }));
      setSubmitAttempted(false);
      setTouched({});
      interacted.current.clear();
    } catch {
      setStatus('error');
      setResult(`Sorry, we couldn't send that. Please try again or call ${CONTACT.phoneDisplay}.`);
    }
  };

  const describe = (name) => (errors[name] ? `${fid(name)}-error` : undefined);
  const inputClass = (name) => `${inputBase} ${errors[name] ? 'border-red-600' : 'border-slate-300'}`;
  const loading = status === 'loading';

  return (
    <form
      ref={formRef}
      id={id}
      onSubmit={submit}
      onKeyDownCapture={markInteracted}
      onPointerDownCapture={markInteracted}
      noValidate
      aria-busy={loading}
      className={`w-full rounded-2xl p-5 sm:p-6 flex flex-col gap-4 ${theme.form}`}
    >
      <div>
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900">{heading || theme.defaultHeading}</h2>
        <p className="mt-1 text-sm text-slate-700">{subheading || theme.defaultSub}</p>
      </div>

      <Field id={fid('name')} label="Full name" error={errors.name}>
        <input
          id={fid('name')} name="name" type="text" autoComplete="name" placeholder="e.g. Aditi Sharma"
          value={values.name} onChange={(e) => setField('name', e.target.value)} onBlur={() => blur('name')}
          aria-invalid={Boolean(errors.name)} aria-describedby={describe('name')} required className={inputClass('name')}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4">
        <Field id={fid('email')} label="Work email" error={errors.email}>
          <input
            id={fid('email')} name="email" type="email" autoComplete="email" inputMode="email" placeholder="name@company.com"
            value={values.email} onChange={(e) => setField('email', e.target.value)} onBlur={() => blur('email')}
            aria-invalid={Boolean(errors.email)} aria-describedby={describe('email')} required className={inputClass('email')}
          />
        </Field>
        <Field id={fid('phone')} label="Mobile number" error={errors.phone}>
          <div className="flex">
            <span className="inline-flex min-h-12 items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-3 text-base font-semibold text-slate-700" aria-hidden="true">+91</span>
            <input
              id={fid('phone')} name="phone" type="tel" autoComplete="tel-national" inputMode="tel" placeholder="98765 43210"
              value={values.phone} onChange={(e) => setField('phone', e.target.value)} onBlur={() => blur('phone')}
              aria-invalid={Boolean(errors.phone)} aria-describedby={describe('phone')} required
              className={`${inputClass('phone')} rounded-l-none`}
            />
          </div>
        </Field>
      </div>

      <div className="@container">
      <div className="grid grid-cols-1 gap-4 @sm:grid-cols-[1.3fr_1fr]">
        <Field id={fid('spaceType')} label="Type of space" error={errors.spaceType}>
          <select
            id={fid('spaceType')} name="spaceType" value={values.spaceType}
            onChange={(e) => setField('spaceType', e.target.value)} onBlur={() => blur('spaceType')}
            aria-invalid={Boolean(errors.spaceType)} aria-describedby={describe('spaceType')} required
            className={`${inputClass('spaceType')} cursor-pointer`}
          >
            <option value="">Select type</option>
            {SPACE_TYPES.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </Field>
        <Field id={fid('city')} label="City" error={errors.city}>
          <input
            id={fid('city')} name="city" type="text" autoComplete="address-level2" list={listId} placeholder="e.g. Pune"
            value={values.city} onChange={(e) => setField('city', e.target.value)} onBlur={() => blur('city')}
            aria-invalid={Boolean(errors.city)} aria-describedby={describe('city')} required className={inputClass('city')}
          />
          <datalist id={listId}>{cities.map((name) => <option key={name} value={name} />)}</datalist>
        </Field>
      </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="min-h-12 w-full cursor-pointer rounded-xl bg-blue-700 px-6 text-base font-bold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800 active:scale-[0.99] disabled:cursor-wait disabled:opacity-70"
      >
        {loading ? 'Sending…' : 'Get free quote'}
      </button>

      <p className="text-xs text-slate-600">No spam, no brokerage. By submitting you agree to be contacted about your enquiry.</p>

      <div aria-live="polite">
        {(status === 'success' || status === 'error') && (
          <p
            role={status === 'error' ? 'alert' : 'status'}
            className={`rounded-xl border px-3.5 py-2.5 text-sm font-semibold ${status === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'}`}
          >
            {result}
          </p>
        )}
      </div>
    </form>
  );
};

export default LeadForm;
