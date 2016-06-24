import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Core} from './app/core/core';
import {ErrorPage} from './app/error/error';
import {LoginPage} from './app/login/login';
declare var jQuery: any;

@Component({
  selector: 'body',
  directives: [ROUTER_DIRECTIVES],
  template: require('./app.html'),
  styles: [require('./scss/application.scss')],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/app/...', component: Core, name: 'App', useAsDefault: true },
  { path: '/error', component: ErrorPage, name: 'ErrorPage' },
  { path: '/login', component: LoginPage, name: 'LoginPage' }
])
export class App {
}
