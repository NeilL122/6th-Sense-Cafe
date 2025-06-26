import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  registerData = {
    fullName: '',
    email: '',
    password: '',
  };

  constructor(private toastCtrl: ToastController, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async onRegister() {
    const toast = await this.toastCtrl.create({
      message: `Thanks for registering, ${this.registerData.fullName}!`,
      duration: 2000,
      color: 'success',
    });
    toast.present();

    // Reset form
    this.registerData = { fullName: '', email: '', password: '' };

    // Navigate to Home page
    this.router.navigateByUrl('/home');
  }

}
