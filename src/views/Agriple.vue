<template>
   <div class="s">

        <v-container>
        <v-row>
            <v-col
                col= "3"
            >
                
            </v-col>
             <v-col
                col= "3"
            >
                <v-text-field
               
                placeholder="Search"
                filled
                rounded
                dense
                ></v-text-field>

            </v-col>

             <v-col
                col= "3"
                class="d-flex justify-end"
                
                tile
            >
                  <v-btn
                    class="ma-2"
                    
                    color="indigo"
                    outlined
                    
                    >
                    Sign In
                    </v-btn>

                      <v-btn
                    class="ma-2"
                    outlined
                    color="indigo"
                    
                    >
                    My Cart
                    </v-btn>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>

            <v-col
                col="1"
            >

            Clothing & Shoes

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>
            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>
            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>

            <v-col
                col="1"
            >

            onoe

            </v-col>
            
        </v-row>
    </v-container>
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
