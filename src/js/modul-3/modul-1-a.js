const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {

      if (item.name === product.name) {
        console.log('This product has been available already in cart, start adding quantity');
        item.quantity +=1;
        return;
      }
    }

    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    // console.log(productName);
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (productName === item.name) {
        console.log('We have found item and removing it');
        console.log('Index to delete item: ', i);

        this.items.splice(i, 1);
      }
    } 
  },
  clear() {
    // this.items.length = 0; //It is NOT good practice!!!
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      // console.log(item);
      total += item.price * item.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        console.log(item);
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      
      if (item.name === productName) {
        // console.log(item);
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }

    }
  }
}
// console.table(cart.getItems());

cart.add({name: 'apple', price: 50});
cart.add({name: 'orange', price: 70});
cart.add({name: 'apple', price: 50});
console.table(cart.getItems());

// cart.remove('apple');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

cart.increaseQuantity('orange');
console.table(cart.getItems());



cart.decreaseQuantity('apple');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
