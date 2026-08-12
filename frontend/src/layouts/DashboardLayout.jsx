import { Outlet, Link } from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="logo">NGX</div>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/products">Products</Link>
          <Link to="/batches">Batches</Link>
          <Link to="/suppliers">Suppliers</Link>
          <Link to="/shipments">Shipments</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/delivery">Delivery</Link>
        </nav>
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
