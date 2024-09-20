function showSurprise() {
    const gallery = document.querySelector('.gallery');
    const music = document.getElementById('bg-music');

    gallery.classList.toggle('hidden');
    if (!gallery.classList.contains('hidden')) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0;
    }
}
