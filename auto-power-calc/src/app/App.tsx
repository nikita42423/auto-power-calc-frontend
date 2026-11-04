import { Outlet } from 'react-router-dom'
import { StatusBar } from '../widgets/StatusBar/StatusBar'
import { TabBar } from '../widgets/TabBar/TabBar'

// Общий макет «телефона»: сверху статус-бар, в центре текущая страница, снизу navbar
export function App() {
  return (
    <main className="main-grid">
      <StatusBar />
      <Outlet />
      <TabBar />
      <div className="home-indicator">
        <div className="indicator-line" />
      </div>
    </main>
  )
}
