console.log("Welcome");

let rank = 1;
let audioSong = new Audio('1.mp3');
let audioPlay = document.getElementById('playing');

let progressBar = document.getElementById('progression');
let songs = [
    {songName: "On & On", filePath: "1.mp3", coverPath: "Song1.png"},
    {songName: "Samurai", filePath: "2.mp3", coverPath: "Song2.jpg"},
    {songName: "Memory Nights", filePath: "3.mp3", coverPath: "Song3.jpg"},
    {songName: "Invisible", filePath: "4.mp3", coverPath: "Song4.jpg"},
    {songName: "Heroes Tonight", filePath: "5.mp3", coverPath: "Song5.jpg"},
    {songName: "My Heart", filePath: "6.mp3", coverPath: "Song6.jpg"},
    {songName: "Make me Move", filePath: "7.mp3", coverPath: "Song7.jpg"}
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
    if(timeDone == 100)
    {
        if(rank>=7)
        {
            rank = 1;  
        }
        else{
            rank = rank + 1;
        }
        timeDone = 0;
        audioSong.src =`${rank}.mp3`;
        audioSong.play();
    }
})

progressBar.addEventListener('change', () => {
    audioSong.currentTime = progressBar.value*audioSong.duration/100;
    if(audioSong.currentTime/audioSong.duration == 1)
    {
        if(rank>=7)
        {
            rank = 1;  
        }
        else{
            rank = rank + 1;
        }
        progressBar.value = 0;
        audioSong.src =`${rank}.mp3`;
        audioSong.play();
    }
})

const makePlay = ()=>{
    Array.from(document.getElementsByClassName('hi')).forEach((element) => {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        console.log("ab toh chal ja na yaar!!!")
    })
}

Array.from(document.getElementsByClassName('hi')).forEach((element) => {
    element.addEventListener('click', (e) =>{
        audioSong.currentTime = 0;
        // let x = document.getElementById('playPause');
        // x.classList.remove('fa-circle-play');
        // x.classList.add('fa-circle-pause');
        rank = parseInt(e.target.id);
        audioSong.src =`${rank}.mp3`;
        audioSong.play();
        makePlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})

document.getElementById('prev').onclick = ()=>{
    if(rank <= 1)
    {
        rank = 1;
    }
    else
    {
        rank = rank - 1;
    }
    let x = document.getElementById('playPause');
        audioSong.currentTime = 0;
        x.classList.remove('fa-circle-play');
        x.classList.add('fa-circle-pause');
        audioSong.src =`${rank}.mp3`;
        audioSong.play();
}

document.getElementById('next').onclick = ()=>{
    if(rank >= 7)
    {
        rank = 1;
    }
    else
    {
        rank = rank + 1;
    }
    let x = document.getElementById('playPause');
        audioSong.currentTime = 0;
        x.classList.remove('fa-circle-play');
        x.classList.add('fa-circle-pause');
        audioSong.src =`${rank}.mp3`;
        audioSong.play();
}
