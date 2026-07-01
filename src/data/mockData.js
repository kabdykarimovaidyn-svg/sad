export const monthlyRevenue = [
  { month: 'Янв', revenue: 42000, target: 40000 },
  { month: 'Фев', revenue: 38500, target: 41000 },
  { month: 'Мар', revenue: 51200, target: 43000 },
  { month: 'Апр', revenue: 47800, target: 45000 },
  { month: 'Май', revenue: 55600, target: 47000 },
  { month: 'Июн', revenue: 61200, target: 50000 },
  { month: 'Июл', revenue: 58900, target: 52000 },
  { month: 'Авг', revenue: 64300, target: 54000 },
  { month: 'Сен', revenue: 69800, target: 56000 },
  { month: 'Окт', revenue: 72500, target: 58000 },
  { month: 'Ноя', revenue: 78100, target: 60000 },
  { month: 'Дек', revenue: 91400, target: 65000 },
]

export const categories = [
  { name: 'Электроника', value: 3400, color: '#6366f1' },
  { name: 'Одежда', value: 2450, color: '#22c55e' },
  { name: 'Дом и сад', value: 1800, color: '#f59e0b' },
  { name: 'Спорт', value: 1200, color: '#ec4899' },
  { name: 'Красота', value: 950, color: '#06b6d4' },
]

export const transactions = [
  { id: 'TX-10231', customer: 'Алина Ким', amount: 1240, status: 'Оплачено', date: '2026-06-28' },
  { id: 'TX-10230', customer: 'Данияр Ахметов', amount: 320, status: 'В обработке', date: '2026-06-28' },
  { id: 'TX-10229', customer: 'Мария Соколова', amount: 875, status: 'Оплачено', date: '2026-06-27' },
  { id: 'TX-10228', customer: 'Ержан Тулеуов', amount: 2100, status: 'Оплачено', date: '2026-06-27' },
  { id: 'TX-10227', customer: 'Виктория Ли', amount: 156, status: 'Отменено', date: '2026-06-26' },
  { id: 'TX-10226', customer: 'Тимур Сатыбалдин', amount: 640, status: 'Оплачено', date: '2026-06-26' },
  { id: 'TX-10225', customer: 'Ольга Нам', amount: 980, status: 'В обработке', date: '2026-06-25' },
  { id: 'TX-10224', customer: 'Асель Жумабекова', amount: 1520, status: 'Оплачено', date: '2026-06-25' },
]

export const kpis = [
  { label: 'Выручка', value: '₸ 91.4M', delta: 12.4, positive: true },
  { label: 'Пользователи', value: '24 680', delta: 8.1, positive: true },
  { label: 'Заказы', value: '3 214', delta: -2.3, positive: false },
  { label: 'Конверсия', value: '4.8%', delta: 0.6, positive: true },
]

export const salesByMonth = monthlyRevenue.map((m) => ({ month: m.month, plan: m.target, fact: m.revenue }))

export const salesByQuarter = [
  { month: 'Q1', plan: 124000, fact: 131700 },
  { month: 'Q2', plan: 142000, fact: 164600 },
  { month: 'Q3', plan: 162000, fact: 193000 },
  { month: 'Q4', plan: 183000, fact: 242000 },
]

export const salesByYear = [
  { month: '2023', plan: 480000, fact: 512300 },
  { month: '2024', plan: 560000, fact: 601800 },
  { month: '2025', plan: 611000, fact: 731300 },
]

export const topProducts = [
  { name: 'Беспроводные наушники X200', sales: 8420 },
  { name: 'Смарт-часы Pulse 3', sales: 6790 },
  { name: 'Кофемашина AromaPro', sales: 5230 },
  { name: 'Рюкзак Urban Carry', sales: 4310 },
  { name: 'Настольная лампа Lumo', sales: 3120 },
]

export const userGrowth = [
  { month: 'Янв', users: 4200 },
  { month: 'Фев', users: 5100 },
  { month: 'Мар', users: 6300 },
  { month: 'Апр', users: 7800 },
  { month: 'Май', users: 9600 },
  { month: 'Июн', users: 11900 },
  { month: 'Июл', users: 13800 },
  { month: 'Авг', users: 15900 },
  { month: 'Сен', users: 18200 },
  { month: 'Окт', users: 20100 },
  { month: 'Ноя', users: 22400 },
  { month: 'Дек', users: 24680 },
]

export const trafficSources = [
  { name: 'Органический поиск', value: 38, color: '#6366f1' },
  { name: 'Соцсети', value: 27, color: '#22c55e' },
  { name: 'Реклама', value: 19, color: '#f59e0b' },
  { name: 'Реферальные ссылки', value: 10, color: '#ec4899' },
  { name: 'Прямые заходы', value: 6, color: '#06b6d4' },
]

export const activityHeatmap = Array.from({ length: 7 }, (_, day) =>
  Array.from({ length: 24 }, (_, hour) => ({
    day,
    hour,
    value: Math.round(20 + 60 * Math.abs(Math.sin(day * 1.3 + hour * 0.25)) * Math.random()),
  })),
)

export const usersTable = [
  { id: 1, name: 'Алина Ким', email: 'alina.kim@example.com', role: 'Админ', status: 'Активен', joined: '2025-02-11' },
  { id: 2, name: 'Данияр Ахметов', email: 'daniyar.a@example.com', role: 'Пользователь', status: 'Активен', joined: '2025-03-04' },
  { id: 3, name: 'Мария Соколова', email: 'maria.s@example.com', role: 'Модератор', status: 'Заблокирован', joined: '2025-04-21' },
  { id: 4, name: 'Ержан Тулеуов', email: 'erzhan.t@example.com', role: 'Пользователь', status: 'Активен', joined: '2025-05-15' },
  { id: 5, name: 'Виктория Ли', email: 'victoria.li@example.com', role: 'Пользователь', status: 'Неактивен', joined: '2025-06-30' },
  { id: 6, name: 'Тимур Сатыбалдин', email: 'timur.s@example.com', role: 'Модератор', status: 'Активен', joined: '2025-07-19' },
  { id: 7, name: 'Ольга Нам', email: 'olga.nam@example.com', role: 'Пользователь', status: 'Активен', joined: '2025-08-02' },
  { id: 8, name: 'Асель Жумабекова', email: 'assel.zh@example.com', role: 'Пользователь', status: 'Неактивен', joined: '2025-09-14' },
]

export const analyticsMetrics = [
  { month: 'Янв', sessions: 12400, pageViews: 38200, bounceRate: 42 },
  { month: 'Фев', sessions: 13800, pageViews: 41500, bounceRate: 40 },
  { month: 'Мар', sessions: 15600, pageViews: 47800, bounceRate: 38 },
  { month: 'Апр', sessions: 17200, pageViews: 52300, bounceRate: 37 },
  { month: 'Май', sessions: 19800, pageViews: 59100, bounceRate: 35 },
  { month: 'Июн', sessions: 22400, pageViews: 66800, bounceRate: 33 },
]

export const conversionFunnel = [
  { stage: 'Визиты', value: 48200 },
  { stage: 'Просмотр товара', value: 28900 },
  { stage: 'Добавили в корзину', value: 12400 },
  { stage: 'Оформили заказ', value: 6100 },
  { stage: 'Оплатили', value: 4620 },
]

export const progressMetrics = [
  { label: 'Цель по выручке', value: 78 },
  { label: 'Удержание клиентов', value: 64 },
  { label: 'NPS удовлетворённость', value: 91 },
  { label: 'Заполнение профилей', value: 45 },
]
