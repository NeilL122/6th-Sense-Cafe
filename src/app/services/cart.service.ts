import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.saveCart();
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}