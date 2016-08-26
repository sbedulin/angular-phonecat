export class ConfigStage {
  static $inject = ['$locationProvider' ,'$routeProvider'];
  constructor($locationProvider: angular.ILocationProvider,
              $routeProvider: angular.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/phones', {
        template: '<phone-list></phone-list>'
      })
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .when('/login', {
        template: '<login></login>'
      })
      .otherwise('/phones');
  }
}

export class RunStage {
  static $inject = ['$rootScope' ,'$location'];
  constructor ($rootScope: ng.IRootScopeService,
               $location:ng.ILocationService) {
    $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
      if(err === 'AUTH_REQUIRED') {
        $location.path('/login');
      }

      if(err === 'NOT_AUTHORIZED') {
        $location.path('/home');
      }
    })
  }
}
