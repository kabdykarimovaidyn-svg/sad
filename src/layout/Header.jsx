import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

export default function Header({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="flex items-center gap-3">
        <button
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold">Дашборд-демо</h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          aria-label="Переключить тему"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-700 text-sm font-semibold text-white">
          АК
        </div>
      </div>
    </header>
  )
}
