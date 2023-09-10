# Sales Analytics <br>

**POST** createProduct 
---
> http://localhost:8000/api/v1/create-product
- Example Body Data:

| key  | Description                | value      | type                         | 
|------------|----------------------------|---------------|----------------------
| product    | Name of the product        | "WiWU Protective Keyboard" | String  |
| quantity   | Quantity of the product    | 1             | Number               |
| price      | Price of the product (in currency) | 3500  | Number               |
| date       | Created date               |   Date.now    | Date                 |

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

**GET** top-selled
---
> http://localhost:8000/api/v1/api/sales/top-products

- Response
  
```json
{
    "data":[
        {
            "_id":"MacBook Pro M1 8/512GB",
            "totalRevenue":1680000
        },
        {
            "_id":"iPhone 13 Pro Max",
            "totalRevenue":945000
        },
        {
            "_id":"iPhone XS",
            "totalRevenue":504000
        },
        {
            "_id":"O-Code Blazer",
            "totalRevenue":107000
        },
        {
            "_id":"Nike-shoe",
            "totalRevenue":36000
        }
    ]
}
```

**GET** avg-price
---
> http://localhost:8000/api/v1/api/sales/average-price

- Response
  
```json

    {
      "data": 34420
    }
     
```

**GET**  revenue-by-month
---
> http://localhost:8000/api/v1/api/sales/revenue-by-month

- Response
  
```json
{
   "data":[
      {
         "totalRevenue":9600,
         "monthName":"May",
         "year":2022,
         "month":5
      },
      {
         "totalRevenue":3400,
         "monthName":"June",
         "year":2022,
         "month":6
      },
      {
         "totalRevenue":92750,
         "monthName":"August",
         "year":2022,
         "month":8
      },
      {
         "totalRevenue":675500,
         "monthName":"January",
         "year":2019,
         "month":1
      },
      {
         "totalRevenue":420000,
         "monthName":"April",
         "year":2023,
         "month":4
      },
      {
         "totalRevenue":354000,
         "monthName":"June",
         "year":2023,
         "month":6
      },
      {
         "totalRevenue":1690500,
         "monthName":"September",
         "year":2023,
         "month":9
      },
      {
         "totalRevenue":41500,
         "monthName":"February",
         "year":2021,
         "month":2
      },
      {
         "totalRevenue":5800,
         "monthName":"March",
         "year":2021,
         "month":3
      },
      {
         "totalRevenue":20000,
         "monthName":"October",
         "year":2020,
         "month":10
      }
   ]
}
     
```

**GET** max-quantity-product
---
>  http://localhost:8000/api/v1/api/sales/highest-quantity-sold

- Response
  
```json

{
   "data":[
      {
         "_id":"Nike-shoe",
         "maxQuantitySold":8
      }
   ]
}
     
```

**GET** salary-expense
---
>  http://localhost:8000/api/v1/api/sales/department-salary-expense

- Response
  
```json

{
   "data":[
      {
         "totalSalaryExpense":1680000,
         "department":"Laptops"
      },
      {
         "totalSalaryExpense":1449000,
         "department":"Mobile"
      },
      {
         "totalSalaryExpense":136300,
         "department":"Clothing"
      },
      {
         "totalSalaryExpense":36000,
         "department":"Footwear"
      },
      {
         "totalSalaryExpense":11750,
         "department":"Accessories"
      }
   ]
}
     
```
