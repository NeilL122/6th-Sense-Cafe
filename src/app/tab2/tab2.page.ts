import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  coffeeDrinks = [
  { name: 'Espresso', price: 2.50 },
  { name: 'Americano', price: 3.00 },
  { name: 'Latte', price: 4.00 },
  { name: 'Cappuccino', price: 4.00 },
  { name: 'Mocha', price: 4.50 },
  { name: 'Macchiato', price: 3.75 },
  { name: 'Cold Brew', price: 4.25 },
];

foodItems = [
  { name: 'Croissant', price: 3.00 },
  { name: 'Muffin', price: 2.75 },
  { name: 'Bagel with Cream Cheese', price: 3.50 },
  { name: 'Breakfast Sandwich', price: 5.00 },
  { name: 'Avocado Toast', price: 4.50 },
  { name: 'Cookies', price: 2.00 },
  { name: 'Brownie', price: 2.50 }
];

beverages = [
  { name: 'Hot Chocolate', price: 3.00 },
  { name: 'Chai Latte', price: 4.00 },
  { name: 'Iced Tea', price: 2.50 },
  { name: 'Fresh Juice', price: 3.50 },
  { name: 'Bottled Water', price: 1.50 },
  { name: 'Smoothies', price: 4.50 }
];
    cart: any[] = [];
  total: number = 0;

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    const savedCart = await this.storage['get']('cart');
    if (savedCart) {
      this.cart = savedCart;
      this.calculateTotal();
    }
  }

  addToCart(item: any) {
    this.cart.push(item);
    this.calculateTotal();
    this.storage['set']('cart', this.cart); 
    console.log('Added to cart:', item);
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, item) => acc + item.price, 0);
  }

}
