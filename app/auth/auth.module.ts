import {User} from './user';

export class Auth {
  currentUser: User;

  static $inject = ['$locationProvider', '$routeProvider'];
  constructor(private $q:ng.IQService,
              private $http:ng.IHttpService) {
  }

  login(name:string, password:string): ng.IPromise {
    var deferred = this.$q.defer();
    if(name && password) {
      this.currentUser = new User(name);
      deferred.resolve();
    } else {
      deferred.reject();
    }
    return deferred.promise;
  }

  logout(): ng.IPromise {
    this.currentUser = null;
    return this.$q.resolve();
  }

  isAuthenticated(): boolean {
    return this.currentUser != null;
  }
}
