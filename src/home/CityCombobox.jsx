import { useId, useMemo, useRef, useState } from 'react';

/**
 * Searchable city picker (WAI-ARIA combobox with a listbox popup).
 * Arrow keys move, Enter selects, Escape closes; typing filters the list.
 *
 * @param {{slug:string,name:string}[]} cities  options, already in display order
 * @param {{slug:string,name:string}} value     the selected city
 * @param {(city) => void} onChange
 */
const CityCombobox = ({ cities, value, onChange, label = 'City' }) => {
  const uid = useId();
  const listId = `${uid}-list`;
  const inputRef = useRef(null);
  const [text, setText] = useState(value?.name || '');
  const [typed, setTyped] = useState(false); // false = show the full list, true = filter by what was typed
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [syncedName, setSyncedName] = useState(value?.name || '');

  // Follow the selected city when the page changes it from elsewhere (chips, popup...).
  if ((value?.name || '') !== syncedName) {
    setSyncedName(value?.name || '');
    setText(value?.name || '');
    setTyped(false);
  }

  const options = useMemo(() => {
    const query = typed ? text.trim().toLowerCase() : '';
    return query ? cities.filter((city) => city.name.toLowerCase().includes(query)) : cities;
  }, [cities, text, typed]);

  const choose = (city) => {
    onChange(city);
    setText(city.name);
    setTyped(false);
    setOpen(false);
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!open) setOpen(true);
      setActive((index) => Math.min(index + 1, options.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && open && options[active]) {
      event.preventDefault();
      choose(options[active]);
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  const optionId = (index) => `${uid}-opt-${index}`;

  return (
    <div className="relative min-h-12 rounded-xl border border-slate-300 bg-white transition-colors focus-within:border-blue-700 focus-within:ring-2 focus-within:ring-blue-700/25">
      <label htmlFor={`${uid}-input`} className="pointer-events-none absolute left-3 top-1.5 text-xs font-semibold text-slate-600">{label}</label>
      <input
        ref={inputRef}
        id={`${uid}-input`}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && options[active] ? optionId(active) : undefined}
        autoComplete="off"
        placeholder="Search a city"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setTyped(true);
          setActive(0);
          setOpen(true);
        }}
        onFocus={(event) => {
          event.target.select();
          setOpen(true);
        }}
        onBlur={() => {
          setOpen(false);
          setText(value?.name || '');
          setTyped(false);
        }}
        onKeyDown={onKeyDown}
        className="absolute inset-0 h-full w-full rounded-xl bg-transparent pb-1 pl-3 pr-3 pt-5 text-base font-semibold text-slate-900 placeholder:font-normal placeholder:text-slate-500 focus:outline-none"
      />
      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={`${label} suggestions`}
          className="absolute left-0 right-0 top-full z-30 mt-2 max-h-60 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
        >
          {options.length === 0 && <li className="px-3 py-3 text-sm text-slate-600" role="presentation">No city matches "{text}".</li>}
          {options.map((city, index) => (
            <li
              key={city.slug}
              id={optionId(index)}
              role="option"
              aria-selected={city.slug === value?.slug}
              onMouseDown={(event) => {
                event.preventDefault(); // keep focus in the input so blur does not close the list first
                choose(city);
              }}
              onMouseEnter={() => setActive(index)}
              className={`flex min-h-11 cursor-pointer items-center px-3 text-base text-slate-800 ${index === active ? 'bg-blue-50 text-blue-800' : ''} ${city.slug === value?.slug ? 'font-bold' : ''}`}
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityCombobox;
