import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Cart 
    let cartIcon = document.querySelector('.cart-icon')
    let cart = document.querySelector('.cart')
    let closeCart = document.querySelector('#close-cart')
    
    cartIcon?.addEventListener('click', function(){
      cart?.classList.add('active')
    })
    closeCart?.addEventListener('click', function(){
      cart?.classList.remove('active')
    })

  }

}
