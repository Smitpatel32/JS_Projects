const score = document.getElementById("result");
const grids = document.querySelector('#grid');
var card;
const cardArray = [
    {
        name: 'Fries',
        img: 'fries.png'
    },
    {
        name: 'MilkShake',
        img: 'milkshake.png'
    },
    {
        name: 'Pizza',
        img: 'pizza.png'
    },
    {
        name: 'Ice-Cream',
        img: 'ice-cream.png'
    },
    {
        name: 'CheeseBurger',
        img: 'cheeseburger.png'
    },
    {
        name: 'Hot-Dog',
        img: 'hotdog.png'
    },
    {
        name: 'Fries',
        img: 'fries.png'
    },
    {
        name: 'MilkShake',
        img: 'milkshake.png'
    },
    {
        name: 'Pizza',
        img: 'pizza.png'
    },
    {
        name: 'Ice-Cream',
        img: 'ice-cream.png'
    },
    {
        name: 'CheeseBurger',
        img: 'cheeseburger.png'
    },
    {
        name: 'Hot-Dog',
        img: 'hotdog.png'
    }
]

let cardChosen=[];
let cardChosenId= [];
const cardsWon = [];
cardArray.sort(()=> 0.5 - Math.random())
let i = 0; 

create();

function create(){
    for(let i= 0 ; i<cardArray.length;i++)
    {
      card = document.createElement('img')
      card.setAttribute('src','blank.png    ');
      card.setAttribute('id', i);
      card.addEventListener('click',cardcall);
      grids.appendChild(card);

    }
}
function checkMatch()
{
    const cards = document.querySelectorAll('img');
    const first = cardChosenId[0];
    const second = cardChosenId[1];

    
    if(first === second){
        cards[first].setAttribute('src','blank.png');
        cards[second].setAttribute('src','blank.png');
    }
    else if(cardChosen[0] === cardChosen[1])
    {
        cards[cardChosenId[0]].setAttribute('src','white.png');
        cards[cardChosenId[1]].setAttribute('src','white.png');
        cards[cardChosenId[0]].removeEventListener('click', cardcall);
        cards[cardChosenId[1]].removeEventListener('click', cardcall);
        cardsWon.push(cardChosen);
        i++;
    }
    else{
        cards[cardChosenId[0]].setAttribute('src','blank.png');
        cards[cardChosenId[1]].setAttribute('src','blank.png');
    }
    cardChosen = [];
    cardChosenId = [];
    score.innerHTML = i;
    if(i==6)
    {
        alert('you won the game');
    }
}

function cardcall(){
    const cardId = this.getAttribute('id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChosen.length===2)
    {
        setTimeout(checkMatch, 500);
    }
}