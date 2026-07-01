import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import Card from '../components/Card.jsx'
import { analyticsMetrics, conversionFunnel, progressMetrics } from '../data/mockData.js'

export default function Analytics() {
  const maxFunnel = conversionFunnel[0].value

  return (
    <div className="space-y-6">
      <Card title="Сессии, просмотры страниц и показатель отказов">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsMetrics}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: 8, border: 'none', fontSize: 13 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="sessions" name="Сессии" stroke="#6366f1" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="pageViews" name="Просмотры" stroke="#22c55e" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="bounceRate" name="Отказы, %" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Воронка конверсии" delay={80}>
          <div className="space-y-3">
            {conversionFunnel.map((stage, i) => {
              const pct = Math.round((stage.value / maxFunnel) * 100)
              return (
                <div key={stage.stage}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">{stage.stage}</span>
                    <span className="font-semibold">{stage.value.toLocaleString()}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-3 rounded-full bg-accent-500 transition-all"
                      style={{ width: `${pct}%`, opacity: 1 - i * 0.12 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        <Card title="Ключевые метрики" delay={140}>
          <div className="space-y-4">
            {progressMetrics.map((m) => (
              <div key={m.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">{m.label}</span>
                  <span className="font-semibold">{m.value}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-2.5 rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
