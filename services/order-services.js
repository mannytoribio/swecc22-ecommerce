const connectToFirebase = require("../connectDb")

exports.getOrder = async (req, res) => {
  const db = connectToFirebase()
  const { orderId } = req.params
  const order = await db.collection("orders").doc(orderId).get()
  res.json(order.data())
}

exports.createOrder = async (req, res) => {
  const db = connectToFirebase()
  await db.collection("orders").add(req.body)
  res.send({
    message: "Order created successfully",
  })
}

exports.updateOrder = async (req, res) => {
  const db = connectToFirebase()
  const { orderId } = req.params
  await db.collection("orders").doc(orderId).update(req.body)
  res.send({
    message: "Order updated successfully",
  })
}

exports.deleteOrder = async (req, res) => {
  const db = connectToFirebase()
  const { orderId } = req.params
  await db.collection("orders").doc(orderId).delete()
  res.send({
    message: "Order deleted successfully",
  })
}

// same function using then()
exports.createOrderThen = (req, res) => {
  const db = connectToFirebase()
  db.collection("orders")
    .insertOne(req.body)
    .then(() => {
      res.send({
        message: "Order created successfully",
      })
    })
}
