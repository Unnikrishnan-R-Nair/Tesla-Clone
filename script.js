const main = document.querySelector(".main-1");
const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hdn-side");

menu.addEventListener("click", ()=>{
    blurs.classList.add("active");
    side.classList.add("active");
})

cross.addEventListener("click", ()=>{
    blurs.classList.remove("active");
    side.classList.remove("active");
})


const h1_1 = document.querySelector(".head-1")
const h1_2 = document.querySelector(".head-2")
const h1_3 = document.querySelector(".head-3")
const h1_4 = document.querySelector(".head-4")
const h1_5 = document.querySelector(".head-5")
const h1_6 = document.querySelector(".head-6")

const l1 = document.querySelector(".login-1")
const l2 = document.querySelector(".login-2")
const l3 = document.querySelector(".login-3")
const l4 = document.querySelector(".login-4")
const l5 = document.querySelector(".login-5")
const l6 = document.querySelector(".login-6")

main.addEventListener("scroll", ()=>{
    console.log(main.scrollTop);
    const unit = main.scrollTop;
    if (unit == 0 && unit < 55){
        h1_1.classList.remove("hide");
        l1.classList.remove("hide");
    }else {
        h1_1.classList.add("hide")
        l1.classList.add("hide")
    }

    if (unit > 723 && unit < 800) {
        h1_2.classList.add("active");
        l2.classList.add("active");
    }else {
        h1_2.classList.remove("active");
        l2.classList.remove("active");
    }

    if (unit > 1527 && unit < 1586) {
        h1_3.classList.add("active");
        l3.classList.add("active");
    }else {
        h1_3.classList.remove("active");
        l3.classList.remove("active");
    }

    if (unit > 2376 && unit < 2382) {
        h1_4.classList.add("active");
        l4.classList.add("active");
    }else {
        h1_4.classList.remove("active");
        l4.classList.remove("active");
    }
    if (unit > 3146 && unit < 3175) {
        h1_5.classList.add("active");
        l5.classList.add("active");
    }else {
        h1_5.classList.remove("active");
        l5.classList.remove("active");
    }
    if (unit > 3952 && unit < 3970) {
        h1_6.classList.add("active");
        l6.classList.add("active");
    }else {
        h1_6.classList.remove("active");
        l6.classList.remove("active");
    }
})