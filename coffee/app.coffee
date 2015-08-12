config = window.actiontwoConfig
hdviet = angular.module config.APP_NAME, [
  'ngSanitize',
  'ui.router',
  'ngAnimate',
  'Action.two',
  'ErrSrcDirective',
  'AuthInterceptorFactory',

  'IndexController',
]

hdviet.config [
  "$stateProvider",
  "$locationProvider",
  "$urlRouterProvider",
  "ActiontwoProvider",
  "$httpProvider",
  ($stateProvider, $locationProvider, $urlRouterProvider, $ActiontwoProvider, $httpProvider) ->
    $httpProvider.interceptors.push('AuthInterceptor')

    $ActiontwoProvider.config config

    $locationProvider.html5Mode true
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state "home",
      url : "/"
      title : 'Home'
      views :
        content :
          template : Templates['index']()
          controller : 'IndexCtrl'

]
hdviet.run ['$rootScope', 'Actiontwo', '$window', ($rootScope, Actiontwo, $window)->

  $rootScope.$on "$stateChangeStart", (event, toState, toParams, fromState, fromParams) ->
# do something when route change
]