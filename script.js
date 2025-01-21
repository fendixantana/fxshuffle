const songs = [
    './ambition.mp3',
    './extradimensional.mp3',
    './presidential.mp3',
    './major_plays.mp3'
];
let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');

// Bind event listeners
document.getElementById('play-pause').addEventListener('click', playPause);
document.getElementById('next').addEventListener('click', nextSong);
document.getElementById('previous').addEventListener('click', previousSong);
document.getElementById('stop').addEventListener('click', stopSong);
document.getElementById('volume-down').addEventListener('click', volumeDown);

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playCurrentSong();
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function volumeDown() {
    audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
}

function playCurrentSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
}

// Load the first song initially
audioPlayer.src = songs[currentSongIndex];
