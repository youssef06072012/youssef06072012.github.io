function playSound()
{
    audio = new Audio('start.mp3');
    audio.play();
}
function hide()
{
    loadingScreen = document.getElementById("loading");

    loadingScreen.classList.remove("loading");
    loadingScreen.classList.remove("loadingHide");
    loadingScreen.classList.add("loadingDelete");
}
function videoPlay()
{
    vid = document.getElementById("gtd_vid");
    vid.play();
}
function videoSoundToggle()
{
    mutebtn = document.getElementById("mutebtn");
    vidimg = document.getElementById("muteicon");
    vid = document.getElementById("gtd_vid");
    if (vid.muted == true) {
        vid.muted = false;
        vidimg.src = "sound.png";
        

    }
    else
    {
        vid.muted = true;
        vidimg.src = "mute.png";

    }
    mutebtn.classList.toggle("sound");
    mutebtn.classList.toggle("soundMute");
}
function loadSite()
{

    loadingScreen = document.getElementById("loading");
    
    loadingScreen.classList.add("loadingHide");
    setTimeout(hide, 1400)
    setTimeout(playSound, 800);
    setTimeout(videoPlay, 1000);
}