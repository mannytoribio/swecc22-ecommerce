// Imports our connection from the connectDb.js file
const { connectToFirebase } = require("../connectDb")

// NEED HELP WITH DATA ERROR AND ORDER LOGIC

exports.getAllCustomers = async (req, res) => {
  // Connect to firebase
  const db = connectToFirebase()
  // Get all customers from firebase
  const customers = await db.collection("customers").get()
  // Send customers to client
  res.json(customers.docs.map((doc) => doc.data()))
}

exports.createCustomer = async (req, res) => {
  const db = connectToFirebase()
  // Create customer in firebase
  await db.collection("customers").add(req.body)
  // Send success message to client
  res.send({
    message: "Customer created successfully",
  })
}

exports.getCustomerById = async (req, res) => {
  const db = connectToFirebase()
  const { customerId } = req.params
  // Get customer from firebase
  const customer = await db.collection("customers").doc(customerId).get()
  // Send customer to client
  res.json(customer.data())
}

exports.updateCustomer = async (req, res) => {
  const db = connectToFirebase()
  const { customerId } = req.params
  await db.collection("customers").doc(customerId).update(req.body)
  res.send({
    message: "Customer updated successfully",
  })
}

exports.deleteCustomer = async (req, res) => {
  const db = connectToFirebase()
  const { customerId } = req.params
  await db.collection("customers").doc(customerId).delete()
  res.send({
    message: "Customer deleted successfully",
  })
}
