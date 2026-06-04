const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});



const cartButtons = document.querySelectorAll(".product-bottom button");
const cartCount = document.getElementById("cart-count");

let count = 0;

cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
    });
});





const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }
        };

        updateCounter();
    });
};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();
            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".about"));







const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    cards.forEach(card=>{
        card.classList.remove("active");
    });

    cards[index].classList.add("active");
}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= cards.length){
        current = 0;
    }

    showSlide(current);
});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = cards.length - 1;
    }

    showSlide(current);
});

/* Auto Slide */

setInterval(()=>{

    current++;

    if(current >= cards.length){
        current = 0;
    }

    showSlide(current);

},4000);






const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

