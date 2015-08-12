((window, angular)->
  angular.module("ErrSrcDirective", []).directive("errSrc", () ->
    link : (scope, element, attrs) ->
      element.bind "error", ->
        imgErr = attrs.errSrc
        imgWidth = attrs.width
        imgHeight = attrs.height

        if imgHeight is undefined
          imgHeight = 235
        if imgWidth is undefined
          imgWidth = 159
        if imgErr is ''
          imgErr = "https://placeholdit.imgix.net/~text?txtsize=15&bg=282A27&txtclr=ffffff&txt=HDVIET&w=#{imgWidth}&h=#{imgHeight}"
        attrs.$set "src", imgErr  unless attrs.src is imgErr
  ))(window, window.angular)

