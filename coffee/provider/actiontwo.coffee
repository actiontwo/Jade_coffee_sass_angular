((window, angular)->
  angular.module("Action.two", []).provider("Actiontwo", ()->

    config =
      example : ''

    Actiontwo =
      config : (configCustom)->
        config = configCustom or config

      $get : ['$http', '$rootScope', '$q', '$window', ($http, $rootScope, $q, $window)->
        example = ()->
          console.log 'do something here'

        ActiontwoGet =
          config : config
          example : example

        return Actiontwo
      ]

    return Actiontwo
  ))(window, window.angular)

