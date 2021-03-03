var cardapio = new Vue({
    el:"#cardapio",
   
  
     data:{
    
        lanches:[
    
    
            { idLanche:"0001",
            nomeDoLanche:"Hamburguer",
            imagensDosLanches:"./imagens/hamburguer.jpg",
            qtd:0,
            detalhes:"Melhor pão, carne ótima"
           
            
        },
        { idLanche:"0002",
            nomeDoLanche:"Milk Shake",
            imagensDosLanches:"./imagens/milkShake.jpg",
            qtd:0,
            detalhes:"Melhor leite, cobertura ótima"
        },
        { idLanche:"0003",
            nomeDoLanche:"Pizza",
            imagensDosLanches:"./imagens/pizza.jpg",
            qtd:0,
            detalhes:"Melhor massa, molho ótimo"
        },
        { idLanche:"0004",
            nomeDoLanche:"Salgadinhos",
            imagensDosLanches:"./imagens/salgadinhos.jpg",
            qtd:0,
            detalhes:"Melhor de todos, sabor ótimo"
        },
    
        ]
        
    },
    
  
  methods:{
    soma(index){
      this.lanches[index].qtd += 1
      if( 
        this.lanches[index].qtd > 10
    ){ this.lanches[index].qtd = 10; alert('Máximo de dez unidades por pedido');
   }

    
    },
   diminui(index){
      this.lanches[index].qtd -= 1
      if( 
      this.lanches[index].qtd < 0
    ){ this.lanches[index].qtd = 0}
    },

  }
  });