var loader = document.getElementById("preloader");
var main = document.getElementById("main");


function init(){
    setTimeout(()=>{
        loader.style.opacity = 0;
        loader.style.display= "none";
        
        main.style.display = "block";
        setTimeout(()=>(main.style.opacity = 1), 100)
        
    }, 3000);
}
init()

const toTop = document.querySelector(".materialicons");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

let btnscrolltoup = document.getElementById('btnscrolltoup');
btnscrolltoup.addEventListener("click", () => {
    // btnscrolltoup.style.backgroundColor = "purple";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
