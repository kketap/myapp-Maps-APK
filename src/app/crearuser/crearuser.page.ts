import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.page.html',
  styleUrls: ['./crearuser.page.scss'],
})
export class CrearuserPage {

  constructor(private router: Router) { }

  public mensaje = ""

  user = {
    usuario: "",
    password: ""
  }
  
}
