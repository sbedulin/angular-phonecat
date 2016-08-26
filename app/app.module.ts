import {ConfigStage, RunStage} from './app.config';
import {phoneAnimationFactory} from "./app.animations";
import {coreModule} from './core/core.module';
import {phoneDetailModule} from "./phone-detail/phone-detail.module";
import {phoneListModule} from "./phone-list/phone-list.module";
import {authModule} from "./auth/auth.module";

let app:ng.IModule = angular
  .module('phonecatApp', [
    'ngAnimate',
    'ngRoute',
    authModule.name,
    coreModule.name,
    phoneDetailModule.name,
    phoneListModule.name
  ])
  .config(ConfigStage)
  .run(RunStage)
  .animation('.phone', phoneAnimationFactory);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [app.name]);
});
