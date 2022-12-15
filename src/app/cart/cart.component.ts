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

    //Cart Working
    if(document.readyState == 'loading'){
      document.addEventListener('DOMContentLoaded', ready)
    }else{
      ready();
    }


    // Making Function
    function ready(){
      //Remove Items From Cart
      var removeCartButtons = document.getElementsByClassName('cart-remove')
      console.log(removeCartButtons)
      for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
      }
      // Quantity changes
      var quantityInputs = document.getElementsByClassName('cart-quantity')
      for (var i = 0; i < removeCartButtons.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
      }
      // Add To Cart
      var addCart = document.getElementsByClassName('add-cart')
      for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked);
      }
    }
  
    //Remove Items From Cart
    function removeCartItem(event:any){
      var buttonClicked = event.target
      buttonClicked.parentElement.remove()
      upgatetotal();
    }
    //Quantity Changes
    function quantityChanged(event:any){
      var input = event.target
      if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
      }
      upgatetotal()
    }

    //Add to Cart
    function addCartClicked(event:any){
      var button = event.target
      var shopProducts = button.parentElement
      var title = shopProducts.getElementsByClassName('product-title')[0]
      console.log(title)
    
    }

    // Upgate Total
    function upgatetotal(){
      var cartContent = document.getElementsByClassName('cart-content')[0]
      var cartBoxes = cartContent.getElementsByClassName('cart-box')
      var total = 0;
      for (var i = 0; i < cartBoxes.length; i++){  
        var cartBox = cartBoxes[i] 
        var priceElement = cartBox.getElementsByClassName('cart-price')[0] as HTMLElement
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0] as HTMLInputElement
        var price = parseFloat(priceElement.innerText.replace("$", ""));  
        var quantity = quantityElement.value 
        total = total + (price * +quantity)

        // If price Contain some Cents Value
        total = Math.round(total * 100) / 100;

        var priceNow = document.getElementsByClassName('total-price')[0] as HTMLInputElement
        priceNow.innerText = "$" + total;  
      }
    }

  }
}
