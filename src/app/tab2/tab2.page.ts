import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  coffeeDrinks = [
    { name: 'Espresso', price: 2.50, image: 'assets/espresso.jpg' },
    { name: 'Americano', price: 3.00, image: 'assets/americano.jpg' },
    { name: 'Latte', price: 4.00, image: 'assets/latte.jpg' },
    { name: 'Cappuccino', price: 4.00, image: 'assets/cappuccino.jpg' },
    { name: 'Mocha', price: 4.50, image: 'assets/mocha.jpg' },
    { name: 'Macchiato', price: 3.75, image: 'assets/macchiato.jpg' },
    { name: 'Cold Brew', price: 4.25, image: 'assets/coldbrew.jpg' }
  ];

  foodItems = [
    { name: 'Croissant', price: 3.00, image: 'assets/croissant.jpg' },
    { name: 'Muffin', price: 2.75, image: 'assets/muffin.jpg' },
    { name: 'Bagel with Cream Cheese', price: 3.50, image: 'assets/bagel.jpg' },
    { name: 'Breakfast Sandwich', price: 5.00, image: 'assets/sandwich.jpg' },
    { name: 'Avocado Toast', price: 4.50, image: 'assets/avocado_toast.jpg' },
    { name: 'Cookies', price: 2.00, image: 'assets/cookies.jpg' },
    { name: 'Brownie', price: 2.50, image: 'assets/brownie.jpg' }
  ];

  beverages = [
    { name: 'Hot Chocolate', price: 3.00, image: 'assets/hotchocolate.jpg' },
    { name: 'Chai Latte', price: 4.00, image: 'assets/chai.jpg' },
    { name: 'Iced Tea', price: 2.50, image: 'assets/icedtea.jpg' },
    { name: 'Fresh Juice', price: 3.50, image: 'assets/juice.jpg' },
    { name: 'Smoothies', price: 4.50, image: 'assets/smoothie.jpg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(item: any) {
    this.cartService.addToCart(item);
    console.log('Added to cart:', item);
  }
}
