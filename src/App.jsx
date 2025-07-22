
import { Routes } from 'react-router'
import { PrivateRoutes, PublicRoutes } from './routes'
import { Suspense } from 'react'
import LoadingPage from './pages/LoadingPage'
function App() {
  return (
    <Routes>
      <Suspense fallback={<LoadingPage/>}>
      {...PublicRoutes}
      {...PrivateRoutes}
      </Suspense>
    </Routes>
  )
}

export default App
