const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const cors = require('cors');

const app = express();
app.use(cors());
// Lightning deals data
const lightningDeals = [
  {
    id: "1",
    name: 'Product A',
    actualPrice: 10.0,
    finalPrice: 7.0,
    totalUnits: 100,
    availableUnits: 50,
    expiryTime: moment.utc().add(6, 'hours').toISOString()
  },
  {
    id: "2",
    name: 'Product B',
    actualPrice: 20.0,
    finalPrice: 15.0,
    totalUnits: 200,
    availableUnits: 100,
    expiryTime: moment.utc().add(10, 'hours').toISOString()
  }
];

// Middleware to parse request body as JSON
app.use(bodyParser.json());

// GET /deals endpoint to get all available unexpired deals
app.get('/deals', (req, res) => {
  const unexpiredDeals = lightningDeals.filter(deal => moment.utc(deal.expiryTime).isAfter(moment.utc()));
  res.json(unexpiredDeals);
});


app.post('/new', (req, res) => {
  const { id, name, actualPrice, finalPrice, totalUnits, availableUnits, expiryTime } = req.body;
  
  // Create the new lightning deal object
  const newLightningDeal = {
    id,
    name,
    actualPrice,
    finalPrice,
    totalUnits,
    availableUnits,
    expiryTime: moment.utc(expiryTime).toISOString()
  };
  
 
  
  // Add the new lightning deal to the lightningDeals array
  lightningDeals.push(newLightningDeal);
  
  // Send a response
  res.json({ message: 'Lightning deal added successfully', newLightningDeal });
});
app.post('/upd', (req, res) => {
  const { id, name, actualPrice, finalPrice, totalUnits, availableUnits, expiryTime } = req.body;
  const deal = lightningDeals.find(deal => deal.id === id);
  // const dealIndex = lightningDeals.findIndex(deal => deal.id === id);

  if (!deal) {
    res.status(404).json({ message: 'Deal not found' });
  }
  else{
    deal.name = name;
    deal.actualPrice = actualPrice;
    deal.finalPrice = finalPrice;
    deal.totalUnits = totalUnits;
    deal.availableUnits = availableUnits;
    deal.expiryTime = expiryTime;
    res.send('Deal updated successfully');
  }

});
const orders=[];
app.post('/user', (req, res) => {
  const { id,name, email, product, phone, quantity,status } = req.body;
  const order = { id,name, email, product, phone, quantity,status };

  // Add the order to the orders array
  orders.push(order);

  res.status(201).json({ message: 'Order placed successfully', order });
});

app.get('/ord', (req, res) => {
  res.json(orders);
});
// POST /orders endpoint to place a new order
app.post('/orders', (req, res) => {
  const { dealId, quantity } = req.body;
  const deal = lightningDeals.find(deal => deal.id == dealId);
  if (!deal) {
    res.status(404).json({ message: 'Deal not found' });
  } else if (moment.utc(deal.expiryTime).isBefore(moment.utc())) {
    res.status(400).json({ message: 'Deal has expired' });
  } else if (quantity > deal.availableUnits) {
    res.status(400).json({ message: 'Not enough available units for the deal' });
  } else {
    deal.availableUnits -= quantity;
    res.json({ message: 'Order placed successfully' });
  }
});
app.post('/updStatus',(req,res)=>{
  const {id,status,phone} = req.body;
  const  user = orders.find(ordid => ordid.id == id && ordid.phone == phone);
  if(!user){
    res.status(404).json({ message: 'Deal not found' });
  }
  else{
    user.status = status;
  }
})
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
