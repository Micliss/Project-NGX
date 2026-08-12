import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Products from "./pages/Products"
import Batches from "./pages/Batches"
import Suppliers from "./pages/Suppliers"
import Shipments from "./pages/Shipments"
import Payments from "./pages/Payments"
import Delivery from "./pages/Delivery"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/batches" element={<Batches />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/delivery" element={<Delivery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


