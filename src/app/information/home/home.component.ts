import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  
    //FORM
    let form = document.getElementsByClassName('form')[0]
    let username = document.getElementsByClassName('username')[0] as HTMLInputElement
    let message = document.getElementsByClassName('message')[0] as HTMLInputElement
    let errorNamenone = document.getElementsByClassName('form-error-name-none')[0]
    let limitname = document.getElementsByClassName('form-error-name')[0]
    let errorMessagenone = document.getElementsByClassName('form-error-message-none')[0]

    function validate(e: any){
      if(username.value == ''){
        errorNamenone.classList.add('error')
        e.preventDefault()
      }else if(username.value.length > 12 ){
        limitname.classList.add('error')
        e.preventDefault()
      }

      if(message.value == ''){
        errorMessagenone.classList.add('error')
        e.preventDefault()
      }else{
        alert('Tus comentarios fueron enviados con exito, Te agradecemos por tus palabras :) (la pagina se reiniciara)')
      }
    }

    form.addEventListener('submit', validate)
  }
}
