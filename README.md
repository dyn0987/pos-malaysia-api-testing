# Pos Malaysia API & UI Automation

## 📌 Overview

This repository includes:

- API testing using Postman (Question 1)
- UI automation using Cypress to test shipment quote calculation (Question 2)

---

## 🧪 Question 1 – API Testing

Postman collection:
In POSTMAN TEST folder:

- File: `Pos Malaysia API Collection.postman_collection.json`
- Includes:
  - Get list of countries
  - Get state by postcode
  - Calculate shipping rate

---

## 🧪 Question 2 – UI Automation Test

### ✅ Test Case Automated:

**Verify user can calculate shipment quote from Malaysia to India.**

### 🛠 Tech:

- Cypress

### 🖥 Steps:

1. Open Rate Calculator page.
2. Select Malaysia as "From" country and `35600` as postcode.
3. Select India as "To" country, leave postcode empty.
4. Enter weight `1`.
5. Click Calculate and check if multiple shipment quotes are displayed.

---

## ▶️ Running the UI Test

### 1. Install dependencies

```bash
npm install
```
