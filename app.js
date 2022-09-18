
const images = [
    'img/pic-1.jpg',
    'img/pic-2.jpg',
    'img/pic-3.jpg',
    'img/pic-4.jpg',
    'img/pic-5.jpg',
    'img/pic-6.jpg'
]

const slider = document.getElementById('sllider');
let count = 0;


setInterval(()=>{
    if(images.length === count){
        count = 0;
    }
    // console.log(images[count]);
    // slider.setAttribute('src',images[count]);


    const imgLink = images[count];
    slider.setAttribute('src',imgLink);
    count = count+1;

},3000)