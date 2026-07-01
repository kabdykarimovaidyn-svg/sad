export default function Card({ title, children, className = '', delay = 0 }) {
  return (
    <div
      className={`animate-fade-in-up rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {title && <h3 className="mb-4 text-sm font-semibold text-slate-600 dark:text-slate-300">{title}</h3>}
      {children}
    </div>
  )
}
