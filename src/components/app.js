angular.module('video-player')

  .component('app', {
  
  // bindings: {
  //   video: '>' 
  // }
    controller: function(youTube) {
    // this.selectedVideo = window.exampleVideoData[0];
      this.searchYouTube = function() {
        let params = {
          max: 5,
          query: this.searchString,
          key: YOUTUBE_API_KEY
        };
        let callback = function(data) {
          this.videos = data;
          this.video = data[0];
        };
      
        youTube.search(params, callback.bind(this));
      }.bind(this);
    
      this.searchString = '';
      this.video = null;
      this.videos = window.exampleVideoData;
      this.selectVideo = function() {
      
      };
      this.searchResults = function() {
      
      };
      this.currentVideo = exampleVideoData[0];
    },
  
    templateUrl: 'src/templates/app.html'
  });
