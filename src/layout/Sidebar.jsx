import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ShoppingCart, Users, BarChart3, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Обзор', icon: LayoutDashboard, end: true },
  { to: '/sales', label: 'Продажи', icon: ShoppingCart },
  { to: '/users', label: 'Пользователи', icon: Users },
  { to: '/analytics', label: 'Аналитика', icon: BarChart3 },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed z-40 h-full w-64 shrink-0 border-r border-slate-200 bg-white p-4 transition-transform dark:border-slate-800 dark:bg-slate-900 md:static md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-600 font-bold text-white">
              A
            </div>
            <span className="text-lg font-semibold">Analytics</span>
          </div>
          <button className="md:hidden" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <nav className="space-y-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-accent-50 text-accent-700 dark:bg-accent-600/20 dark:text-accent-400'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
