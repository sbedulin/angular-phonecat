import {PhoneListComponent} from "./phone-list.component";
import {phoneModule} from "../core/phone/phone.module";

let phoneListModule: angular.IModule = angular
  .module('phoneList', [phoneModule.name])
  .component('phoneList', PhoneListComponent);

export {phoneListModule};
