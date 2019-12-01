           'strict mode'
// ...............Slide / Carousel..............//
// js developer information
// Name: Nikhil Chandra Roy
// Email: nikhilchandraroypoet@gmail.com
// dribbble: http://dribbble.com/nikhilroy2
// linkedin: http://linkedin.com/in/nikhilroy2
// facebook: http://facebook.com/nikhilroy2
// ..Slide Control.
document.title = 'Victory Day of Bangladesh slider/carousel 2019 December'
let slideIndex = 1;
showSlide(slideIndex);
function nl_btnSlide(n) {
    showSlide(slideIndex += n);
};
function currentSlide(n){
    showSlide(slideIndex = n);
};


// slide working process;
function showSlide(n){
    let nl_slide = document.querySelectorAll('.nl_slide');
    let slide_control = document.querySelectorAll('.slide_control');
    if(n > nl_slide.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = nl_slide.length;
    }
    // loop for slide
    for(let i = 0; i < nl_slide.length; i++) {
        nl_slide[i].style.display = 'none';
    }
    // loop for slide control
    for (let i = 0; i < slide_control.length; i++) {
        slide_control[i].className = slide_control[i].className.replace(' active', '');
    }
    nl_slide[slideIndex - 1].style.display = 'block';
    slide_control[slideIndex - 1].className += ' active';
}