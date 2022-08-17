import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [ `
    li {
      cursor: pointer;
    }
  `
  ]
})
export class MenuComponent {

  menu: MenuItem[] =
    [ {ruta:'/graficas/barras', texto: 'Graficas Barra'},
      {ruta:'/graficas/barras-dobles', texto: 'Graficas Barras Dobles'},
      {ruta:'/graficas/dona', texto: 'Graficas Dona'},
      {ruta:'/graficas/dona-http', texto: 'Graficas Dona HTTP'}

      ]

}
