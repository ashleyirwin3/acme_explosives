console.log("Heyo");

// Declare Vars //
var categories;
var types;
var products;

// Create function to load categories //
function loadCats(e) {
  var data = JSON.parse(e.target.responseText)
  categories = data.categories
  console.log("categories", categories)
}

// Send XMR request to DOM //
var request1 = new XMLHttpRequest()
request1.addEventListener("load", loadCats)
request1.open("GET", "categories.json")
request1.send()

// Create function to load types //
function loadTypes(e) {
  var data = JSON.parse(e.target.responseText)
  types = data.types
  console.log("types", types)
}

// Send XMR request to DOM //
var request2 = new XMLHttpRequest()
request2.addEventListener("load", loadTypes)
request2.open("GET", "types.json")
request2.send()

// Create function to load products
function loadProducts(e) {
  var data = JSON.parse(e.target.responseText)
  products = data.products
  console.log("products", products)
}

// Send XMR request to DOM //
var request3 = new XMLHttpRequest()
request3.addEventListener("load", loadProducts)
request3.open("GET", "products.json")
request3.send()
