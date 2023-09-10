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
