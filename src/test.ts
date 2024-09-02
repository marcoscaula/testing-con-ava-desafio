import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  const user1 = new User("marcos caula");
  const producto2 = new Product("product 2", 100); 
  user1.addProduct(producto2);
  console.log(user1.products);
  user1.addProduct(new Product("producto 3", 23));
  console.log(user1.products);
  t.is(user1.name, "marcos caula");
  t.is(producto2.name,"product 2");
  t.is(producto2.price,100);
});
