let slide = [
    {
        img : "i1.webp",
        name: "One"
    },
    {
        img : "i2.jpeg",
        name: "Two"
    },
    {
        img : "i3.jpeg",
        name: "Three"
    },
    {
        img : "i4.jpg",
        name: "Four"
    },
]
let imag=document.getElementById('slider-image');
let text= document.getElementById('slider-text');
let current=0;
function next(){
   current=(current+1)%slide.length;
   imag.src=`images/${slide[current].img}`
   text.innerHTML = `${slide[current].name}`
}
function prew(){
    current = (current - 1 + slide.length)%slide.length;
    imag.src=`images/${slide[current].img}`
    text.innerHTML = `${slide[current].name}`
}
