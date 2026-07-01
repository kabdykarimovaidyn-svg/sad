import { useState } from 'react'
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts'
import Card from '../components/Card.jsx'
import { salesByMonth, salesByQuarter, salesByYear, topProducts } from '../data/mockData.js'

const periods = {
  month: { label: 'Месяц', data: salesByMonth },
  quarter: { label: 'Квартал', data: salesByQuarter },
  year: { label: 'Год', data: salesByYear },
}

export default function Sales() {
  const [period, setPeriod] = useState('month')
  const data = periods[period].data

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Продажи</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        >
          {Object.entries(periods).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <Card title="Продажи: план / факт">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: 'none', fontSize: 13 }}
              formatter={(v) => `₸ ${v.toLocaleString()}`}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="plan" name="План" fill="#94a3b8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="fact" name="Факт" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Топ-5 товаров по продажам" delay={80}>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={topProducts} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: 8, border: 'none', fontSize: 13 }} />
            <Bar dataKey="sales" name="Продажи" fill="#22c55e" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
