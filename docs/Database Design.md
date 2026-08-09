 Project NGX - Database Design

 1. Database Purpose

 2. Customer Entity
 | Field        | What it means                          | Required? |
| ------------ | -------------------------------------- | --------- |
| Customer ID  | Unique identifier for the customer     | Yes       |
| Full Name    | Customer's name                        | Yes       |
| Phone Number | Main contact number                    | Yes       |
| State        | Nigerian state where customer lives    | Yes       |
| City         | Customer's city                        | Yes       |
| Date Created | When the customer was first registered | Yes       |
| Notes        | Optional extra information             | No        |
So basically
CUSTOMER
────────────────────────
Customer ID
Full Name
Phone Number
State
City
Date Created
Notes

 3. Product Entity
 PRODUCT
────────────────────────
Product ID
Product Code
Product Name
Category ID
Supplier ID
Supplier Cost
Selling Price
MOQ
Shipping Method
Product Description
Product Status
| Field               | What it means                      | Required? |
| ------------------- | ---------------------------------- | --------- |
| Product ID          | Unique identifier                  | Yes       |
| Product Code        | Mum's short code for the product   | Yes       |
| Product Name        | Full product name                  | Yes       |
| Category ID         | Category the product belongs to    | Yes       |
| Supplier ID         | Supplier providing the product     | Yes       |
| Supplier Cost       | What Mum pays supplier per unit    | Yes       |
| Selling Price       | Current price charged to customers | Yes       |
| MOQ                 | Minimum quantity required          | Yes       |
| Shipping Method     | Sea or Air                         | Yes       |
| Product Description | Details about the product          | No        |
| Product Status      | Available/unavailable              | Yes       |
## 3.1 Category Entity
| Field         | What it means              | Required? |
| ------------- | -------------------------- | --------- |
| Category ID   | Unique category identifier | Yes       |
| Category Name | Name of the category       | Yes       |
| Description   | Optional explanation       | No        |


 4. Batch Entity
 | Field        | What it means               | Required? |
| ------------ | --------------------------- | --------- |
| Batch ID     | Unique identifier           | Yes       |
| Batch Number | Batch 1 or Batch 2          | Yes       |
| Start Date   | Beginning of batch          | Yes       |
| End Date     | Closing date                | Yes       |
| Status       | Open, Closed, Shipped, etc. | Yes       |
| Created Date | When batch was created      | Yes       |
BATCH
────────────────────────
Batch ID
Batch Number
Start Date
End Date
Status
Created Date


 5. Order Entity
 | Field        | What it means              | Required? |
| ------------ | -------------------------- | --------- |
| Order ID     | Unique order identifier    | Yes       |
| Customer ID  | Customer who placed it     | Yes       |
| Batch ID     | Batch the order belongs to | Yes       |
| Order Date   | Date order was placed      | Yes       |
| Status       | Current order status       | Yes       |
| Total Amount | Total value of products    | Yes       |
| Notes        | Extra information          | No        |
ORDER
────────────────────────
Order ID
Customer ID
Batch ID
Order Date
Status
Total Amount
Notes

 6. Order Item Entity
 An order can contain multiple products.

So:

ORDER #001
│
├── Human Hair × 2
├── Skincare × 3
└── Perfume × 1

Each of those becomes an Order Item.

Field	What it means	Required?
Order Item ID	Unique identifier	Yes
Order ID	Which order it belongs to	Yes
Product ID	Which product was ordered	Yes
Quantity	Number ordered	Yes
Price At Purchase	Price when customer ordered	Yes
Subtotal	Quantity × price	Yes

So:

ORDER ITEM
────────────────────────
Order Item ID
Order ID
Product ID
Quantity
Price At Purchase
Subtotal


Payment Entity
## 7. Payment Entity
| Field          | What it means                     | Required? |
| -------------- | --------------------------------- | --------- |
| Payment ID     | Unique identifier for the payment | Yes       |
| Order ID       | The order the payment belongs to  | Yes       |
| Amount Paid    | Amount paid in this transaction   | Yes       |
| Payment Date   | Date payment was made             | Yes       |
| Payment Method | How the customer paid             | Yes       |
| Payment Type   | Full or installment               | Yes       |
| Reference      | Optional payment/reference number | No        |
| Notes          | Additional payment information    | No        |
PAYMENT
────────────────────────
Payment ID
Order ID
Amount Paid
Payment Date
Payment Method
Payment Type
Reference
Notes
ORDER
  │
  │ can have many
  ▼
PAYMENTS
## 8. Supplier Entity
SUPPLIER
────────────────────────
Supplier ID
Supplier Name
Contact Person
Phone Number
Country
Address
Notes
Status
## 9. Supplier Order Entity
SUPPLIER ORDER
────────────────────────
Supplier Order ID
Supplier ID
Batch ID
Order Date
Status
Total Cost
Payment Status
Notes
| Field             | What it means                                   | Required? |
| ----------------- | ----------------------------------------------- | --------- |
| Supplier Order ID | Unique identifier for the supplier order        | Yes       |
| Supplier ID       | Supplier receiving the order                    | Yes       |
| Batch ID          | Batch from which the supplier order was created | Yes       |
| Order Date        | Date Mum placed the supplier order              | Yes       |
| Status            | Current status of supplier order                | Yes       |
| Total Cost        | Total amount Mum owes/pays supplier             | Yes       |
| Payment Status    | Whether supplier has been paid                  | Yes       |
| Notes             | Additional information                          | No        |

## 10. Supplier Order Item Entity
| Field                  | Purpose                             |
| ---------------------- | ----------------------------------- |
| Supplier Order Item ID | Unique identifier                   |
| Supplier Order ID      | Supplier order this item belongs to |
| Product ID             | Product being purchased             |
| Quantity               | Number of units ordered             |
| Supplier Unit Cost     | Cost per unit from supplier         |
| Subtotal               | Quantity × supplier unit cost       |
SUPPLIER ORDER ITEM
────────────────────────
Supplier Order Item ID
Supplier Order ID
Product ID
Quantity
Supplier Unit Cost
Subtotal

## 11. Shipment Entity
SHIPMENT
────────────────────────
Shipment ID
Supplier Order ID
Tracking Number
Shipping Method
Shipment Date
Estimated Arrival Date
Actual Arrival Date
Status
Notes
SUPPLIER ORDER
      │
      ├── Shipment 1
      └── Shipment 2

      ## 12. Shipment Item Entity
      | Field                  | Purpose                          |
| ---------------------- | -------------------------------- |
| Shipment Item ID       | Unique identifier                |
| Shipment ID            | Shipment containing the item     |
| Supplier Order Item ID | Original supplier-order item     |
| Quantity Shipped       | Quantity in this shipment        |
| Quantity Received      | Quantity actually received       |
| Status                 | Pending, Shipped, Received, etc. |
SHIPMENT ITEM
────────────────────────
Shipment Item ID
Shipment ID
Supplier Order Item ID
Quantity Shipped
Quantity Received
Status

## 13. Supplier Payment Entity
| Field               | Purpose                       |
| ------------------- | ----------------------------- |
| Supplier Payment ID | Unique identifier             |
| Supplier Order ID   | Supplier order being paid for |
| Amount Paid         | Amount Mum paid               |
| Payment Date        | Date payment was made         |
| Payment Method      | How Mum paid                  |
| Reference           | Payment reference             |
| Notes               | Additional information        |
SUPPLIER PAYMENT
────────────────────────
Supplier Payment ID
Supplier Order ID
Amount Paid
Payment Date
Payment Method
Reference
Notes

## 14. Delivery Entity
| Field           | Purpose                         |
| --------------- | ------------------------------- |
| Delivery ID     | Unique identifier               |
| Order ID        | Customer order                  |
| Delivery Method | Pickup or Delivery              |
| Delivery State  | Customer's state                |
| Delivery City   | Customer's city                 |
| Delivery Fee    | Amount charged                  |
| Delivery Status | Pending, Ready, Delivered, etc. |
| Delivery Date   | Date delivered/picked up        |
| Notes           | Additional information          |
DELIVERY
────────────────────────
Delivery ID
Order ID
Delivery Method
Delivery State
Delivery City
Delivery Fee
Delivery Status
Delivery Date
Notes


## 15. Financial Calculations
### Customer Revenue

Customer Revenue is calculated from the quantity and price recorded
on each order item.

### Customer Balance

Customer Balance = Order Total - Total Customer Payments

### Supplier Cost

Supplier Cost is calculated from the quantity and supplier unit cost
recorded on each supplier order item.

### Supplier Balance

Supplier Balance = Supplier Order Total - Total Supplier Payments

### Gross Profit

Gross Profit = Customer Product Revenue - Supplier Product Cost

### Batch Financial Summary

The system summarizes customer revenue, customer payments,
outstanding customer balances, supplier costs, supplier payments,
supplier balances, and gross profit for each batch.


## Entity Relationships

1. Category 1 ────< Product

2. Customer 1 ────< Order

3. Batch 1 ───────< Order

4. Order 1 ───────< Order Item

5. Product 1 ─────< Order Item

6. Supplier 1 ────< Supplier Order

7. Batch 1 ───────< Supplier Order

8. Supplier Order 1 ────< Supplier Order Item

9. Product 1 ─────< Supplier Order Item

10. Supplier Order 1 ────< Shipment

11. Shipment 1 ───< Shipment Item

12. Supplier Order Item 1 ───< Shipment Item

13. Order 1 ──────< Payment

14. Supplier Order 1 ───< Supplier Payment

15. Order 1 ──────< Delivery

