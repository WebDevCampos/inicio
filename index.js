class MeuH1 extends HTMLElement{
    connectedCallback(){

       this.innerHTML = `<h1> Olá mundo</h1>`;
    }
}

customElements.define('meu-h1', MeuH1);

