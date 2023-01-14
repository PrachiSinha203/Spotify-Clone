console.log("Welcome");

let songIndex = 0;
let audioSong = new Audio('On-and-On.mp3');
let audioPlay = document.getElementById('playing');

let progressBar = document.getElementById('progression');
let songs = [
    {songName: "On & On", filePath: "On-and-On.mp3", coverPath: "Song1.png"},
    {songName: "Samurai", filePath: "Samurai.mp3", coverPath: "Song2.jpg"},
    {songName: "Memory Nights", filePath: "Memory Nights.mp3", coverPath: "Song3.jpg"},
    {songName: "Invisible", filePath: "Invisible.mp3", coverPath: "Song4.jpg"}
]

audioPlay.onclick = ()=>{
    if(audioSong.paused || audioSong.currentTime <= 0)
    {
        audioSong.play();
        let x = document.getElementById('playPause');
        x.classList.remove('fa-circle-play');
        x.classList.add('fa-circle-pause');
    }
    else
    {
        audioSong.pause();
        let x = document.getElementById('playPause');
        x.classList.remove('fa-circle-pause');
        x.classList.add('fa-circle-play');
    }
}

audioSong.addEventListener('timeupdate', ()=>{
    timeDone = parseInt((audioSong.currentTime/audioSong.duration)*100);
    progressBar.value = timeDone;
})

progressBar.addEventListener('change', () => {
    audioSong.currentTime = progressBar.value*audioSong.duration/100;
})
