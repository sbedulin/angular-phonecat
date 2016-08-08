import {PhoneService} from "../core/phone/phone.service";

declare interface IPhone {
  images: [string]
}

export var PhoneDetailComponent:angular.IComponentOptions = {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: class PhoneDetailController {
    phone: any;
    mainImageUrl: string;

    static $inject = ['$routeParams', 'PhoneService'];
    constructor($routeParams: angular.route.IRouteParamsService,
                PhoneService: PhoneService) {
      PhoneService.getPhoneById($routeParams['phoneId']).then((phone: IPhone) => {
        this.phone = phone;
        this.setImage(phone.images[0]);
      });
    }

    setImage(imageUrl:string) {
      this.mainImageUrl = imageUrl;
    }
  }
};
