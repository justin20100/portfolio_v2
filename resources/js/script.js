const threshold = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}
// Enlever tout les slideUp
let targets = document.querySelectorAll(".slide-effect-off");
targets.forEach((target)=>{
    target.classList.remove("slide-effect-off");
    target.classList.add('slide-effect');
})

//ecouter l'intersection
window.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(handleBlockIntersect, options)
    const targets = document.querySelectorAll('.slide-effect')
    targets.forEach(function (target) {
        observer.observe(target)
    })
})

const handleBlockIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.remove("slide-effect")
            entry.target.classList.add("slide-effect-on")
            observer.unobserve(entry.target)
        }
    })
}
