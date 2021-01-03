class MeuH1 extends HTMLElement{
    connectedCallback(){

       this.innerHTML = `<h1> Olá mundo</h1>`;
    }
}

customElements.define('meu-h1', MeuH1);

class MeuForm extends HTMLElement{
    connectedCallback(){

       this.innerHTML = `
       <div style="display:grid; grid-template-columns:auto; width: 50vw; text-align:center; position:relative; left:30%; top:50%; transform: translate(-50% -50%);">

       <form action="" method="GET">
           <label>Nome </label> <input type="" id="" name="" value="" placeholder="Digite seu nome" required;/>
           <label>E-mail </label> <input type="email" id="" name="" value="" placeholder="Digite seu e-mail" required;/>
           <input type="submit"/>
       </form>
       
       </div>`;
    }
}

customElements.define('meu-form', MeuForm );



const usuario = {
    nome: "username",
    id:1
};
