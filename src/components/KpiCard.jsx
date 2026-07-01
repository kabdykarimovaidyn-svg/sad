import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export default function KpiCard({ label, value, delta, positive, delay = 0 }) {
  return (
    <div
      className="animate-fade-in-up rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
            positive
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
              : 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400'
          }`}
        >
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {Math.abs(delta)}%
        </span>
      </div>
    </div>
  )
}
