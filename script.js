document.querySelector('.cart').addEventListener('click',()=> {
    document.querySelector('.cart-box').classList.toggle('active')
})

document.querySelector('.burger').addEventListener('click',()=> {
    document.querySelector('.nav-links').classList.add('active');
    document.body.classList.add('dark');
})
document.querySelector('.close-nav').addEventListener('click',()=> {
    document.querySelector('.nav-links').classList.remove('active');
    document.body.classList.remove('dark');
})

document.querySelector('.main-image > img').addEventListener('click',()=> {
    document.querySelector('.front').classList.add('active'),
    document.body.classList.add('dark');
})

document.querySelector('.front .close-front').addEventListener('click',()=> {
    document.querySelector('.front').classList.remove('active'),
    document.body.classList.remove('dark');
})

/*######################*/

document.querySelector('.plus').addEventListener('click',()=> {
    document.querySelector('#counter').innerHTML = +document.querySelector('#counter').innerHTML+1
})

document.querySelector('.minus').addEventListener('click',()=> {
    if (document.querySelector('#counter').innerHTML >0) {
        document.querySelector('#counter').innerHTML = +document.querySelector('#counter').innerHTML-1
    }
})

document.querySelector('.add .btn').addEventListener('click',()=> {
    if (document.querySelector('#counter').innerHTML >0){

        document.querySelector('.cart-items').innerHTML = `
            <div class="item">
                                            <img src="/images/image-product-1-thumbnail.jpg" alt="" class="cart-img">
                                            <div class="text">
                                                <p>Fall Limited Editor Sneakers</p>
                                                <p>$125 x ${document.querySelector('#counter').innerHTML} <span>$${+document.querySelector('#counter').innerHTML * 125  }</span></p>
                                            </div>
                                            <img src="/images/icon-delete.svg" alt="" class="delete-icon">
                                        </div>

                                        <a href="#" class="btn">Checkout</a>
            `
    }
    else {
        document.querySelector('.cart-items').innerHTML = `<span class='empty'>Your cart is empty</span>`
    }

})

document.addEventListener('click',(e)=> {
    if (e.target.className == 'delete-icon' ) {
        document.querySelector('.cart-items').innerHTML = `<span class='empty'>Your cart is empty</span>`
    }
})

let mainImage = document.querySelector('.back .main-image > img');
let sliderImages = document.querySelectorAll('.back .slider div');
let iBack = 0;
sliderImages.forEach((e,index)=> {

    e.addEventListener('click',()=> {

        sliderImages.forEach((e)=> {
            e.classList.remove('clicked')
        })
        mainImage.src = e.firstElementChild.src;
        e.classList.add('clicked')
        iBack =index
    })
})

let mainFrontImage = document.querySelector('.front .main-image > img');
let sliderFrontImages = document.querySelectorAll('.front .slider div');
let iFront = 0;
sliderFrontImages.forEach((e,index)=> {

    e.addEventListener('click',()=> {

        sliderFrontImages.forEach((e)=> {
            e.classList.remove('clicked')
        })
        mainFrontImage.src = e.firstElementChild.src;
        e.classList.add('clicked')
        iFront = index
    })
})

let prevBack = document.querySelector('.back .arrows .prev');
let nextBack = document.querySelector('.back .arrows .next');

prevBack.addEventListener('click',()=> {
    if (iBack>0){
        mainImage.src = sliderImages[--iBack].firstElementChild.src 
        sliderImages.forEach((e)=> {
            e.classList.remove('clicked')
        })
        sliderImages[iBack].classList.add('clicked')
    }
})

nextBack.addEventListener('click',()=> {
    if (iBack<3){
        mainImage.src = sliderImages[++iBack].firstElementChild.src 
        sliderImages.forEach((e)=> {
            e.classList.remove('clicked')
        })
        sliderImages[iBack].classList.add('clicked')
    }
})

let prevFront = document.querySelector('.front .arrows .prev');
let nextFront = document.querySelector('.front .arrows .next');

prevFront.addEventListener('click',()=> {
    if (iFront>0){
        mainFrontImage.src = sliderFrontImages[--iFront].firstElementChild.src 
        sliderFrontImages.forEach((e)=> {
            e.classList.remove('clicked')
        })
        sliderFrontImages[iFront].classList.add('clicked')
    }
})

nextFront.addEventListener('click',()=> {
    if (iFront<3){
        mainFrontImage.src = sliderFrontImages[++iFront].firstElementChild.src 
        sliderFrontImages.forEach((e)=> {
            e.classList.remove('clicked')
        })
        sliderFrontImages[iFront].classList.add('clicked')
    }
})