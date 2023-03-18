let hexRef = [0,1,2,3,4,5,6,7,8,9,'a', 'b', 'c', 'd', 'e', 'f'];
const btton = document.getElementById('btn');
const color = document.querySelector('.color')

btton.addEventListener('click',function () {
let hexR = '#';
for(let i = 0; i<6;i++){
    var x = Math.round(Math.random()*16)
    hexR = hexR.concat(hexRef[x].toString());
}
document.body.style.backgroundColor = hexR;
color.textContent = hexR;
})