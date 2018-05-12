angular.module('video-player')
  .component('videoList', {
  // TODO
    bindings: {
      videos: '<',
      video: '='
    },
    controller: function() {
      this.onClick = function(vid) {
        this.video = vid;
      }.bind(this);
    },
    templateUrl: 'src/templates/videoList.html' 
  });
