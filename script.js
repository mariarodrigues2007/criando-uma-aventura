const avança=document.querySelectorall('.btn-proximo');

avanca,fareach9buttan=>{
    GamepadButton.addEventlistener('click',function(){
        const atual= document.querySelector('.ativo');
        const proximopasso = 'passo-'+ this.geTAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add(