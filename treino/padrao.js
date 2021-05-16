

const user = {

  name:'Marcus',
  age: 31,
  posts:[
    {greet:'Bom dia!' , time:09 }, 
    {greet:'Boa noite!', time:21}
  ],
  postsInfo(){

   

     this.posts.forEach((post) => { return post })

  
  }
}

console.log(user.postsInfo())