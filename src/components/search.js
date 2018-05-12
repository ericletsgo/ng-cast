angular.module('video-player')

  .component('search', {
  // TODO
    bindings: {
      searchString: '=',
      searchYouTube: '<'
    },
  
    templateUrl: 'src/templates/search.html'
  });
