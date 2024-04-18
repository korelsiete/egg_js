const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};

producto1.id = "id123";
producto1["foto"] = "./images/celular.png";

console.log(producto1);

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

const celular1 = new Product();
const celular2 = new Product(1, "Iphone", 500, 20);
const celular3 = new Product(2, "Samsung", 500, 15, true);
const celular4 = new Product(3, "Xiaomi-Pro", 350, 10, true, "Xiaomi");
const celular5 = new Product(4, "Huawei", 350, 12, true, "Huawei");

celular4.supplier = "China";
console.log(celular4.supplier);

celular5.sellUnits(10);
celular5.sellUnits(5);
