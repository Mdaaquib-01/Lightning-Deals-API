
# Lightning-Deals-API

The Lightning Deals API is a Node.js application that allows users to create and manage deals, place orders, and view available deals. The application includes two modules: admin and user.

The admin module is designed for the administrator of the application. Admins can create and update deals, as well as approve or reject orders placed by users. Admins can also view all orders and update the status of each order.

The user module is designed for users who wish to view available deals and place orders. Users can only view deals that are currently available. When a user places an order, the order is sent to the admin for approval. If the admin approves the order, the quantity of the ordered item will be reduced.

The application uses Node.js and is built using a RESTful API architecture. The API endpoints are designed to handle CRUD operations for deals and orders. The user interface is built using HTML and CSS, and includes pages for managing deals, orders, and users. 


## Run Locally

Clone the project

```bash
  git clone https://github.com/Mdaaquib-01/Lightning-Deals-API.git
```

Go to the project directory

```bash
  cd Lightning-Deals-API
```

Install dependencies

```bash
  npm install express bodyParser moment cors
```

Start the server

```bash
  node api.js
```
### Make sure Node JS is installed 
#### When the server is working

  [Admin](https://mdaaquib-01.github.io/Lightning-Deals-API/index.html)

  [User](https://mdaaquib-01.github.io/Lightning-Deals-API/new.html)

Open these live pages to use the API. Make sure the server is running in your local machine.
## Features

- Admin Can add deals, update deals and accept orders from users
- Users can see only available deals and place order with required quantity.
- Once the order is placed a record will be created for the user.
- When the Admin Accepts/Rejects user will able to see the status.
- The quantity of the ordered item will be reduced when the admin approves the order.

## Demo

https://user-images.githubusercontent.com/75574024/220180781-b540df1e-bfe2-4d5a-bd87-9477fb0166e0.mp4

## Screenshots

![image](https://user-images.githubusercontent.com/75574024/220175473-8c91f7aa-050c-4e98-b798-ad5d8db3eba7.png)
![image](https://user-images.githubusercontent.com/75574024/220175605-845c134f-4a1a-415a-bcda-9ced851f8b24.png)
![image](https://user-images.githubusercontent.com/75574024/220175789-f18ab273-8123-4efa-a0b0-b82162d5b62a.png)
![image](https://user-images.githubusercontent.com/75574024/220175851-4a7b0a78-376d-4679-87d3-2d1c363b171e.png)
![image](https://user-images.githubusercontent.com/75574024/220175901-f42ae8a5-5693-42b4-9c12-045ee91f3488.png)
![image](https://user-images.githubusercontent.com/75574024/220175954-7d108fcb-99c3-42bc-b9c9-362dba1a16df.png)
![image](https://user-images.githubusercontent.com/75574024/220176009-bc4cc3dc-d1b9-4650-bb38-34321ebe3784.png)




