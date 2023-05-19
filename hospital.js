// const navbar=document.querySelector('.navbar');
// const menuebtn=document.querySelector('#menue-btn');



// menuebtn.addEventListener("click",()=>{
//     navbar.classList.toggle('active')
//     menuebtn.classList.toggle('fa-times')
// })



$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('active')

    })

$(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times')
    $('.navbar').removeClass('active')

    if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
    }
    else{
        $('header').removeClass('header-active');
    }
})
$(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times')
    $('.navbar').removeClass('active')

    if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
    }
    else{
        $('header').removeClass('header-active');
    }
})

$('.facility').magnificPopup({

    delegate: 'a',
		type: 'image',
        gallery: {
			enabled: true,
        }
})
})


