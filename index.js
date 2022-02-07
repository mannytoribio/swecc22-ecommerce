// Imports express from node_modules to create an Express App
const express = require("express")
const {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("./services/customer-services")
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("./services/product-services")

// Sets app as variable that allows us to utilize the express function
const app = express()

// the below lines use perform http requests to the /endpoint using our services (crud)
app.get("/customers", getAllCustomers)
app.post("/customers", createCustomer)
app.get("/customers/:customerId", getCustomerById)
app.post("/customers/:customerId", updateCustomer)
app.delete("/customers/:customerId", deleteCustomer)

app.get("/products", getAllProducts)
app.post("/products", createProduct)
app.get("/products/:productId", getProductById)
app.post("/products/:productId", updateProduct)
app.delete("/products/:productId", deleteProduct)

/* creates a server and listens for changes on the designated port
which is our route
*/
app.listen(3000, () => {
  console.log("Listening On Port 3000")
})
