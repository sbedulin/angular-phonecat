import {PhoneService} from "../core/phone/phone.service";

export var PhoneListComponent: angular.IComponentOptions = {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: class PhoneListController {
    phones: [any];
    orderProp: string;

    static $inject = ['PhoneService'];
    constructor(PhoneService: PhoneService) {
      PhoneService.getAllPhones().then((phones) => {
        this.phones = phones;
        this.orderProp = 'age';
      });
    }
  }
};
