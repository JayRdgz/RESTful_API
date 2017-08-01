// server creation
/* var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(PORT, function() {
  console.log('Server listening on ' + PORT);
});
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var products = [
  {
    id: 1,
    name: 'laptop'
  },
  {
    id: 2,
    name: 'playstation4'
  }
];

var currentID = 2;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// #Products moddified
app.get('/products:products', function(req, res){
  res.send({ products: products });
});

// #Client moddified
app.post('/products/:client', function(req, res) {
  var productName = req.body.name;
  currentID++;

  products.push({
    id: currentID,
    name: productName
  });
  res.send('Succefully created product');
});


app.put('/products/:id', function(req, res) {
  var id = res.params.id;
  var newName = req.body.newName;

  var found = false;

  products.forEach(function(product, index) {
    if (!found && products.id === Number(id)) {
      products.name = newName;
    }
  });
  res.send('Succefully created product');
});

app.listen(PORT, function() {
 console.log('Server listening on ' + PORT);
});
