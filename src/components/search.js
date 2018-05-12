angular.module('video-player')

  .component('search', {
  // TODO
    bindings: {
      searchString: '=',
      result: '<',
      handleKeypress: '<',
      debounceSearch: '<',
    },
    controller: function(youTube) {
      this.service = youTube;
    },
    templateUrl: 'src/templates/search.html'
  });
