import {checkmarkFilterFactoryFunction} from './checkmark/checkmark.filter';
import {phoneModule} from './phone/phone.module';

let coreModule: angular.IModule = angular
  .module('core', [phoneModule.name])
  .filter('checkmark', checkmarkFilterFactoryFunction);

export {coreModule};
