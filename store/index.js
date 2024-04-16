let totalAPagar = 0;
let listProducts = "";

const cantidad = Number(prompt("¿Cuántos productos desea llevar?"));

for (let index = 1; index <= cantidad; index++) {
  const nombre = String(prompt(`${listProducts}¿Qué producto desea llevar?`));
  const unidades = Number(
    prompt(
      `${listProducts}¿Cuántas unidades del producto "${nombre}" desea llevar?`
    )
  );
  const precio = Number(
    prompt(
      `${listProducts}¿Cuánto cuesta cada unidad del producto "${nombre}"?`
    )
  );
  const subtotal = unidades * precio;
  listProducts += `Producto: "${nombre}" - Cantidad: ${unidades} - Precio: ${precio}\n`;
  totalAPagar += subtotal;
}

alert(`${listProducts}El total a pagar es: ${totalAPagar}`);
