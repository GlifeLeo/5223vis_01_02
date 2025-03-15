const databaseItems = [
  {
    imageUrl: "https://picsum.photos/200/300",
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    sl: 1
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    name: "CHECKERED SHIRT",
    size: "Medium",
    color: "Red",
    price: 180,
    sl: 1
  },
  {
    imageUrl: "https://picsum.photos/200/300",
    name: "SKINNY FIT JEANS",
    size: "Large",
    color: "Blue",
    price: 240,
    sl: 1
  }
]

function getCartItems() {
  return databaseItems
}

module.exports = {
  getCartItems
}