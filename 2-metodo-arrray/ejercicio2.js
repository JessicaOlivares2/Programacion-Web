//metodo push
//const frutas = ["banana", "frutilla"];
//const nuevaFruta = "pera";
//
//frutas.push(nuevaFruta);
//console.log(frutas);
////metodo shift
//const frutaEliminada = fruta.shift();
//console.log(frutaEliminada);

//En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
//El primer elemento lo sacamos del array, ya que es el nombre del cliente.
//Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
//Después añadimos al final del array el nombre del usuario que sacamos antes.
//Recuerden que debes devolver el array modificado:
const array = ["Jessica Olivares", "hamburguesa", "papas"];
function procesarPedido(pedidos) {
  const pedidoEliminado = pedidos.shift();
  pedidos.unshift("bebida"); //este agruega al principio
  pedidos.push(pedidoEliminado); //este agruega al final
  return pedidos;
}
console.log(procesarPedido(array));
