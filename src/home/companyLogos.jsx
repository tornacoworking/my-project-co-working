// Vector wordmarks for the "Trusted by" strip (extracted from the old Section.jsx).
export const renderCompanyLogo = (company) => {
  switch (company.type) {
    case 'tribe':
      return (
        <div className="flex flex-col items-center justify-center">
          <svg className="w-18 sm:w-20 h-3.5 sm:h-4 text-slate-900" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M 5,14 C 7,4 17,4 18,11 C 19,17 11,18 13,11 C 15,4 25,4 26,11 C 27,17 19,18 21,11 C 23,4 33,4 34,11 C 35,17 27,18 29,11 C 31,4 41,4 42,11 C 43,17 35,18 37,11 C 39,4 49,4 50,11 C 51,17 43,18 45,11 C 47,4 57,4 58,11" />
          </svg>
          <span className="tracking-[0.45em] text-[11px] sm:text-[12px] font-bold text-slate-900 uppercase pl-1 mt-0.5">
            TRIBE
          </span>
        </div>
      );

    case 'covie':
      return (
        <div className="flex flex-col items-center justify-center w-full px-1">
          <span className="text-[16px] sm:text-[18px] font-light tracking-[0.2em] text-slate-900 leading-none">
            COVIE
          </span>
          <div className="flex items-center gap-1.5 w-full max-w-[84px] mt-1">
            <span className="h-[1px] bg-slate-300 flex-1" />
            <span className="text-[7.5px] tracking-[0.2em] text-slate-500 font-sans lowercase">
              coliving
            </span>
            <span className="h-[1px] bg-slate-300 flex-1" />
          </div>
        </div>
      );

    case 'helloworld':
      return (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center shrink-0 p-1">
            <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 13 A 6 6 0 0 1 18 13" strokeLinecap="round" />
              <path d="M8 15 A 4 4 0 0 1 16 15" strokeLinecap="round" />
              <path d="M12 15 v 4 M9 16 v 3 M15 16 v 3" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="flex flex-col text-left leading-[0.9] font-black text-slate-900 text-[11px] sm:text-[12px] tracking-tight">
            <span>hello</span>
            <span>world</span>
          </div>
        </div>
      );

    case 'isthara':
      return (
        <div className="flex items-center justify-center">
          <svg className="w-3.5 h-5.5 mr-1 shrink-0" viewBox="0 0 12 24">
            <rect x="1" y="1" width="10" height="4" fill="#a855f7" rx="0.5" />
            <rect x="1" y="6" width="10" height="4" fill="#ec4899" rx="0.5" />
            <rect x="1" y="11" width="10" height="4" fill="#06b6d4" rx="0.5" />
            <rect x="1" y="16" width="10" height="4" fill="#84cc16" rx="0.5" />
            <rect x="1" y="21" width="10" height="3" fill="#eab308" rx="0.5" />
          </svg>
          <span className="text-[16px] sm:text-[18px] font-black text-[#002f54] tracking-tight">
            STHARA
          </span>
        </div>
      );

    case 'yourspace':
      return (
        <div className="flex items-center justify-center gap-1.5">
          <svg className="w-4.5 h-4.5 text-[#f95700] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="5" r="4.5" />
            <polygon points="19,1 14,9 24,9" />
            <rect x="15" y="14" width="8" height="8" rx="1" />
            <path d="M5 13 v9 M0.5 17.5 h9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left leading-[0.95] font-black text-[#f95700] text-[11px] sm:text-[12px] tracking-tight">
            <span>your</span>
            <span>space</span>
          </div>
        </div>
      );

    case 'settl':
      return (
        <div className="flex items-center justify-center gap-1.5">
          <svg className="w-4.5 h-4.5 text-[#e11d48] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
            <rect x="3" y="7" width="13" height="13" rx="2.5" />
            <rect x="8" y="3" width="13" height="13" rx="2.5" />
          </svg>
          <span className="text-[16px] sm:text-[18px] font-extrabold text-slate-900 tracking-tight">
            Settl.
          </span>
        </div>
      );

    case 'awfis':
      return (
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]" />
          <span className="text-[16px] sm:text-[17px] font-black text-slate-800 tracking-tight lowercase">
            awfis
          </span>
        </div>
      );

    case 'innov8':
      return (
        <span className="text-[16px] sm:text-[17px] font-black text-slate-900 tracking-tight">
          INNOV<span className="text-red-600">8</span>
        </span>
      );

    case 'springboard':
      return (
        <span className="text-[14px] sm:text-[15px] font-black text-amber-500 tracking-tight">
          91<span className="text-slate-800 font-bold">springboard</span>
        </span>
      );

    case 'indiqube':
      return (
        <span className="text-[15px] sm:text-[16px] font-bold text-[#0d9488] tracking-tight">
          Indi<span className="text-slate-900 font-black">Qube</span>
        </span>
      );

    case 'wework':
      return (
        <span className="text-[17px] sm:text-[19px] font-serif font-black text-slate-900 tracking-tight lowercase">
          wework
        </span>
      );

    case 'smartworks':
      return (
        <span className="text-[14px] sm:text-[15px] font-sans font-extrabold text-slate-800 tracking-tight">
          smart<span className="text-blue-600 font-black">works</span>
        </span>
      );

    default:
      return (
        <span className="text-sm font-bold text-slate-800">
          {company.name}
        </span>
      );
  }
};
