# Project NGX – Screen Architecture

## 1. Purpose

The Screen Architecture defines the major screens of Project NGX and explains how users will move through the system.

The design is based on the business workflow identified during the interview with the business owner. The main goal is to reduce manual record keeping, prevent customer and batch confusion, automate payment and profit calculations, and make order and shipment tracking easier.

The screen structure will be developed gradually. The first version of Project NGX will focus primarily on the business owner's administrative workflow.

---

# 2. Main User Flow

The general flow of the system is:

```text
LOGIN
   ↓
DASHBOARD
   ↓
BATCH MANAGEMENT
   ↓
PRODUCT MANAGEMENT
   ↓
CUSTOMER MANAGEMENT
   ↓
ORDER MANAGEMENT
   ↓
PAYMENT MANAGEMENT
   ↓
SUPPLIER ORDER
   ↓
SHIPMENT TRACKING
   ↓
RECEIVING
   ↓
DELIVERY / PICKUP
   ↓
CUSTOMER LEDGER
   ↓
REPORTS & PROFIT
```

The dashboard acts as the central point from which the business owner can access the major areas of the system.

---

# 3. Screen Architecture

## 3.1 Login Screen

### Purpose

Provides secure access to the Project NGX administrative system.

### Main elements

* Username or email
* Password
* Login button
* Password recovery option
* Error message for incorrect credentials

### Main action

The user logs into the system and is directed to the Dashboard.

---

# 3.2 Dashboard

### Purpose

Provides an overview of the current state of the business.

### Main information displayed

* Active batch
* Number of orders
* Number of customers
* Total customer revenue
* Total customer payments
* Outstanding customer balances
* Supplier costs
* Supplier payments
* Outstanding supplier balances
* Estimated gross profit
* Products below MOQ
* Active shipments
* Expected arrivals
* Pending deliveries

### Main actions

* Create or open a batch
* View orders
* View customers
* View shipments
* Record payments
* View financial reports

---

# 3.3 Batch Management

### Purpose

Allows the business owner to create, view, and manage preorder batches.

### Batch information

* Batch number
* Start date
* End date
* Status
* Notes

### Example

```text
Batch 1
August 1 – August 14

Batch 2
August 15 – August 30
```

### Main actions

* Create batch
* Open batch
* Close batch
* View orders within a batch
* View supplier orders within a batch
* View batch financial summary

---

# 3.4 Product Management

### Purpose

Allows the business owner to manage products available for preorder.

### Product information

* Product code
* Product name
* Category
* Description
* Selling price
* Supplier cost
* Minimum Order Quantity (MOQ)
* Product availability
* Product status

### Main actions

* Add product
* Edit product
* Change price
* Update MOQ
* Search product
* View product history

### Important rule

Product prices may change between batches.

The price recorded on an existing customer order must remain unchanged even if the product price changes later.

---

# 3.5 Customer Management

### Purpose

Stores and manages customer information.

### Customer information

* Customer name
* Phone number
* Email, if available
* State
* City
* Address
* WhatsApp contact

### Main actions

* Add customer
* Edit customer
* Search customer
* View customer order history
* View customer ledger
* View outstanding balance

### Important rule

A customer can have multiple orders across different batches.

---

# 3.6 Customer Ledger

### Purpose

Provides an automated record of everything a customer has ordered and paid for.

### Information displayed

* Customer details
* Order history
* Batch
* Products ordered
* Quantity
* Selling price
* Order total
* Payments made
* Outstanding balance
* Order status

### Example

```text
CUSTOMER: Mrs. Ada

Batch 1
Human Hair       ₦20,000
Perfume           ₦5,000
Payment          ₦15,000
Balance          ₦10,000

Batch 2
Skincare          ₦8,000
Payment           ₦8,000
Balance                ₦0
```

The ledger should automatically combine the customer's records while still keeping each batch separate.

---

# 3.7 Order Management

### Purpose

Allows the business owner to record and manage customer orders.

### Order information

* Customer
* Batch
* Order date
* Products
* Quantity
* Unit selling price
* Subtotal
* Total order amount
* Payment status
* Order status
* Notes

### Main actions

* Create order
* Add multiple products
* Edit order
* Cancel order before shipment
* View order
* Record payment
* View customer ledger

### Important rule

A customer can order multiple products in one order.

A customer can also place separate orders in different batches.

---

# 3.8 Payment Management

### Purpose

Records customer payments and automatically calculates outstanding balances.

### Payment information

* Customer
* Order
* Amount
* Payment date
* Payment method
* Reference number
* Notes

### Payment types

* Full payment
* Installment payment

### Example

```text
Order Total: ₦100,000

Payment 1: ₦50,000
Payment 2: ₦30,000

Total Paid: ₦80,000
Balance: ₦20,000
```

---

# 3.9 Supplier Management

### Purpose

Stores information about suppliers.

### Supplier information

* Supplier name
* Contact person
* Phone
* Email
* Country
* Notes

### Main actions

* Add supplier
* Edit supplier
* View supplier orders
* View supplier payment history

---

# 3.10 Supplier Orders

### Purpose

Allows the business owner to create and manage orders sent to suppliers.

### Supplier order information

* Supplier
* Batch
* Order date
* Products
* Quantity
* Supplier unit cost
* Subtotal
* Total supplier cost
* Order status
* Notes

### Important rule

MOQ is calculated per product.

The system should help the business owner determine when the quantity ordered for a product has reached its required MOQ.

---

# 3.11 Shipments

### Purpose

Tracks goods moving from the supplier to Nigeria.

### Shipment information

* Supplier order
* Tracking number
* Shipping method
* Shipment date
* Estimated arrival date
* Actual arrival date
* Shipment status
* Notes

### Shipping methods

* Sea
* Air

### Important rule

Most goods are shipped by sea and may take approximately two to three months.

Fragile goods such as some gadgets may be shipped by air.

---

# 3.12 Receiving

### Purpose

Records the products that physically arrive in Nigeria.

### Information displayed

* Shipment
* Product
* Quantity shipped
* Quantity received
* Quantity remaining
* Receiving status

### Important rule

Not all products in a supplier order necessarily arrive at the same time.

The system must therefore support partial shipments and partial receiving.

Example:

```text
Supplier Order

Human Hair     20 units
Perfume        10 units
Skincare       15 units

Shipment 1
Human Hair     20 units
Perfume        10 units

Shipment 2
Skincare       15 units
```

---

# 3.13 Delivery / Pickup Management

### Purpose

Manages how customers receive their completed orders.

### Delivery information

* Customer
* Order
* Delivery method
* State
* City
* Delivery fee
* Delivery status
* Delivery date

### Delivery methods

* Customer pickup
* Delivery

### Important rule

Delivery fees are not fixed.

The business owner must be able to enter or update the delivery amount based on the customer's location and current logistics cost.

---

# 3.14 Reports & Profit

### Purpose

Provides the business owner with an overview of the financial performance of the business.

### Customer-side information

* Customer revenue
* Customer payments
* Outstanding customer balances

### Supplier-side information

* Supplier costs
* Supplier payments
* Outstanding supplier balances

### Profit information

* Gross profit
* Profit per batch
* Product performance

### Formula

```text
Gross Profit
=
Customer Product Revenue
-
Supplier Product Cost
```

### Batch example

```text
BATCH 1

Customer Revenue       ₦450,000
Supplier Cost          ₦360,000
──────────────────────────────
Gross Profit            ₦90,000
```

---

# 4. Screen-to-Database Relationship

The screens interact with the database entities as follows:

| Screen              | Main Database Entities                                            |
| ------------------- | ----------------------------------------------------------------- |
| Login               | User / Authentication                                             |
| Dashboard           | Batch, Order, Payment, Supplier Order, Shipment                   |
| Batch Management    | Batch                                                             |
| Product Management  | Category, Product                                                 |
| Customer Management | Customer                                                          |
| Customer Ledger     | Customer, Order, Order Item, Payment                              |
| Order Management    | Order, Order Item, Customer, Product, Batch                       |
| Payment Management  | Payment, Order                                                    |
| Supplier Management | Supplier                                                          |
| Supplier Orders     | Supplier Order, Supplier Order Item, Product, Batch               |
| Shipments           | Shipment, Shipment Item, Supplier Order                           |
| Receiving           | Shipment Item, Supplier Order Item                                |
| Delivery Management | Delivery, Order, Customer                                         |
| Reports & Profit    | Order Item, Payment, Supplier Order Item, Supplier Payment, Batch |

---

# 5. Core Navigation Structure

```text
                    ┌─────────────┐
                    │    LOGIN    │
                    └──────┬──────┘
                           ↓
                    ┌─────────────┐
                    │  DASHBOARD  │
                    └──────┬──────┘
                           │
       ┌───────────────────┼────────────────────┐
       ↓                   ↓                    ↓
    BATCHES             PRODUCTS            CUSTOMERS
       │                                      │
       ↓                                      ↓
    ORDERS  ←──────────────────────────  CUSTOMER LEDGER
       │
       ├──────────────→ PAYMENTS
       │
       └──────────────→ DELIVERY

    SUPPLIERS
       │
       ↓
SUPPLIER ORDERS
       │
       ↓
   SHIPMENTS
       │
       ↓
   RECEIVING
       │
       ↓
   DELIVERY

                    DASHBOARD
                        │
                        ↓
               REPORTS & PROFIT
```

---

# 6. Design Principles

The Project NGX interface should prioritize:

1. Simplicity
2. Mobile-friendly interaction
3. Fast data entry
4. Clear batch separation
5. Easy customer search
6. Automated calculations
7. Minimal repeated data entry
8. Clear payment status
9. Clear shipment status
10. Easy access to customer ledgers
11. Clear financial summaries
12. Prevention of duplicate or conflicting records

The system should be designed primarily around the business owner's real workflow rather than forcing the business owner to change her entire working process.

---

# 7. Future Customer Interface

A customer-facing interface may be added in a later version.

Possible features include:

* Browse available products
* View product information
* Place preorder
* View order
* View payment status
* View delivery fee
* View shipment status
* Receive order updates

The customer-facing interface is not part of the initial administrative version and will be developed after the core business management system is stable.

# 8. Dashboard Screen

## Purpose

The Dashboard is the central overview screen of Project NGX. It provides the business owner with a quick summary of the current batch, orders, customers, payments, shipments, balances, and financial performance.

## Main Sections

### Current Batch
- Active batch number
- Batch start date
- Batch end date
- Batch status

### Business Summary
- Total orders
- Total customers
- Customer revenue
- Customer payments
- Outstanding customer balances
- Supplier costs
- Supplier payments
- Outstanding supplier balances
- Gross profit

### Batch Progress
- Number of customer orders
- MOQ progress
- Paid orders
- Pending payments
- Orders ready for processing

### Shipment Overview
- Active shipments
- Tracking numbers
- Expected arrival dates
- Shipment status

### Quick Actions
- Add new customer
- Create new order
- Add product
- Record payment
- Create supplier order
- View active shipment

## Navigation

The Dashboard provides access to:

- Batch Management
- Product Management
- Customer Management
- Order Management
- Payment Management
- Supplier Management
- Supplier Orders
- Shipments
- Receiving
- Delivery/Pickup
- Reports & Profit

## Database Entities Used

- Batch
- Customer
- Order
- Order Item
- Payment
- Supplier Order
- Supplier Order Item
- Supplier Payment
- Shipment
- Shipment Item

# 8. Dashboard Screen

## 8.1 Purpose

The Dashboard is the central overview screen of Project NGX. It gives the business owner a quick view of the current state of the preorder business without requiring her to open each section individually.

The Dashboard should prioritize information that requires frequent attention, including active batches, customer orders, payments, outstanding balances, supplier obligations, shipments, and profit.

---

## 8.2 Current Batch

The Dashboard should display the currently active preorder batch.

Information displayed:

- Batch number
- Batch start date
- Batch closing date
- Batch status
- Number of customer orders
- MOQ progress

Example:

Batch 1  
August 1 – August 14  
Status: Open

---

## 8.3 Business Summary

The Dashboard should provide summary cards for:

- Total customer orders
- Total customers
- Customer revenue
- Customer payments
- Outstanding customer balances
- Supplier costs
- Supplier payments
- Outstanding supplier balances
- Gross profit

These figures should be calculated automatically from the database.

---

## 8.4 Batch Progress

The Dashboard should display the current progress of the active batch.

Information displayed:

- Total orders
- Products being ordered
- MOQ progress
- Fully paid orders
- Partially paid orders
- Unpaid orders
- Cancelled orders

The system should make it easy to identify products that have not yet reached their MOQ.

---

## 8.5 Shipment Overview

The Dashboard should display important shipment information.

Information displayed:

- Active shipments
- Tracking numbers
- Shipping method
- Estimated arrival date
- Shipment status
- Products awaiting arrival

The system should support both sea and air shipments.

---

## 8.6 Quick Actions

The Dashboard should provide shortcuts for frequently performed actions.

Quick actions:

- Add Customer
- Create Order
- Add Product
- Record Payment
- Create Supplier Order
- Add Shipment
- Record Received Goods

---

## 8.7 Alerts and Notifications

The Dashboard should highlight important items requiring attention.

Examples:

- Product has not reached MOQ
- Customer has outstanding balance
- Supplier payment is outstanding
- Shipment is approaching estimated arrival
- Shipment has arrived
- Customer order is ready for delivery
- Customer order is ready for pickup

---

## 8.8 Navigation

The Dashboard should provide access to:

- Dashboard
- Batches
- Products
- Customers
- Orders
- Payments
- Suppliers
- Supplier Orders
- Shipments
- Receiving
- Delivery / Pickup
- Reports
- Settings

---

## 8.9 Database Entities Used

The Dashboard obtains information from:

- Batch
- Product
- Customer
- Order
- Order Item
- Payment
- Supplier Order
- Supplier Order Item
- Supplier Payment
- Shipment
- Shipment Item
- Delivery

---

## 8.10 Dashboard Layout Sketch

```text
┌─────────────────────────────────────────────────────────────┐
│ NGX                                      🔔     👤 Profile  │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│  Dashboard   │  Good morning, Mum 👋                       │
│              │                                              │
│  Batches     │  Active Batch: Batch 1                       │
│              │  Aug 1 – Aug 14        ● OPEN                │
│  Products    │                                              │
│              │  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│  Customers   │  │ ORDERS   │ │CUSTOMERS │ │   REVENUE    │ │
│              │  │    42    │ │    31    │ │   ₦850,000   │ │
│  Orders      │  └──────────┘ └──────────┘ └──────────────┘ │
│              │                                              │
│  Payments    │  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │
│              │  │ BALANCE  │ │ SUPPLIER │ │    PROFIT    │ │
│  Suppliers   │  │ ₦120,000 │ │ ₦600,000 │ │   ₦250,000   │ │
│              │  └──────────┘ └──────────┘ └──────────────┘ │
│  Shipments   │                                              │
│              │  ┌────────────────────────────────────────┐  │
│  Receiving   │  │ BATCH PROGRESS                          │  │
│              │  │ Orders: 42                              │  │
│  Delivery    │  │ MOQ Progress: ████████░░ 80%            │  │
│              │  │ Paid: 35   Pending: 7                   │  │
│  Reports     │  └────────────────────────────────────────┘  │
│              │                                              │
│  Settings    │  ┌────────────────┐ ┌────────────────────┐  │
│              │  │ SHIPMENTS      │ │ QUICK ACTIONS      │  │
│              │  │                │ │                    │  │
│              │  │ Shipment #001  │ │ + New Order       │  │
│              │  │ ETA: Oct 18    │ │ + Customer        │  │
│              │  │ 🚢 Sea         │ │ + Payment         │  │
│              │  └────────────────┘ └────────────────────┘  │
└──────────────┴──────────────────────────────────────────────┘
