const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
const res = document.getElementById('res')
const counter = document.getElementById('counter')
var count = 0 

const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('dec'))
        {
            count--
        }
        else if(styles.contains('inc'))
        {
            count++;
        }
        else{
            count = 0;
        }

        if(count>0){
            counter.style.color = '#FFFF00'
        }
        else if(count<0){
            counter.style.color = 'red'
        }

        counter.textContent = count;
    })
})

// inc.addEventListener('click',function(){
//     count++;
//     counter.textContent = count
// })

// dec.addEventListener('click',function(){
//     count--;
//     counter.textContent = count
// })

// res.addEventListener('click',function(){
//     count = 0;
//     counter.textContent = count
// })