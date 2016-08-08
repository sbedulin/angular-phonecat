import {PhoneService} from './phone.service';

let phoneModule: angular.IModule = angular
  .module('core.phone', ['ngResource'])
  .service('PhoneService', PhoneService);

export {phoneModule};
