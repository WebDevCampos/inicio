var cardapio = new Vue({
    el:"#cardapio",
    data:{
       
       qtd:0,
        lanches:[
    
    
            { idLanche:"0001",
            nomeDoLanche:"Hamburguer",
            imagensDosLanches:"./imagens/hamburguer.jpg",
            qtd:0,
           
            
        },
        { idLanche:"0002",
            nomeDoLanche:"Milk Shake",
            imagensDosLanches:"./imagens/milkShake.jpg",
            qtd:0,
        },
        { idLanche:"0003",
            nomeDoLanche:"Pizza",
            imagensDosLanches:"./imagens/pizza.jpg",
            qtd:0,
            
        },
        { idLanche:"0004",
            nomeDoLanche:"Salgadinhos",
            imagensDosLanches:"./imagens/salgadinhos.jpg",
            qtd:0,
        },
    
        ]
        
    },
    
    methods:{
    soma(){
        this.qtd += 1
    },
    diminui(){
        this.qtd -= 1
    },
    
    }
     });
    
    