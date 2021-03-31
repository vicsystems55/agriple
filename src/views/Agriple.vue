<template>
    <div>

        <h2 class="display-4"></h2>


        <div class="container">
            
            <div class="row">
                <div class="col-2 badge badge-secondary">world wide shopping</div>
                <div class="col-2 badge badge-secondary">under $50</div>
                <div class="col-2 badge badge-secondary">kitchen</div>
                <div class="col-2 badge badge-secondary">plastic plug</div>
                <div class="col-2 badge badge-secondary">poker shoes</div>
                <div class="col-2 badge badge-secondary">vintage typewriter</div>
            </div>


            <div v-if="loading" class="ds">


                <h2 class="text-center mt-5">An error occured...</h2>
                <p class="text-mute">
                    Access to XMLHttpRequest at 'https://agriple.com/api/search?max_amount=100000&page=1' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
                </p>


            </div>

            <div v-else class="row">

                <div v-for="product in products" :key="product.index" class="col-md-3 mx-auto p-1">

                    <div class="card mb-2 shadow ">

                        <div class="card-body">
                            <img :src="product.profile_picture.url" alt="imag">

                            <p>
                                {{product.description}}
                            </p>
                            <h1>$ {{product.price}}</h1>

                            <p class="text-muted">
                                {{product.short_desc}}
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
      loading: true
      
    }
  },

methods: {

    getImage(){

         return 123;

    },

    getProducts(){


        console.log('hello');
        
        axios.get('https://agriple.com/api/search?max_amount=100000&page=1',{
         headers: {
          "Access-Control-Allow-Origin": "*"
         
        }}
)
        .then((response)=>(

            this.loading = false,
            
            // this.products = response.data,

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
