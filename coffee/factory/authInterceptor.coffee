((window, angular)->
  AuthInterceptor = ($rootScope, $q, $location) ->
    handleError = (status)->
# Do some thing with status

    request : (configHeader) ->
#      configHeader.headers = configHeader.headers or {}
#      configHeader.headers.Authorization = $rootScope.userInfo.access_token
#      if configHeader.withCredentials is undefined
#        configHeader.withCredentials = true

      return configHeader
    response : (response) ->
      return response or $q.when(response)

    responseError : (response)->
# handle repsonse error

      handleError (response.status)
      return response or $q.when(response)

  angular.module("AuthInterceptorFactory", [])
  .factory "AuthInterceptor",
    ['$rootScope', '$q', '$location', AuthInterceptor])(window, window.angular)

