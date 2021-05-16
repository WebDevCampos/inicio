




//#region vue
Vue.component('header-nome',{
    template: `
    <div class='container-fluid bg-danger text-white text-center p-4 fs-1'>
    <p>{{name}}</p>
    </div>`,
    
    data(){
      return {
        name: 'Marcus'
      }
    }
   
  })
  
  const STDheader = new Vue({
    el:'#STDheader',
  })
  
//#endregion vue


//#region slick

  $(document).ready(function(){
    $('.carro').slick({
      infinite:true,
      arrows:true,
      dots:true,
      autoplay:true,
    })
  })
//#endregion slick

  