
// Array of songs and their related information
const songs = [
    { title: "Ram Siya Ram", src:"Ram Siya Ram Lyrical Adipurush  Prabhas  SachetParamparaManoj Muntashir S Om Raut  Bhushan K.mp3", image: "https://th.bing.com/th/id/OIP.ANhVV2LCGRnJSx1ft-mHSAHaHa?rs=1&pid=ImgDetMain" },
    { title: "Sheikh", src: "Sheikh Full Video Karan Aujla I Rupan Bal I Manna I Latest Punjabi Songs 2020.mp3", image: "https://th.bing.com/th/id/OIP.uW95qgsP-789Ab3eHSnCdgHaHa?rs=1&pid=ImgDetMain" },
    { title: "Cuff", src: "Bunny Johal  Cuff Official Video  C Town  Punjabi Song 2021.mp3", image: "https://i.scdn.co/image/ab67616d0000b273997f6334cee440cab6ce3126" },
    { title: "Dus Don", src: "DUS DON Official Video Dada Sadhu HR Gadi Number Apni Akad Ko Apni Jeb Me Rakhe  Viral on Reels.mp3", image: "https://c.saavncdn.com/644/Dus-Don-Single-Hindi-2020-20201207221621-500x500.jpg" },
    { title: "Gal Ban Jae", src: "Gal Ban Jae Official Video Ammy Virk Avvy Sra Happy Raikoti Amanninder Singh New Punjabi Song.mp3", image: "https://tips.in/wp-content/uploads/2022/11/Gal-Ban-Gayi_cover-1400-x-1400-min-1024x1024.jpg" },
    { title: "Hanuman Chalisa", src: "Hanuman Chalisa I GULSHAN KUMAR I HARIHARAN Full HD Video Shree Hanuman Chalisa.mp3", image: "https://www.shyamparivar.com/uploads/gallery/hanuman-ji-hd-wallpaper-download-for-pc1.jpg" },
    { title: "Sunday", src: "Sunday  Dilpreet Dhillon Ft Gurlez Akhtar  Desi Crew  Kaptaan  Latest Punjabi Songs 2024.mp3", image: "https://th.bing.com/th/id/OIP.W9_Lp1fQyJb_ilPJmOli7QHaHa?rs=1&pid=ImgDetMain" },
    { title: "Dollar", src: "Sidhu Moose Wala Song  DOLLAR  Byg Byrd  Dakuaan Da Munda  Dollaran Wangu Ni Naam Saada Chalda.mp3", image: "https://i.scdn.co/image/ab67616d0000b2734b74f53dff1cbba4d1ce48d2" },
    { title: "Champion's Anthem", src: "Champions Anthem Official Video Karan Aujla  Ikky  Latest Punjabi Songs 2023.mp3", image: "https://djbaap.net/wp-content/media/covers/2326.jpg" },
    { title: "Mitti Di Khushboo", src: "OFFICIAL Mitti Di Khushboo FULL VIDEO Song  Ayushmann Khurrana  Rochak Kohli.mp3", image: "https://c.saavncdn.com/563/Mitti-Di-Khushboo-Punjabi-2014-500x500.jpg" }
 
];

// Initialize variables
let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);
const ftPhoto = document.querySelector('.ft_photo');
const ftSong = document.querySelector('.ft_song');
const playPauseBtn = document.querySelector('.pause');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const progressBar = document.getElementById('myprogressbar');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const volumeBar = document.getElementById('volumebar');
const volumeIcon = document.querySelector('.ft_volume i');

// Function to update the footer with current song information
function updateFooter() {
    ftPhoto.style.backgroundImage = `url(${songs[currentSongIndex].image})`;
    ftSong.textContent = songs[currentSongIndex].title;
}

// Play or pause the current song
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause pause1"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play pause1"></i>';
    }
});

// Play the next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].src;
    audio.play();
    updateFooter();
    if (!audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause pause1"></i>'; // Update play/pause button icon
    } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play pause1"></i>'; // Update play/pause button icon
    }
});

// Play the previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex].src;
    audio.play();
    updateFooter();
    if (!audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause pause1"></i>'; // Update play/pause button icon
    } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play pause1"></i>'; // Update play/pause button icon
    }
});

// Update footer with initial song information
updateFooter();

// Update progress bar, current time, and duration
audio.addEventListener('timeupdate', () => {
    const progress = Math.floor((audio.currentTime / audio.duration) * 100);
    progressBar.value = progress;

    // Update current time
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeSpan.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;

    // Update duration
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationSpan.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
});

// Handle end of song
audio.addEventListener('ended', () => {
    // Automatically play the next song
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].src;
    audio.play();
    updateFooter();
});

// Change volume
volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value / 100;
});

// Mute volume
volumeIcon.addEventListener('click', () => {
    if (audio.volume === 0) {
        audio.volume = volumeBar.value / 100;
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-high');
    } else {
        audio.volume = 0;
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.add('fa-volume-mute');
    }
});

// Skip or unskip song based on progress bar
progressBar.addEventListener('input', () => {
    const seekTime = audio.duration * (progressBar.value / 100);
    audio.currentTime = seekTime;
});
