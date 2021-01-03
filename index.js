class MeuH1 extends HTMLElement{
    connectedCallback(){

       this.innerHTML = `<h1> Olá mundo</h1>`;
    }
}

customElements.define('meu-h1', MeuH1);

const shadowRoot = document.querySelector('#inicio').attachShadow({mode:'open'});
shadowRoot.innerHTML = `
<style>

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        clear:both;

    }
.inicio{
    width:100%;
    background-color:lightgrey;
}

</style>

<div class="inicio"><p style="color:blue;">odoj</p>`