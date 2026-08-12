function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to Project NGX.</p>
        </div>

        <button className="primary-button">
          + New Order
        </button>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <span>Total Orders</span>
          <h2>0</h2>
          <p>All customer orders</p>
        </div>

        <div className="summary-card">
          <span>Customer Revenue</span>
          <h2>₦0</h2>
          <p>Total sales value</p>
        </div>

        <div className="summary-card">
          <span>Outstanding</span>
          <h2>₦0</h2>
          <p>Customer balances</p>
        </div>

        <div className="summary-card">
          <span>Active Batches</span>
          <h2>0</h2>
          <p>Current product batches</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-section">
          <div className="section-header">
            <h2>Recent Orders</h2>
            <a href="/orders">View all</a>
          </div>

          <div className="empty-state">
            <h3>No orders yet</h3>
            <p>
              Customer orders will appear here once they are created.
            </p>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="quick-actions">
            <a href="/orders">Create Order</a>
            <a href="/products">Add Product</a>
            <a href="/customers">Add Customer</a>
            <a href="/batches">Create Batch</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard