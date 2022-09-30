'use strict';
const player0 =document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');
const dice=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold')
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
let curr=0;
let playing=true;
const switchplayer=function(){
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer=activeplayer === 0 ? 1: 0;
    curr=0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
let scores=[0,0];
let activeplayer=0;
dice.classList.add('hidden');
score0.textContent=0;
score1.textContent=0;
btnRoll.addEventListener('click',function(){
    if(playing===true){
        const diceVal = Math.trunc(Math.random()*6)+1;
        console.log(diceVal);
        dice.classList.remove('hidden');
        dice.src=`dice-${diceVal}.png`
        if(diceVal!==1){
            curr=curr+diceVal;
            document.getElementById(`current--${activeplayer}`).textContent=curr;;
        }else{
            
            switchplayer();
        }
    }


});

btnHold.addEventListener('click',function(){
    if(playing===true){
        scores[activeplayer]+=curr;
        document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
        if(scores[activeplayer]<10){
            switchplayer();
        }
        else{
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            dice.classList.add('hidden')
            playing=false;
            document.querySelector('.btn--roll').classList.add('hidden')
            document.querySelector('.btn--hold').classList.add('hidden')
        }
    }
    
});
btnNew.addEventListener('click',function(){
    scores=[0,0];
    curr=0;
    playing=true;
    document.querySelector('.btn--roll').classList.remove('hidden')
    document.querySelector('.btn--hold').classList.remove('hidden')
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    document.getElementById(`score--0`).textContent=scores[0];
    document.getElementById(`score--1`).textContent=scores[1];
    document.querySelector('#current--0').textContent=curr;
    document.querySelector('#current--1').textContent=curr;



})

