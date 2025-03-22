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

const products = [
  {
    name: "Gradient Graphic T-shirt",
    imageUrl: "https://picsum.photos/200/300",
    price: 145,
    rate: 4,
    discount: 0,
    size: ["S", "M", "L", "XL"],
    color: ["Black", "White", "Blue"],
    id: 1
  },
  {
    name: "Polo with Tipping Details",
    imageUrl: "https://picsum.photos/200/300",
    price: 180,
    rate: 4,
    discount: 10,
    size: ["M", "L", "XL"],
    color: ["Navy", "Red", "Green"],
    id: 2
  },
  {
    name: "Slim Fit Chinos",
    imageUrl: "https://picsum.photos/200/300",
    price: 220,
    rate: 5,
    discount: 15,
    size: ["30", "32", "34", "36"],
    color: ["Beige", "Navy", "Gray"],
    id: 3
  },
  {
    name: "Casual Denim Jacket",
    imageUrl: "https://picsum.photos/200/300",
    price: 350,
    rate: 4.5,
    discount: 20,
    size: ["M", "L", "XL"],
    color: ["Denim Blue", "Black"],
    id: 4
  },
  {
    name: "Hooded Sweatshirt",
    imageUrl: "https://picsum.photos/200/300",
    price: 275,
    rate: 4.2,
    discount: 10,
    size: ["S", "M", "L", "XL"],
    color: ["Gray", "Black", "White"],
    id: 5
  },
  {
    name: "Crew Neck Sweater",
    imageUrl: "https://picsum.photos/200/300",
    price: 190,
    rate: 4.7,
    discount: 5,
    size: ["S", "M", "L"],
    color: ["Brown", "Blue", "Green"],
    id: 6
  },
  {
    name: "Classic Leather Belt",
    imageUrl: "https://picsum.photos/200/300",
    price: 95,
    rate: 4.8,
    discount: 0,
    size: ["One Size"],
    color: ["Brown", "Black"],
    id: 7
  },
  {
    name: "High-Top Sneakers",
    imageUrl: "https://picsum.photos/200/300",
    price: 400,
    rate: 4.6,
    discount: 25,
    size: ["8", "9", "10", "11"],
    color: ["White", "Black", "Red"],
    id: 8
  },
  {
    name: "Sports Joggers",
    imageUrl: "https://picsum.photos/200/300",
    price: 210,
    rate: 4.3,
    discount: 10,
    size: ["S", "M", "L", "XL"],
    color: ["Gray", "Black"],
    id: 9
  },
  {
    name: "Formal Blazer",
    imageUrl: "https://picsum.photos/200/300",
    price: 500,
    rate: 4.9,
    discount: 30,
    size: ["M", "L", "XL"],
    color: ["Black", "Navy", "Gray"],
    id: 10
  },
  {
    name: "Leather Wallet",
    imageUrl: "https://picsum.photos/200/300",
    price: 85,
    rate: 4.7,
    discount: 5,
    size: ["One Size"],
    color: ["Black", "Brown"],
    id: 11
  },
  {
    name: "Aviator Sunglasses",
    imageUrl: "https://picsum.photos/200/300",
    price: 150,
    rate: 4.5,
    discount: 15,
    size: ["One Size"],
    color: ["Black", "Gold"],
    id: 12
  },
  {
    name: "Running Shoes",
    imageUrl: "https://picsum.photos/200/300",
    price: 320,
    rate: 4.4,
    discount: 20,
    size: ["8", "9", "10", "11"],
    color: ["Blue", "Black", "White"],
    id: 13
  },
  {
    name: "Leather Watch",
    imageUrl: "https://picsum.photos/200/300",
    price: 600,
    rate: 5,
    discount: 35,
    size: ["One Size"],
    color: ["Black", "Brown"],
    id: 14
  },
  {
    name: "Cargo Pants",
    imageUrl: "https://picsum.photos/200/300",
    price: 260,
    rate: 4.3,
    discount: 10,
    size: ["30", "32", "34", "36"],
    color: ["Green", "Black", "Khaki"],
    id: 15
  },
  {
    name: "Slip-On Loafers",
    imageUrl: "https://picsum.photos/200/300",
    price: 290,
    rate: 4.6,
    discount: 20,
    size: ["8", "9", "10", "11"],
    color: ["Black", "Brown"],
    id: 16
  },
  {
    name: "Graphic Hoodie",
    imageUrl: "https://picsum.photos/200/300",
    price: 310,
    rate: 4.8,
    discount: 25,
    size: ["S", "M", "L", "XL"],
    color: ["Red", "Black", "Gray"],
    id: 17
  },
  {
    name: "Winter Gloves",
    imageUrl: "https://picsum.photos/200/300",
    price: 75,
    rate: 4.2,
    discount: 5,
    size: ["S", "M", "L"],
    color: ["Black", "Gray", "Navy"],
    id: 18
  },
  {
    name: "Baseball Cap",
    imageUrl: "https://picsum.photos/200/300",
    price: 55,
    rate: 4.5,
    discount: 10,
    size: ["One Size"],
    color: ["Black", "White", "Blue"],
    id: 19
  },
  {
    name: "Classic Suit",
    imageUrl: "https://picsum.photos/200/300",
    price: 750,
    rate: 5,
    discount: 40,
    size: ["M", "L", "XL", "XXL"],
    color: ["Black", "Navy", "Gray"],
    id: 20
  }
];


module.exports = {
  getCartItems,
  products
}