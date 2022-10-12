# breadCRUD

breadCRUD project for the bootcamp to help students with any issues.

breadCrud is an app where users can add breads and bakers.

## Routes Table

| Method | Path              | Purpose                                          |
| ------ | ----------------- | ------------------------------------------------ |
| GET    | /                 | Home Page                                        |
| GET    | /breads           | breads and bakers Index Page                     |
| GET    | /bakers           | bakers Index Page                                |
| POST   | /breads           | Create New bread                                 |
| GET    | /breads/new       | Form page for creating a new bread               |
| GET    | /breads/:id       | Details about a particular bread                 |
| GET    | /bakers/:id       | Details about a particular baker                 |
| PUT    | /breads/:id       | Update a particular bread                        |
| GET    | /breads/:id/edit  | Form page for editing an existing bread          |
| DELETE | /breads/:id       | Delete a particular bread                        |
| GET    | /bakers/data/seed | Insert baker seed data into the baker collection |
| GET    | /breads/data/seed | Insert bread seed data into the bread collection |
| GET    | \*                | 404 Page (matches any route not defined above)   |

## Data Schema

Data will be stored in MongoDB with the help of Mongoose.

### Breads

| Field     | Type                  | Example Value                        |
| --------- | --------------------- | ------------------------------------ |
| name      | string                | "Banana Bread"                       |
| hasGluten | boolean               | "true"                               |
| image     | string                | "/images/default.jpg"                |
| baker     | Schema.Types.ObjectID | ObjectId("507f1f77bcf86cd799439011") |

### Bakers

| Field     | Type    | Example Value                                 |
| --------- | ------- | --------------------------------------------- |
| name      | string  | "Chandler"                                    |
| startDate | Date    | "2021-05-09 13:13:06"                         |
| bread     | virtual | "bread: { name: "Banana Bread", {...}, ... }" |

Backend and APIs - breadCRUD activity

### Images

Default Photo by [Raul Angel](https://unsplash.com/@raulangel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
