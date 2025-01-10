import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Payment from './pages/Payment';
import TokenProvider from './context/Token';

function AppRoutes() {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/payments" element={<Payment />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  )
}
export default AppRoutes