# Project NGX - Discovery Summary

## 1. Business Overview

Project NGX is a preorder management system for a Nigeria-based preorder business operating from Asaba, Delta State.

The business sources products through suppliers in China. The products themselves may originate from different countries, including Dubai/Arab countries for perfumes and Vietnam for human hair.

The business operates primarily through two preorder batches each month:

* Batch 1: 1st–14th
* Batch 2: 15th–30th

## 2. Product Management

The business sells a wide variety of products, including gadgets, household utilities, office equipment, skincare, clothing, human hair and other goods.

Suppliers may either provide products requested by the business or proactively send information about products they currently have available.

Products have unique internal codes used by the business for easier identification.

Each product may have its own Minimum Order Quantity (MOQ).

## 3. Customer Orders

Customers can order multiple products.

A single customer can have multiple orders across different batches.

Customer information currently required includes:

* Name
* Phone number
* Location
* City

Customer order prices are locked at the price applicable to the batch in which the customer placed and paid for the order. Later price changes do not affect customers who have already paid.

## 4. Payment

Customers generally pay before shipment begins.

For large or expensive orders, installment payments may be allowed.

Installment requirements are not necessarily fixed and may vary according to the product or order. For some expensive gadgets, a larger percentage may be required upfront.

Customers may cancel orders before shipment begins.

Once shipment has started, orders cannot be cancelled and payments are non-refundable.

## 5. Shipping

Most goods are transported from China to Nigeria by sea and typically take approximately two to three months.

Fragile products such as certain gadgets may be transported by air.

A single batch may contain products that arrive at different times.

Suppliers provide tracking IDs/numbers that allow the business to monitor shipments and identify which products are included in each shipment.

Therefore, a batch and a shipment must be treated as separate concepts within the system.

## 6. Delivery and Pickup

Customers may either collect their goods or request delivery.

There is no delivery fee for customer pickup.

Delivery fees depend on the customer's location and current logistics costs. Delivery charges should therefore be editable rather than permanently fixed.

The system should eventually allow the administrator to add or update the delivery fee when goods arrive in Nigeria.

A future customer-facing interface may allow customers to view updated delivery charges.

## 7. Current Record-Keeping Process

The business currently records information primarily using a phone and diary.

The phone is preferred because it is more accessible.

The current process also relies heavily on WhatsApp for communicating available products and recording/updating customer orders.

At the end of each batch, an individual ledger is manually created or reviewed for each customer.

## 8. Major Pain Points

The major problems identified during the interview are:

1. Manual recording consumes significant time.
2. Customer orders can become mixed up.
3. Customers ordering across multiple batches can be difficult to track.
4. Individual customer ledgers take significant time to prepare.
5. Manual MOQ calculations are time-consuming.
6. WhatsApp updates can be forgotten.
7. Previously recorded customer orders may be difficult to locate.
8. Distribution after goods arrive can result in orders being mixed up.
9. Customers may receive incorrect items, requiring corrections and returns.
10. Supplier costs and customer payments are not currently organized into a reliable profit-tracking system.
11. The business does not have an automated view of total supplier costs versus total customer revenue.
12. Manual records may be lost when a diary is misplaced.

## 9. Desired Automation

The most important automation identified by the business owner is the individual customer ledger.

The system should also reduce manual work involved in:

* Recording customer orders
* Tracking products and quantities
* Monitoring MOQ
* Tracking batches
* Tracking shipments
* Recording payments
* Calculating outstanding balances
* Calculating delivery charges
* Organizing customer order history
* Calculating supplier costs
* Calculating revenue
* Calculating gross profit

## 10. Key System Principle

A customer, order, batch, product and shipment must be treated as separate entities.

One customer may have multiple orders.

One order may contain multiple products.

One batch may contain many customer orders.

Products within the same batch may arrive in different shipments.

Therefore, the system must be designed to track these relationships independently rather than treating a batch, order and shipment as the same thing.
