import {PhoneDetailComponent} from "./phone-detail.component";
import {phoneModule} from "../core/phone/phone.module";

let phoneDetailModule: angular.IModule = angular
  .module('phoneDetail', [
    'ngRoute',
    phoneModule.name
  ])
  .component('phoneDetail', PhoneDetailComponent);

export {phoneDetailModule};
