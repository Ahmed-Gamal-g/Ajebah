let videoContainer = document.querySelectorAll("video")

let popupVideo = document.querySelector(".popup-video")
let popupVideo2 = document.querySelector(".popup-video-2")

let popupVideoVideo = document.querySelector(".popup-video video")
let popupVideoVideo2 = document.querySelector(".popup-video-2 video")

let popupVideospan = document.querySelector(".popup-video span")
let popupVideospan2 = document.querySelector(".popup-video-2 span")

videoContainer.forEach((vid , e) => {
    vid.onclick = () => {
        popupVideo.style.display = "block"
        // popupVideo2.style.display = "block"
        popupVideoVideo.src = vid.getAttribute("src")
        popupVideoVideo2.src = vid.getAttribute("src")
    }
})



popupVideospan.onclick = () => {
    popupVideo.style.display = "none"
};

popupVideospan2.onclick = () => {
    popupVideo2.style.display = "none"
};