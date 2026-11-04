import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/styles.css'
import { App } from './app/App'
import { FeedPage } from './pages/FeedPage/FeedPage'
import { GridPage } from './pages/GridPage/GridPage'

// Роутинг: App — общий макет, страницы выводятся в его <Outlet />
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      { path: 'feed', element: <FeedPage /> },
      { path: 'feed/:id', element: <FeedPage /> },
      { path: 'grid', element: <GridPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
