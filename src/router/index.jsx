import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages'

export const MainRoute = () => {
  return (
    <Routes>
      <Route path='' element={<Dashboard />} />
    </Routes>
  )
}
