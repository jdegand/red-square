const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


window.addEventListener('DOMContentLoaded', (event)=> {

    var imageToChange = document.getElementById('image-div');
    var images = [
        'images/flip-thumb.webp',
        'images/snickers-thumb.jpg', 
        'images/work-thumbs.webp',
        'images/kovitz-thumbnail.webp',
        'images/UA-Thumbnail.webp',
        'images/IceBox_Cover.webp',
        'images/cne-thumb.webp',
        'images/hibbett-thumb.webp',
        'images/bad-testing-thumb.webp',
        'images/soco-thumbnail.webp',
        'images/WaffleStop_Hero.webp',
        'images/reeses-thumbnail.webp',
    ], 
    index = 0, // starting index
    maxImages = images.length - 1;
var timer = setInterval(function() {
    var currentImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    // set your image using the currentImage
    imageToChange.src = currentImage;
 }, 750);

 setTimeout(()=> {
    clearInterval(timer);
 }, 750000);

 var logo = document.getElementById('logo');
 var square = document.getElementById('square');

 var timer2 = setInterval(function(){
    logo.style.display = 'none';
    square.style.display = 'flex';
 }, 3000)


document.getElementById('lets__talk__wrapper').addEventListener('mouseover', ()=> {
    document.querySelectorAll('.blur').forEach(item => item.classList.add('blurred'));
})

document.getElementById('lets__talk__wrapper').addEventListener('mouseleave', ()=> {
    document.querySelectorAll('.blur').forEach(item => item.classList.remove('blurred'));
})

const sections = Array.from(document.getElementsByClassName('section'));
   for (let section of sections) {
   const fadeups = section.getElementsByClassName('fade-delay');
     for (let count = 0; count < fadeups.length; count++) {
        fadeups[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
    }
  observer.observe(section);
}

})