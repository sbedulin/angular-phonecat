import {Auth} from "../auth.service";

let LoginComponent:ng.IComponentOptions = {
  bindings: {
    login: '<',
    password: '<'
  },
  templateUrl: 'auth/login/login.template.html',
  controller: class LoginController {
    login:string;
    password:string;

    static $inject = ['$location', 'Auth'];
    constructor(private $location:ng.ILocationService,
                private auth:Auth) {
    }

    doLogin() {
      console.log(`Logging in ${this.login}`);
      this.auth.login(this.login, this.password).then(() => {
        this.$location.path('/');
      });
    }
  }
};

export {LoginComponent};
