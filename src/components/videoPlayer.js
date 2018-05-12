angular.module('video-player')

  .component('videoPlayer', {
  // TODO
    bindings: {
      video: '<'
    },
    controller: function() {
    // this.videoUrl = "https://www.youtube.com/embed/" + this.video.id.videoId;
    },
  
    templateUrl: 'src/templates/videoPlayer.html'
  });
