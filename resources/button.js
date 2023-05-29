export function Button({ d, href, title }) {
  return (
    <a
      className="mx-1 inline-block bg-gradient-to-br from-slate-800 to-violet-800 rounded shadow-2xl font-semibold text-white p-2 hover:scale-110 transition-all"
      href={href}
      title={title}
    >
      <svg
        className="inline-block w-6 h-6"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d}></path>
      </svg>
    </a>
  );
}
