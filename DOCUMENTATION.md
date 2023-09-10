# Sales Analytics <br>

**POST** createProduct 
---
> http://localhost:8000/api/v1/create-product
- Example Body Data:

| key  | Description                | value      |
|------------|----------------------------|---------------|
| product    | Name of the product        | "WiWU Protective Keyboard" |
| quantity   | Quantity of the product    | 1             |
| price      | Price of the product (in currency) | 3500        |

**GET** total-revenue
---
> http://localhost:8000/api/v1/api/sales/total-revenue

- Response
  
```json
{
  "data": [
    {
      "_id": 0,
      "sum": 3313050
    }
  ]
}
```

**GET** quantity-by-product
---
> http://localhost:8000/api/v1/api/sales/quantity-by-product

- Response
  
```json
{
  "data": [
    {
      "_id": "Denim-Pant",
      "quantities": 15
      },
      {
      "_id": "iPhone 13 Pro Max",
      "quantities": 7
      },
      {
      "_id": "Nike-shoe",
      "quantities": 18
      },
      {
      "_id": "Polo-Shirt",
      "quantities": 13
      },
      {
      "_id": "iPhone XS",
      "quantities": 12
      },
      {
      "_id": "Phone-case",
      "quantities": 5
      },
      {
      "_id": "Shirt",
      "quantities": 3
      },
      {
      "_id": "O-Code Blazer",
      "quantities": 13
      },
      {
      "_id": "WiWU Protective Keyboard",
      "quantities": 3
      },
      {
      "_id": "MacBook Pro M1 8/512GB",
      "quantities": 12
      }
  ]
}
```
