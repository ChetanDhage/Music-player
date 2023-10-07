// Sample song data (you can replace it with actual song URLs)
const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
  ];
  
  const audioPlayer = document.getElementById("audioPlayer");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const seekSlider = document.getElementById("seekSlider");
  const playlist = document.querySelector(".playlist");
  
  let currentSongIndex = 0;
  
  function loadSong(index) {
    audioPlayer.src = songs[index];
    audioPlayer.load();
  }
  
  function playSong() {
    audioPlayer.play();
  }
  
  function pauseSong() {
    audioPlayer.pause();
  }
  
  function updateSeekSlider() {
    seekSlider.value = audioPlayer.currentTime;
  }
  
  function seekSong() {
    audioPlayer.currentTime = seekSlider.value;
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  // Populate playlist dynamically
  for (let i = 0; i < songs.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Song ${i + 1}`;
    listItem.addEventListener("click", () => {
      currentSongIndex = i;
      loadSong(currentSongIndex);
      playSong();
    });
    playlist.appendChild(listItem);
  }
  
  // Add event listeners to buttons
  playButton.addEventListener("click", playSong);
  pauseButton.addEventListener("click", pauseSong);
  seekSlider.addEventListener("input", seekSong);
  audioPlayer.addEventListener("timeupdate", updateSeekSlider);
  audioPlayer.addEventListener("ended", nextSong);
  
  // Load the first song
  loadSong(currentSongIndex);
  