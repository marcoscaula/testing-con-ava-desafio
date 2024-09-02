class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  getProduct(producto: Product):Product{
    return this.products.find(p => p === producto);
  }
}

export { User, Product };
