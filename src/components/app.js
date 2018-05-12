angular.module('video-player')

  .component('app', {
  
  // bindings: {
  //   video: '>' 
  // }
    controller: function(youTube) {
      this.searchString = 'dogs';
      this.currentVideo = null;
      this.videos = [];
      this.selectVideo = function(vid) {
        this.currentVideo = vid;
      }.bind(this);
      this.searchResults = function() {
        let params = {
          max: 5,
          query: this.searchString,
          key: YOUTUBE_API_KEY,
        };
        let callback = function(data) {
          this.videos = data;
          this.currentVideo = data[0];
        };
      
        youTube.search(params, callback.bind(this));
      }.bind(this);
      this.debounceSearch = _.debounce(this.searchResults, 10000).bind(this);
      this.handleKeypress = function(keyEvent) {
        if (keyEvent.which === 13) {
          this.searchResults();
        }
      }.bind(this);
    },
  
    templateUrl: 'src/templates/app.html'
  });
