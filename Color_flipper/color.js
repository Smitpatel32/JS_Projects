const col = ["green",'red','rgb(0,255,255)','#f15025'];

const btton = document.getElementById('btn');
const color = document.querySelector('.color')

btton.addEventListener('click',function () {
    const rands = Math.round(Math.random() *3)
    
    document.body.style.backgroundColor = col[rands]
    color.textContent = col[rands]
})