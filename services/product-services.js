// Imports our connection from the connectDb.js file
const { connectToFirebase } = require("../connectDb")

exports.getAllProducts = async (req, res) => {
  // Connect to firebase
  const db = connectToFirebase()
  // Get all products from firebase
  const products = await db.collection("products").get()
  // Send products to client
  res.json(products.docs.map((doc) => doc.data()))
}

exports.createProduct = async (req, res) => {
  const db = connectToFirebase()
  // Create product in firebase
  await db.collection("products").add(req.body)
  // Send success message to client
  res.send({
    message: "Product created successfully",
  })
}

exports.getProductById = async (req, res) => {
  const db = connectToFirebase()
  const { productId } = req.params
  // Get product from firebase
  const product = await db.collection("products").doc(productId).get()
  // Send product to client
  res.json(...product.data())
}

exports.updateProduct = async (req, res) => {
  const db = connectToFirebase()
  const { productId } = req.params
  await db.collection("products").doc(productId).update(req.body)
  res.send({
    message: "Product updated successfully",
  })
}

exports.deleteProduct = async (req, res) => {
  const db = connectToFirebase()
  const { productId } = req.params
  await db.collection("products").doc(productId).delete()
  res.send({
    message: "Product deleted successfully",
  })
}
