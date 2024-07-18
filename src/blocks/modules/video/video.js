const Video = class Video {
    constructor() {
        this.players = [];
    }
    loadVideos() {
        if (!document.querySelector('.video__player--js')) return;

        document.querySelectorAll('.video__player--js').forEach(video => {
            this.players.push(new YT.Player(video.id, {
                height: '100%',
                width: '100%',
                videoId: video.dataset.viedoId,
                events: {
                    'onReady': function(player) {
                        if (document.querySelector(`[data-video-id="${video.dataset.viedoId}"] .card_one_lined__title`)) {
                            document.querySelector(`[data-video-id="${video.dataset.viedoId}"] .card_one_lined__title`).innerHTML = player.target.videoTitle;
                        }
                    }
                }
            }));

        })


    }
    init() {
        this.loadVideos();
        if (window.app.videos.slider) {
            window.app.videos.slider.on(['run'], () => {
                // Handler logic ...
                this.players.forEach(video => {
                    video.pauseVideo();
                })

            })
        }
    }
}

export default Video;