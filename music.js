const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    theme: '#FADFA3',
    audio: [

        {
            name: 'her',
            artist: 'dvdkm',
            url: 'music/bg.mp3',
            cover: 'https://s4.music.126.net/style/web2/img/default/default_album.jpg',
        }
    ]
});
