const  input=document.querySelector(`.input`);
const  form=document.querySelector(`.form`);
const  box=document.querySelector(`.box`);
const  h2=document.querySelector(`.h2`);

 let son = parseInt(Math.random() * 100 + 1);
 console.log(son);
  h2.textContent='1 dan 100 gacha oralig`ida son kiriting';
form.addEventListener(`submit`, (evt) =>{
    evt.preventDefault();
   
    let val=Number(input.value);
    input.value=``;
    if(son>val){
        box.innerHTML=` ${val} dan kattaroq son kiriting`;
        box.style.color=`red`;
    }
 else if(son<val){
        box.innerHTML=` ${val} dan kichikroq son kiriting`;
        box.style.color=`blue`;
    }
    else if(son==val){
        box.innerHTML=` Topdingiz!Ofarin🤗 ${val}`;
        box.style.color=`green`;
    }
});