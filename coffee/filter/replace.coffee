((window, angular)->
  angular.module("ReplaceFilter", []).filter("replace", () ->
    return  (text, regex, replaceBy) ->
      if regex is undefined
        regex = '\/'
      if replaceBy is undefined
        replaceBy = ','
      re = new RegExp regex, 'g'
      if text is undefined
        return
      str = text.replace(re, replaceBy);
      return str
  ))(window, window.angular)

