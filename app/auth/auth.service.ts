import {User} from './user.model';

export class Auth {
  currentUser:User;

  static $inject = ['$q', '$http'];
  constructor(private $q:ng.IQService,
              private $http:ng.IHttpService) {
  }

  login(name:string, password:string):ng.IPromise<any> {
    var deferred = this.$q.defer();
    if (name && password) {
      this.currentUser = new User(name);
      deferred.resolve();
    } else {
      deferred.reject();
    }
    return deferred.promise;
  }

  logout():ng.IPromise<any> {
    this.currentUser = null;
    return this.$q.resolve();
  }

  isAuthenticated():boolean {
    return this.currentUser != null;
  }
}
