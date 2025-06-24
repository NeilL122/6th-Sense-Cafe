import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {

  cart: any[] = [];
  total: number = 0;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  ionViewWillEnter() {
    this.loadCart();
  }

  async loadCart() {
    const savedCart = await this.storage.get('cart');
    if (savedCart) {
      this.cart = savedCart;
      this.total = this.cart.reduce((acc, item) => acc + item.price, 0);
    }
  }

  async clearCart() {
    this.cart = [];
    this.total = 0;
    await this.storage.remove('cart');
  }

}
