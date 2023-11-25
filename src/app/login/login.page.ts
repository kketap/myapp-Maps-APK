import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';

declare var google:any;



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  map:any;
 
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  // parque simon bolivar
  origin = { lat: -33.43277718326961, lng: -70.61494312441283 };
  // Parque la 93
  destination = { lat: -33.521068104744224, lng: -70.57593482818147 };

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    const indicatorsEle: HTMLElement = document.getElementById('indicators')!;
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 14
    });
  
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }

  private calculateRoute() {
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response:any, status:any)  => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
    }

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }

  ngOnInit() {
    this.loadMap();
  }

}
