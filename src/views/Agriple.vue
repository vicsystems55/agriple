<template>
    <div>

        <h2 class="display-4"></h2>

        <div class="container">
            sldkfjkl

            <div class="row">
                <div class="col-2">
                    <span class="badge badge-secondary">world wide shopping</span>
                </div>
            </div>
              <div class="row">

                <div class="col-2 badge badge-secondary">world wide shopping</div>
                <div class="col-2 badge badge-secondary">under $50</div>
                <div class="col-2 badge badge-secondary">kitchen</div>
                <div class="col-2 badge badge-secondary">plastic plug</div>
                <div class="col-2 badge badge-secondary">poker shoes</div>
                <div class="col-2 badge badge-secondary">vintage typewriter</div>
            </div>
        </div>


        <div class="container">

           <div  class="row">

              

                <div  v-for="product in products" :key="product.index" class="col-md-3 mx-auto p-1">

                    <div class="card mb-2  ">

                        <div class="card-body">
                            <img class="img-fluid" :src="img" alt="imag">

                            <p>
                               
                            </p>
                            <h1></h1>

                            <p class="text-muted">
                                {{product.description}}
                            </p>

                            <div class="justify-content-end">
                                <button class="btn btn-outline-primary float-right">Watch</button>
                            </div>





                        </div>
                    </div>
                </div>
            </div>

            
        </div>




        
    </div>
</template>

<script>

import axios from 'axios';

export default {

    name:"agriple",

data () {
    return {
      products: [],
      loading: true,
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      
    }
  },

methods: {

    getImage(){

         return 123;

    },

    getProducts(){


        console.log('hello');
        
        axios.get('https://jsonplaceholder.typicode.com/posts'
)
        .then((response)=>(

            this.loading = false,
            
            this.products = response.data,

            console.log(response)
        ))
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        // always executed
        
        }); 
    }

        
},
 created () {

    this.getProducts()


  },
    
}


</script>
