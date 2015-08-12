((window, angular)->
  angular.module("ExampleDirective", []).directive("example", () ->
    template : Templates['directives.menuFilter']()
    restrict : "E"
    replace : true
    scope :
      userInfo : '='
      category : '='
    controller : ['$rootScope', '$scope', '$http', '$stateParams', '$window', ($rootScope, $scope, $http, $stateParams, $window)->

    ]
  ))(window, window.angular)

