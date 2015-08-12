#io.sails.autoConnect = false;
#io.sails.url = 'TEXT_API_SERVER'
#window.sk = io.sails.connect('TEXT_API_SERVER')
#window.sk.on 'socket id', (data)->
#  console.log data
#window.sk.on 'abc', (data)->
#  console.log data
#window.sk.on 'disconnect', ()->
#  console.log 'disconection'
##sk.get('/api/v3/socket/', {data : 'ada'}, {headers : {withCredentials : true}})
#window.sk.request(
#  method : 'get'
#  url : '/api/v3/socket/'
#  params : {}
##    headers:
#  withCredentials : true
#)

# add config default
window.actiontwoConfig =
  CAS_SERVER : "TEXT_CAS_SERVER" #'http://hdvietv3.cloudapp.net/'
  API_SERVER : "TEXT_API_SERVER" #'http://api-v3-dev.hdviet.com.vn:8084/'
  IMG_SERVER : 'http://t.hdviet.com/'
  FACEBOOK_APP_ID : "TEXT_FACEBOOK_APP_ID" #'868350906567831'
  GOOGLE_PLUS_CLIENID : "TEXT_GOOGLE_PLUS_CLIENID" #'106928000263-4abuoivgq3hdfiqrum8h2i345iotiikk.apps.googleusercontent.com'
  APP_NAME : 'hdviet'
  PREFIX_KEY : 'hdviet'
  MAX_COUNT_RELOAD : 5
  MAX_PROCESS_PERCENTAGE_OF_MOVIE_TO_REMOVE : 95
  TIME_TO_UPDATE_MOVIE_POSITION_TO_SESSION_STORE : 5 * 1000
  TIME_TO_UPDATE_MOVIE_POSITION_TO_API_SERVER : 60 * 1000
  TIME_TO_ADD_USER_PLAYLIST_IN_THE_FIRST_TIME : 10 * 1000
  intervalKey :
    isCalled : false
  key :
    USER : 'hdviet-user-info'
    ROUTER : 'hdviet-router'
    RELOAD : 'hdviet-reload-temp-count'
    MOVIE_CURRENT_POSITION : 'hdviet-movie-current-position'
    PLAYLIST : 'hdviet-playlist'

  imgSize :
    thumbs : 'thumbs/124x184/'
    bigThumbs : 'thumbs/214x321/'
    backdropsOri : 'backdrops/origins/'
    backdrops : 'backdrops/945x530/'

  page :
    error : $('#error-page')
    loading : $('#loading-page')
    content : $('#content-page')

config = window.actiontwoConfig

# prepare data and get login from cas
angular.lazy(config.APP_NAME).resolve(['$http', ($http)->

]).error(()->
  console.error "Site is having problem"
).loading(()->
  console.info "Site is loading"
).done(()->
  console.info 'Site is ready'
).bootstrap();