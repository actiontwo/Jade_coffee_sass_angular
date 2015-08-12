((window, angular)->
  IndexCtrl = ($scope, $http, $rootScope, $stateParams) ->

  angular.module("IndexController", []).controller "IndexCtrl",
    [
      '$scope',
      '$http',
      '$rootScope',
      '$stateParams',
      IndexCtrl
    ])(window, window.angular)
