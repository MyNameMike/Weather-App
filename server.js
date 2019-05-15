const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (req, res) => {
  const customers = [
    {id:1, firstName: "Mike", lastName: "Jime"},
    {id:2, firstName: "Mai", lastName: "Jim"}
  ];
  res.json(customers);
});

app.listen(port, ()=> console.log(`Server started on port ${port}`));