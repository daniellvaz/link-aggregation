import { Routes, Route } from 'react-router-dom';
import Index from './pages';
import Repos from './pages/repos';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path="/repos" element={<Repos/>} />
    </Routes>
  )
}