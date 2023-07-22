'use strict';

(function(){

    const form=document.querySelector("form");
    const enterBlock=document.querySelector('.entrance');
    const registerBlock=document.querySelector('.registration');

    form.addEventListener('change',(event)=>{
        event.preventDefault();
        event.stopPropagation();
        const {target}=event;
        if(target.name==="switcher-radio"){
            enterBlock.classList.toggle('hidden');
            registerBlock.classList.toggle('hidden');
        }


    })

})()