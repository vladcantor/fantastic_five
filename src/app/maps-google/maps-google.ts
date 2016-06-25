import {Component} from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

@Component({
  selector: '[maps-google]',
  template: require('./maps-google.html'),
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  styles: ['sebm-google-map { height: 100% }']
})
export class MapsGoogle {
  lat: number = 46.7568081;
  lng: number = 23.595618;
  zoom: number = 12;
}
