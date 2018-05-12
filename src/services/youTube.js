angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.search = function (params, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          maxResults: params.max,
          q: params.query,
          type: 'video',
          key: params.key,
          part: 'snippet',
          videoEmbeddable: 'true'}
      }).then(function successCallback(data) {
      // console.log(data)
      // console.log(data.data.items)
        callback(data.data.items);
      }, function errorCallback(data) {
        console.log('I failed');
      });
    };
  });
