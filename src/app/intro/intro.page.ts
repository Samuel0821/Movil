import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{
  
  slides = [
    {
      title: "Te damos la Bienvenida",
      description: "El mejor lugar para actualizar tu dispositivo inteligente",
      image: "../../assets/images/1.jfif",
      help_text: "Para más información visitanos en <a> href= 'https://github.com/Samuel0821/Movil'> our docs </a>.",
      class: "slide-1 red-title"
    },
    {
      title: "Conoce más aquí",
      description: "Te ofrecemos lo que estás buscando acomodándolo a tu bolsillo",
      image: "../../assets/images/2.jfif",
      help_text: "Para más información visitanos en <a> href= 'https://github.com/Samuel0821/Movil'> our docs </a>.",
      class: "slide-2"
    },
    {
      title: "Promosiones",
      description: "Sorprende a tu ser querido con el 2x1 compra uno y lleva otro gratis.",
      image: "../../assets/images/3.jfif",
      help_text: "Para más información visitanos en <a> href= 'https://github.com/Samuel0821/Movil'> our docs </a>.",
      class: "slide-3"
    },
    {
      title: "A cerca de...",
      image: "../../assets/images/1.jfif",
      help_text: "Para más información visitanos en <a> href= 'https://github.com/Samuel0821/Movil'> our docs </a>.",
      class: "slide-4"
    }
    
    ]
    constructor() {}
    ngOnInit(){

    }
}

  
    
  


