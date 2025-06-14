const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 
document.addEventListener("DOMContentLoaded", () => {
    const videoGallery = document.querySelector(".video-gallery"); // Target only this section
    if (!videoGallery) return;

    const videos = videoGallery.querySelectorAll(".video-player");

    videos.forEach((video) => {
        const wrapper = video.parentElement;
        const playPauseIcon = wrapper.querySelector(".play-pause-icon");

        // Initially mark the video as paused to show the play icon
        wrapper.classList.add("video-paused");

        video.addEventListener("play", () => {
            // Pause all other videos
            videos.forEach((v) => {
                if (v !== video) {
                    v.pause();
                }
            });

            // Hide play/pause icon
            wrapper.classList.remove("video-paused");
            wrapper.classList.add("video-playing");
        });

        video.addEventListener("pause", () => {
            // Show play/pause icon when paused
            wrapper.classList.add("video-paused");
            wrapper.classList.remove("video-playing");
        });

        wrapper.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});
