export class PhoneService {
  phoneResource: any;

  static $inject = ['$resource'];
  constructor(private $resource: angular.resource.IResourceService) {
    this.phoneResource = $resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }

  getAllPhones(): angular.IPromise<any> {
    return this.phoneResource.query().$promise;
  }

  getPhoneById(phoneId: string): angular.IPromise<any> {
    return this.phoneResource.get({phoneId: phoneId}).$promise;
  }
}
