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

    //----------------PRODUCTOS PARA EL CARRITO-----------------

    //......................HOUSE........................

    //PRODUCT 1
    var addOneHouse = document.getElementsByClassName('add-house-one')[0]
    var CartOneHouse = document.getElementsByClassName('cart-house-one')[0]
    
    addOneHouse.addEventListener('click', function(){
      CartOneHouse.classList.add('active')
    })
    
    //PRODUCT 2
    var addTwoHouse = document.getElementsByClassName('add-house-two')[0]
    var CartTwoHouse = document.getElementsByClassName('cart-house-two')[0]
    
    addTwoHouse.addEventListener('click', function(){
      CartTwoHouse.classList.add('active')
    })

    //PRODUCT 3
    var addThreeHouse = document.getElementsByClassName('add-house-three')[0]
    var CartThreeHouse = document.getElementsByClassName('cart-house-three')[0]
    
    addThreeHouse.addEventListener('click', function(){
      CartThreeHouse.classList.add('active')
    })

    //PRODUCT 4
    var addFourHouse = document.getElementsByClassName('add-house-four')[0]
    var CartFourHouse = document.getElementsByClassName('cart-house-four')[0]
    
    addFourHouse.addEventListener('click', function(){
      CartFourHouse.classList.add('active')
    })

    //PRODUCT 5
    var addFiveHouse = document.getElementsByClassName('add-house-five')[0]
    var CartFiveHouse = document.getElementsByClassName('cart-house-five')[0]
    
    addFiveHouse.addEventListener('click', function(){
      CartFiveHouse.classList.add('active')
    })

    //PRODUCT 6
    var addSixHouse = document.getElementsByClassName('add-house-six')[0]
    var CartSixHouse = document.getElementsByClassName('cart-house-six')[0]
    
    addSixHouse.addEventListener('click', function(){
      CartSixHouse.classList.add('active')
    })

    //PRODUCT 7
    var addSevenHouse = document.getElementsByClassName('add-house-seven')[0]
    var CartSevenHouse = document.getElementsByClassName('cart-house-seven')[0]
    
    addSevenHouse.addEventListener('click', function(){
      CartSevenHouse.classList.add('active')
    })

    //PRODUCT 8
    var addEichHouse = document.getElementsByClassName('add-house-eich')[0]
    var CartEichHouse = document.getElementsByClassName('cart-house-eich')[0]
    
    addEichHouse.addEventListener('click', function(){
      CartEichHouse.classList.add('active')
    })

    //......................TECH........................

    //PRODUCT 1
    var addOneTech = document.getElementsByClassName('add-tech-one')[0]
    var CartOneTech = document.getElementsByClassName('cart-tech-one')[0]
    
    addOneTech.addEventListener('click', function(){
      CartOneTech.classList.add('active')
    })

    //PRODUCT 2
    var addTwoTech = document.getElementsByClassName('add-tech-two')[0]
    var CartTwoTech = document.getElementsByClassName('cart-tech-two')[0]
    
    addTwoTech.addEventListener('click', function(){
      CartTwoTech.classList.add('active')
    })

    //PRODUCT 3
    var addThreeTech = document.getElementsByClassName('add-tech-three')[0]
    var CartThreeTech = document.getElementsByClassName('cart-tech-three')[0]
    
    addThreeTech.addEventListener('click', function(){
    CartThreeTech.classList.add('active')
    })

    //PRODUCT 4
    var addFourTech = document.getElementsByClassName('add-tech-four')[0]
    var CartFourTech = document.getElementsByClassName('cart-tech-four')[0]
    
    addFourTech.addEventListener('click', function(){
      CartFourTech.classList.add('active')
    })

    //PRODUCT 5
    var addFiveTech = document.getElementsByClassName('add-tech-five')[0]
    var CartFiveTech = document.getElementsByClassName('cart-tech-five')[0]
    
    addFiveTech.addEventListener('click', function(){
      CartFiveTech.classList.add('active')
    })

    //PRODUCT 6
    var addSixTech = document.getElementsByClassName('add-tech-six')[0]
    var CartSixTech = document.getElementsByClassName('cart-tech-six')[0]
    
    addSixTech.addEventListener('click', function(){
      CartSixTech.classList.add('active')
    })

    //PRODUCT 7
    var addSevenTech = document.getElementsByClassName('add-tech-seven')[0]
    var CartSevenTech = document.getElementsByClassName('cart-tech-seven')[0]
    
    addSevenTech.addEventListener('click', function(){
      CartSevenTech.classList.add('active')
    })

    //PRODUCT 8
    var addEichTech = document.getElementsByClassName('add-tech-eich')[0]
    var CartEichTech = document.getElementsByClassName('cart-tech-eich')[0]
    
    addEichTech.addEventListener('click', function(){
      CartEichTech.classList.add('active')
    })  

     //......................PETS........................

    //PRODUCT 1
    var addOnePets = document.getElementsByClassName('add-pets-one')[0]
    var CartOnePets = document.getElementsByClassName('cart-pets-one')[0]
    
    addOnePets.addEventListener('click', function(){
      CartOnePets.classList.add('active')
    })

    //PRODUCT 2
    var addTwoPets = document.getElementsByClassName('add-pets-two')[0]
    var CartTwoPets = document.getElementsByClassName('cart-pets-two')[0]
    
    addTwoPets.addEventListener('click', function(){
      CartTwoPets.classList.add('active')
    })

    //PRODUCT 3
    var addThreePets = document.getElementsByClassName('add-pets-three')[0]
    var CartThreePets = document.getElementsByClassName('cart-pets-three')[0]
    
    addThreePets.addEventListener('click', function(){
    CartThreePets.classList.add('active')
    })

    //PRODUCT 4
    var addFourPets = document.getElementsByClassName('add-pets-four')[0]
    var CartFourPets = document.getElementsByClassName('cart-pets-four')[0]
    
    addFourPets.addEventListener('click', function(){
      CartFourPets.classList.add('active')
    })

    //PRODUCT 5
    var addFivePets = document.getElementsByClassName('add-pets-five')[0]
    var CartFivePets = document.getElementsByClassName('cart-pets-five')[0]
    
    addFivePets.addEventListener('click', function(){
      CartFivePets.classList.add('active')
    })

    //PRODUCT 6
    var addSixPets = document.getElementsByClassName('add-pets-six')[0]
    var CartSixPets = document.getElementsByClassName('cart-pets-six')[0]
    
    addSixPets.addEventListener('click', function(){
      CartSixPets.classList.add('active')
    })

    //PRODUCT 7
    var addSevenPets = document.getElementsByClassName('add-pets-seven')[0]
    var CartSevenPets = document.getElementsByClassName('cart-pets-seven')[0]
    
    addSevenPets.addEventListener('click', function(){
      CartSevenPets.classList.add('active')
    })

    //PRODUCT 8
    var addEichPets = document.getElementsByClassName('add-pets-eich')[0]
    var CartEichPets = document.getElementsByClassName('cart-pets-eich')[0]
    
    addEichPets.addEventListener('click', function(){
      CartEichPets.classList.add('active')
    })

       //......................BEAUTY........................

    //PRODUCT 1
    var addOneBeauty = document.getElementsByClassName('add-beauty-one')[0]
    var CartOneBeauty = document.getElementsByClassName('cart-beauty-one')[0]
    
    addOneBeauty.addEventListener('click', function(){
      CartOneBeauty.classList.add('active')
    })

    //PRODUCT 2
    var addTwoBeauty = document.getElementsByClassName('add-beauty-two')[0]
    var CartTwoBeauty = document.getElementsByClassName('cart-beauty-two')[0]
    
    addTwoBeauty.addEventListener('click', function(){
      CartTwoBeauty.classList.add('active')
    })

    //PRODUCT 3
    var addThreeBeauty = document.getElementsByClassName('add-beauty-three')[0]
    var CartThreeBeauty = document.getElementsByClassName('cart-beauty-three')[0]
    
    addThreeBeauty.addEventListener('click', function(){
    CartThreeBeauty.classList.add('active')
    })

    //PRODUCT 4
    var addFourBeauty = document.getElementsByClassName('add-beauty-four')[0]
    var CartFourBeauty = document.getElementsByClassName('cart-beauty-four')[0]
    
    addFourBeauty.addEventListener('click', function(){
      CartFourBeauty.classList.add('active')
    })

    //PRODUCT 5
    var addFiveBeauty = document.getElementsByClassName('add-beauty-five')[0]
    var CartFiveBeauty = document.getElementsByClassName('cart-beauty-five')[0]
    
    addFiveBeauty.addEventListener('click', function(){
      CartFiveBeauty.classList.add('active')
    })

    //PRODUCT 6
    var addSixBeauty = document.getElementsByClassName('add-beauty-six')[0]
    var CartSixBeauty = document.getElementsByClassName('cart-beauty-six')[0]
    
    addSixBeauty.addEventListener('click', function(){
      CartSixBeauty.classList.add('active')
    })

    //PRODUCT 7
    var addSevenBeauty = document.getElementsByClassName('add-beauty-seven')[0]
    var CartSevenBeauty = document.getElementsByClassName('cart-beauty-seven')[0]
    
    addSevenBeauty.addEventListener('click', function(){
      CartSevenBeauty.classList.add('active')
    })

    //PRODUCT 8
    var addEichBeauty = document.getElementsByClassName('add-beauty-eich')[0]
    var CartEichBeauty= document.getElementsByClassName('cart-beauty-eich')[0]
    
    addEichBeauty.addEventListener('click', function(){
      CartEichBeauty.classList.add('active')
    })  

    //......................FIT........................

    //PRODUCT 1
    var addOneFit = document.getElementsByClassName('add-fit-one')[0]
    var CartOneFit = document.getElementsByClassName('cart-fit-one')[0]
    
    addOneFit.addEventListener('click', function(){
      CartOneFit.classList.add('active')
    })

    //PRODUCT 2
    var addTwoFit = document.getElementsByClassName('add-fit-two')[0]
    var CartTwoFit = document.getElementsByClassName('cart-fit-two')[0]
    
    addTwoFit.addEventListener('click', function(){
      CartTwoFit.classList.add('active')
    })

    //PRODUCT 3
    var addThreeFit = document.getElementsByClassName('add-fit-three')[0]
    var CartThreeFit = document.getElementsByClassName('cart-fit-three')[0]
    
    addThreeFit.addEventListener('click', function(){
    CartThreeFit.classList.add('active')
    })

    //PRODUCT 4
    var addFourFit = document.getElementsByClassName('add-fit-four')[0]
    var CartFourFit = document.getElementsByClassName('cart-fit-four')[0]
    
    addFourFit.addEventListener('click', function(){
      CartFourFit.classList.add('active')
    })

    //PRODUCT 5
    var addFiveFit = document.getElementsByClassName('add-fit-five')[0]
    var CartFiveFit = document.getElementsByClassName('cart-fit-five')[0]
    
    addFiveFit.addEventListener('click', function(){
      CartFiveFit.classList.add('active')
    })

    //PRODUCT 6
    var addSixFit = document.getElementsByClassName('add-fit-six')[0]
    var CartSixFit = document.getElementsByClassName('cart-fit-six')[0]
    
    addSixFit.addEventListener('click', function(){
      CartSixFit.classList.add('active')
    })

    //PRODUCT 7
    var addSevenFit = document.getElementsByClassName('add-fit-seven')[0]
    var CartSevenFit = document.getElementsByClassName('cart-fit-seven')[0]
    
    addSevenFit.addEventListener('click', function(){
      CartSevenFit.classList.add('active')
    })

    //PRODUCT 8
    var addEichFit = document.getElementsByClassName('add-fit-eich')[0]
    var CartEichFit= document.getElementsByClassName('cart-fit-eich')[0]
    
    addEichFit.addEventListener('click', function(){
      CartEichFit.classList.add('active')
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
  

}
