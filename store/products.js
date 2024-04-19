const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "./images/celular.png";

class Product {
  constructor(
    id,
    title,
    price,
    stock,
    images,
    onSale,
    supplier,
    colors = [],
    description
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onSale = onSale;
    this._supplier = supplier;
    this.colors = colors;
    this.description = description;
  }

  get supplier() {
    return this._supplier;
  }
  set supplier(newName) {
    this._supplier = newName;
  }

  sellUnits(units) {
    if (this.stock - units < 0) return console.error("No hay suficiente stock");
    this.stock -= units;
    console.log(
      `Se vendieron ${units} unidades de ${this.title}, quedan: ${this.stock}`
    );
  }
}

const prod1 = new Product(
  1,
  "Iphone",
  500,
  20,
  ["images/iphone1", "images/iphone2", "images/iphone3"],
  false,
  "Apple",
  ["rojo", "verde"],
  "descripción del producto"
);
const prod2 = new Product(
  2,
  "Samsung",
  500,
  15,
  ["images/samsung1", "images/samsung2", "images/samsung3"],
  true,
  "Samsung",
  ["azul", "plateado"],
  "descripción del producto"
);
const prod3 = new Product(
  3,
  "Xiaomi-Pro",
  350,
  ["images/xiaomi1", "images/xiaomi2"],
  10,
  true,
  "Xiaomi",
  ["dorado", "negro"],
  "descripción del producto"
);
const prod4 = new Product(
  4,
  "Huawei",
  350,
  12,
  ["images/huawei1", "images/huawei2"],
  true,
  "Huawei",
  ["morado", "negro"],
  "descripción del producto"
);

const products = [prod1, prod2, prod3, prod4];

console.log(products);
