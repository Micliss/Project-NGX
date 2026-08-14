function Orders() {
  return (
    <div className="orders-page">
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders and payments.</p>
        </div>

        <button className="primary-button">
          + New Order
        </button>
      </div>

      <div className="order-summary">
        <div className="summary-card">
          <span>Total Orders</span>
          <h2>0</h2>
        </div>

        <div className="summary-card">
          <span>Pending</span>
          <h2>0</h2>
        </div>

        <div className="summary-card">
          <span>Paid</span>
          <h2>₦0</h2>
        </div>

        <div className="summary-card">
          <span>Outstanding</span>
          <h2>₦0</h2>
        </div>
      </div>

      <section className="orders-section">
        <div className="section-header">
          <h2>All Orders</h2>
        </div>

        <div className="empty-state">
          <h3>No orders yet</h3>
          <p>
            Customer orders will appear here once they are created.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Orders