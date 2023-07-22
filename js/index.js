'use strict';

(function(){

    const form=document.querySelector("form");
    const enterBlock=document.querySelector('.entrance');
    const registerBlock=document.querySelector('.registration');
    const password=document.querySelector('#user-password');
    const eyeOnSvg=document.querySelector('.eye-on-icon');
    const eyeOffSvg=document.querySelector('.eye-off-icon');

    form.addEventListener('change',(event)=>{
        event.preventDefault();
        event.stopPropagation();
        const {target}=event;
        if(target.name==="switcher-radio"){
            enterBlock.classList.toggle('hidden');
            registerBlock.classList.toggle('hidden');
        }


    })

    form.addEventListener('click', (event)=>{
        event.stopPropagation();
        const {target}=event;
        console.log(target);
        if(target.dataset.eye!==undefined){
            eyeOnSvg.classList.toggle('hidden');
            eyeOffSvg.classList.toggle('hidden');
            eyeOnSvg.classList.contains('hidden')?password.type='text':password.type='password';
        }

    })

})()