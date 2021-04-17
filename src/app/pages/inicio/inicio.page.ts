import { Component, OnInit } from '@angular/core';
interface Componente {
icon: string;
name: string;
redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componentes: Componente[] = [
  {
icon: 'football-outline',
name: 'Action Sheet',
redirecTo: '/action-sheet'
  },
  {
    icon: 'alert-outline',
    name: 'Alert',
    redirecTo: '/alert'
      },
      {
        icon: 'person-circle-outline',
        name: 'Avatar',
        redirecTo: '/avatar'
          }

]


  constructor() { }

  ngOnInit() {
  }

}
