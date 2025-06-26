import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,  
})
export class CheckoutPage {
  total = 0;
  loading = false;
  errorMessage = '';
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ionViewWillEnter(): void {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  submitOrder() {
    this.errorMessage = '';
    this.loading = true;

    if (this.cartItems.length === 0) {
      this.errorMessage = 'Your cart is empty.';
      this.loading = false;
      return;
    }

    const orderData = {
      userId: 1,
      cartItems: this.cartItems,
      totalPrice: this.total,
    };

    this.checkoutService.placeOrder(orderData).subscribe({
      next: (response: any) => {
        this.loading = false;
        alert(`Your order totaling $${this.total.toFixed(2)} has been placed. Order ID: ${response?.orderId || 'N/A'}`);
        this.cartService.clearCart();
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        this.loading = false;
        this.errorMessage = 'Failed to place order. Please try again later.';
        console.error('Order placement error:', error);
      },
    });
  }
}