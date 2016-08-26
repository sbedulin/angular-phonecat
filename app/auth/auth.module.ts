import {LoginComponent} from "./login/login.component";
import {Auth} from "./auth.service";

let authModule:angular.IModule = angular
  .module('auth', ['ngMaterial'])
  .service('Auth', Auth)
  .component('login', LoginComponent);

export {authModule};
