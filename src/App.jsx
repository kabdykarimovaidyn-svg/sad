import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import { ThemeProvider } from './ThemeContext.jsx'
import Overview from './pages/Overview.jsx'
import Sales from './pages/Sales.jsx'
import Users from './pages/Users.jsx'
import Analytics from './pages/Analytics.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}
