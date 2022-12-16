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

<<<<<<< HEAD
=======
    //----------------HOUSE----------------------

    //CACTUS
    var cactusOne = document.getElementsByClassName('open-cactus')[0]
    var cactusTwo = document.getElementsByClassName('cactus')[0]
    var closeCactus = document.getElementsByClassName('close-cactus')[0]

    cactusOne.addEventListener('click', function(){
      cactusTwo.classList.add('active')
    })
    closeCactus.addEventListener('click', function(){
      cactusTwo.classList.remove('active')
    })
>>>>>>> productscomp

    //CUCHILLO MODERNO
    var homeTwo = document.getElementsByClassName('open-house-two')[0]
    var cartHousetwo = document.getElementsByClassName('cart-house-two')[0]
    var closeCartHouseTwo = document.getElementsByClassName('close-house-two')[0]

    homeTwo.addEventListener('click', function(){
    cartHousetwo.classList.add('active')
    })
    closeCartHouseTwo.addEventListener('click', function(){
    cartHousetwo.classList.remove('active')
    })
        
    //ALMOHADILLA
    var homeThree = document.getElementsByClassName('open-house-three')[0]
    var cartHouseThree = document.getElementsByClassName('cart-house-three')[0]
    var closeCartHouseThree = document.getElementsByClassName('close-house-three')[0]
    
    homeThree.addEventListener('click', function(){
    cartHouseThree.classList.add('active')
    })
    closeCartHouseThree.addEventListener('click', function(){
    cartHouseThree.classList.remove('active')  
    })

    //SET-COCINA
    var homeFour = document.getElementsByClassName('open-house-four')[0]
    var cartHouseFour = document.getElementsByClassName('cart-house-four')[0]
    var closeCartHouseFour = document.getElementsByClassName('close-house-four')[0]
    
    homeFour.addEventListener('click', function(){
    cartHouseFour.classList.add('active')
    })
    closeCartHouseFour.addEventListener('click', function(){
    cartHouseFour.classList.remove('active')  
    })

    //DISPENSADOR DE AGUA
    var homeFive = document.getElementsByClassName('open-house-five')[0]
    var cartHouseFive = document.getElementsByClassName('cart-house-five')[0]
    var closeCartHouseFive = document.getElementsByClassName('close-house-five')[0]
    
    homeFive.addEventListener('click', function(){
    cartHouseFive.classList.add('active')
    })
    closeCartHouseFive.addEventListener('click', function(){
    cartHouseFive.classList.remove('active')  
    })

    //COJIN ELECTRICO
    var homeSix = document.getElementsByClassName('open-house-six')[0]
    var cartHouseSix = document.getElementsByClassName('cart-house-six')[0]
    var closeCartHouseSix = document.getElementsByClassName('close-house-six')[0]
    
    homeSix.addEventListener('click', function(){
    cartHouseSix.classList.add('active')
    })
    closeCartHouseSix.addEventListener('click', function(){
    cartHouseSix.classList.remove('active')  
    })

    //ARO DE LUZ
    var homeSeven = document.getElementsByClassName('open-house-seven')[0]
    var cartHouseSeven = document.getElementsByClassName('cart-house-seven')[0]
    var closeCartHouseSeven = document.getElementsByClassName('close-house-seven')[0]
    
    homeSeven.addEventListener('click', function(){
    cartHouseSeven.classList.add('active')
    })
    closeCartHouseSeven.addEventListener('click', function(){
    cartHouseSeven.classList.remove('active')  
    })

    //PROTECTOR SOFA
    var homeEich = document.getElementsByClassName('open-house-eich')[0]
    var cartHouseEich = document.getElementsByClassName('cart-house-eich')[0]
    var closeCartHouseEich = document.getElementsByClassName('close-house-eich')[0]
    
    homeEich.addEventListener('click', function(){
    cartHouseEich.classList.add('active')
    })
    closeCartHouseEich.addEventListener('click', function(){
    cartHouseEich.classList.remove('active')  
    })

    var techOne = document.getElementsByClassName('open-house-nine')[0]

    techOne.addEventListener('click', function(){
      alert('hola')
    })




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
<<<<<<< HEAD
=======
  

>>>>>>> productscomp
}
