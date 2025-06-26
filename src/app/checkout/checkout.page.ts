import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,  
})
export class CheckoutPage implements OnInit {
  total = 0;
  loading = false;
  errorMessage = '';

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.total = this.cartService.getTotal();
  }

  submitOrder() {
    this.errorMessage = '';
    this.loading = true;

    const cartItems = this.cartService.getCart();

    if (cartItems.length === 0) {
      this.errorMessage = 'Your cart is empty.';
      this.loading = false;
      return;
    }

    const orderData = {
      userId: 1,
      cartItems,
      totalPrice: this.cartService.getTotal(),
    };

    this.checkoutService.placeOrder(orderData).subscribe({
      next: (response: { orderId: number }) => {
        this.loading = false;
        alert(`Your order totaling $${this.total} has been placed. Order ID: ${response.orderId}`);
        this.cartService.clearCart();
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        this.loading = false;
        this.errorMessage = 'Failed to place order. Please try again later.';
        console.error('Order error:', error);
      },
    });
  }
}
