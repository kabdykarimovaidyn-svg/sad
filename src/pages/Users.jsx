import { useMemo, useState } from 'react'
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { ArrowDown, ArrowUp, Search } from 'lucide-react'
import Card from '../components/Card.jsx'
import { userGrowth, trafficSources, activityHeatmap, usersTable } from '../data/mockData.js'

const dayLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const statusStyles = {
  Активен: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  Неактивен: 'bg-slate-100 text-slate-500 dark:bg-slate-700/40 dark:text-slate-400',
  Заблокирован: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
}

function heatColor(value) {
  const intensity = Math.min(1, value / 90)
  const alpha = 0.12 + intensity * 0.75
  return `rgba(99, 102, 241, ${alpha.toFixed(2)})`
}

export default function Users() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState({ key: 'name', dir: 'asc' })

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    let rows = usersTable.filter(
      (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
    )
    rows = [...rows].sort((a, b) => {
      const av = a[sort.key]
      const bv = b[sort.key]
      const cmp = typeof av === 'string' ? av.localeCompare(bv) : av - bv
      return sort.dir === 'asc' ? cmp : -cmp
    })
    return rows
  }, [search, sort])

  const toggleSort = (key) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === 'asc' ? 'desc' : 'asc' }))

  const columns = [
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Роль' },
    { key: 'status', label: 'Статус' },
    { key: 'joined', label: 'Регистрация' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card title="Рост пользователей" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={userGrowth}>
              <defs>
                <linearGradient id="userGrowthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: 8, border: 'none', fontSize: 13 }} />
              <Area type="monotone" dataKey="users" stroke="#6366f1" fill="url(#userGrowthFill)" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Источники трафика" delay={60}>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={trafficSources} dataKey="value" nameKey="name" innerRadius={50} outerRadius={85} paddingAngle={2}>
                {trafficSources.map((s) => (
                  <Cell key={s.name} fill={s.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 8, border: 'none', fontSize: 13 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card title="Активность по дням недели и часам" delay={120}>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid grid-cols-[auto_repeat(24,minmax(14px,1fr))] gap-[3px]">
              <div />
              {Array.from({ length: 24 }, (_, h) => (
                <div key={h} className="text-center text-[9px] text-slate-400">
                  {h % 3 === 0 ? h : ''}
                </div>
              ))}
              {activityHeatmap.map((row, day) => (
                <div key={day} className="contents">
                  <div className="pr-2 text-xs text-slate-500 dark:text-slate-400">{dayLabels[day]}</div>
                  {row.map((cell) => (
                    <div
                      key={cell.hour}
                      title={`${dayLabels[day]} ${cell.hour}:00 — ${cell.value}`}
                      className="aspect-square rounded-sm"
                      style={{ backgroundColor: heatColor(cell.value) }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="Пользователи" delay={180}>
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
          <Search size={16} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по имени или email..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => toggleSort(col.key)}
                    className="cursor-pointer select-none py-2 pr-4 font-medium"
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      {sort.key === col.key &&
                        (sort.dir === 'asc' ? <ArrowUp size={12} /> : <ArrowDown size={12} />)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-slate-100 last:border-0 dark:border-slate-800/60">
                  <td className="py-2.5 pr-4 font-medium">{u.name}</td>
                  <td className="py-2.5 pr-4 text-slate-500 dark:text-slate-400">{u.email}</td>
                  <td className="py-2.5 pr-4">{u.role}</td>
                  <td className="py-2.5 pr-4">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[u.status]}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 text-slate-500 dark:text-slate-400">{u.joined}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="py-6 text-center text-slate-400">
                    Ничего не найдено
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
