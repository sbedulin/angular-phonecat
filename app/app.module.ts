import {AppConfig} from './app.config';
import {phoneAnimationFactory} from "./app.animations";
import {coreModule} from './core/core.module';
import {phoneDetailModule} from "./phone-detail/phone-detail.module";
import {phoneListModule} from "./phone-list/phone-list.module";

let app: angular.IModule = angular
  .module('phonecatApp', [
    'ngAnimate',
    'ngRoute',
    coreModule.name,
    phoneDetailModule.name,
    phoneListModule.name
  ])
  .config(AppConfig)
  .animation('.phone', phoneAnimationFactory);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [app.name]);
});
