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

                    <v-avatar size="40">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>

            </v-col>
        </v-row>
    </v-container>

    <v-container-fluid style="font-size: 7pt; text-align: center">
        <v-row>

            <v-col

                col="1"

                class="dark"

            >

            Clothing & Shoes

            </v-col>

            <v-col
                col="1"
            >

            Entertainment

            </v-col>

            <v-col
                col="1"
            >

            Music

            </v-col>
            <v-col
                col="1"
            >

            Sports & Lifestyle

            </v-col>

            <v-col
                col="1"
            >

            Pets

            </v-col>

            <v-col
                col="1"
            >

            Kitchen Accessories

            </v-col>

            <v-col
                col="1"
            >

            Travel Equipment

            </v-col>

            <v-col
                col="1"
            >

            Growing & Garden

            </v-col>

            <v-col
                col="1"
            >

            Electrical Tools

            </v-col>
            <v-col
                col="1"
            >

            Mother Care

            </v-col>

            <v-col
                col="1"
            >

            Toys & Entertainment

            </v-col>

            <v-col
                col="1"
            >

            Vintage

            </v-col>
            
        </v-row>
    </v-container-fluid>


    <v-container
        class="mt-5"
    >
        <v-row>
            <v-col
               
                class="col-2 bg-dark"
            >
            
                    <v-treeview :items="items"></v-treeview>


            </v-col>

            <v-col
               
            >

            Related:

            <v-row>
                <v-col>
                    <v-badge
                    bordered
                    color="secondary"
                    icon="mdi-lock"
                    overlap
                    content="world wide shopping"
                    >
                    </v-badge>

                </v-col>

                 <v-col>
                    <v-badge
                    bordered
                    color="secondary"
                    icon="mdi-lock"
                    overlap
                    content="under $50"
                    >
                    </v-badge>

                </v-col>

                 <v-col>
                    <v-badge
                    bordered
                    color="secondary"
                    icon="mdi-lock"
                    overlap
                    content="kitchen"
                    >
                    </v-badge>

                </v-col>

                <v-col>
                    <v-badge
                    bordered
                    color="secondary"
                    icon="mdi-lock"
                    overlap
                    content="plastic plugs"
                    >
                    </v-badge>

                </v-col>
            </v-row>

             


            


                    <v-container>
                        <v-row>
                            <v-col>

                                <v-card
                                    :loading="loading"
                                    class="mx-auto my-12"
                                    max-width="200"
                                    elevation= "0"
                                >
                                    <template slot="progress">
                                    <v-progress-linear
                                        color="deep-purple"
                                        height="5"
                                        indeterminate
                                    ></v-progress-linear>
                                    </template>

                                    <v-img
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                    ></v-img>

                                    <v-card-text>
 
                                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                                    </v-card-text>
                                    <v-card-title>$ 45.00</v-card-title>

                     

                                    <v-row
                                        align="center"
                                        class="mx-0 "
                                        >
                                        <!-- <v-col
                                        col="2"
                                        >
                                            <v-rating
                                            :value="4.5"
                                            color="amber"
                                            dense
                                            half-increments
                                            readonly
                                            size="14"
                                            ></v-rating>
                                            <div class="grey--text ml-4 ">
                                            4.5 (413)
                                            </div>

                                        </v-col> -->

                                        <v-col>

                                            <v-btn
                                            class="ma-2"
                                            :loading="loading"
                                            :disabled="loading"
                                            color="secondary"
                                            @click="loader = 'loading'"
                                            >
                                            watch
                                            </v-btn>


                                        </v-col>
                                        

                                        
                                    </v-row>

                                </v-card>
                               
                            </v-col>

                             <v-col>

                                <v-card
                                    :loading="loading"
                                    class="mx-auto my-12"
                                    max-width="200"
                                    elevation= "0"
                                >
                                    <template slot="progress">
                                    <v-progress-linear
                                        color="deep-purple"
                                        height="5"
                                        indeterminate
                                    ></v-progress-linear>
                                    </template>

                                    <v-img
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                    ></v-img>

                                    <v-card-text>
 
                                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                                    </v-card-text>
                                    <v-card-title>$ 45.00</v-card-title>

                     

                                    <v-row
                                        align="center"
                                        class="mx-0 "
                                        >
                                        <!-- <v-col
                                        col="2"
                                        >
                                            <v-rating
                                            :value="4.5"
                                            color="amber"
                                            dense
                                            half-increments
                                            readonly
                                            size="14"
                                            ></v-rating>
                                            <div class="grey--text ml-4 ">
                                            4.5 (413)
                                            </div>

                                        </v-col> -->

                                        <v-col>

                                            <v-btn
                                            class="ma-2"
                                            :loading="loading"
                                            :disabled="loading"
                                            color="secondary"
                                            @click="loader = 'loading'"
                                            >
                                            watch
                                            </v-btn>


                                        </v-col>
                                        

                                        
                                    </v-row>

                                </v-card>
                               
                            </v-col>

                             <v-col>

                                <v-card
                                    :loading="loading"
                                    class="mx-auto my-12"
                                    max-width="200"
                                    elevation= "0"
                                >
                                    <template slot="progress">
                                    <v-progress-linear
                                        color="deep-purple"
                                        height="5"
                                        indeterminate
                                    ></v-progress-linear>
                                    </template>

                                    <v-img
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                    ></v-img>

                                    <v-card-text>
 
                                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                                    </v-card-text>
                                    <v-card-title>$ 45.00</v-card-title>

                     

                                    <v-row
                                        align="center"
                                        class="mx-0 "
                                        >
                                        <!-- <v-col
                                        col="2"
                                        >
                                            <v-rating
                                            :value="4.5"
                                            color="amber"
                                            dense
                                            half-increments
                                            readonly
                                            size="14"
                                            ></v-rating>
                                            <div class="grey--text ml-4 ">
                                            4.5 (413)
                                            </div>

                                        </v-col> -->

                                        <v-col>

                                            <v-btn
                                            class="ma-2"
                                            :loading="loading"
                                            :disabled="loading"
                                            color="secondary"
                                            @click="loader = 'loading'"
                                            >
                                            watch
                                            </v-btn>


                                        </v-col>
                                        

                                        
                                    </v-row>

                                </v-card>
                               
                            </v-col>

                             <v-col>

                                <v-card
                                    :loading="loading"
                                    class="mx-auto my-12"
                                    max-width="200"
                                    elevation= "0"
                                >
                                    <template slot="progress">
                                    <v-progress-linear
                                        color="deep-purple"
                                        height="5"
                                        indeterminate
                                    ></v-progress-linear>
                                    </template>

                                    <v-img
                                    height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                    ></v-img>

                                    <v-card-text>
 
                                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                                    </v-card-text>
                                    <v-card-title>$ 45.00</v-card-title>

                     

                                    <v-row
                                        align="center"
                                        class="mx-0 "
                                        >
                                        <!-- <v-col
                                        col="2"
                                        >
                                            <v-rating
                                            :value="4.5"
                                            color="amber"
                                            dense
                                            half-increments
                                            readonly
                                            size="14"
                                            ></v-rating>
                                            <div class="grey--text ml-4 ">
                                            4.5 (413)
                                            </div>

                                        </v-col> -->

                                        <v-col>

                                            <v-btn
                                            class="ma-2"
                                            :loading="loading"
                                            :disabled="loading"
                                            color="secondary"
                                            @click="loader = 'loading'"
                                            >
                                            watch
                                            </v-btn>


                                        </v-col>
                                        

                                        
                                    </v-row>

                                </v-card>
                               
                            </v-col>

                            
                            
                          
                        </v-row>
                    </v-container>

                   
                       



                        

               

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
        items: [
        {
          id: 1,
          name: 'All Categories :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Electronics :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
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
