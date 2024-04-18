const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "./images/celular.png";

class Product {
  constructor(id, title, price, stock, onSale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = [];
    this.onSale = onSale;
    this._supplier = supplier;
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

const prod1 = new Product(1, "Iphone", 500, 20, false, "Apple");
const prod2 = new Product(2, "Samsung", 500, 15, true, "Samsung");
const prod3 = new Product(3, "Xiaomi-Pro", 350, 10, true, "Xiaomi");
const prod4 = new Product(4, "Huawei", 350, 12, true, "Huawei");

const products = [prod1, prod2, prod3, prod4];

console.log(products);
products.shift();
console.log(products);
products.pop();
console.log(products);
