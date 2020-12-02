Vue.component('product-details',{
    props:{
        details:{
            type:Array,
            required:true
        }
    },
    template:`
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
    `
})

Vue.component('product',{
    props:{
        premium:{
            type:Boolean,
            required :true
        }
    },
    template:`
    <div class="product">
        <div class="product-image ">
            <a :href="link">
                <img v-bind:src="image " :alt="altText">
            </a>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>{{ sale }}</p>
            <p>Shipping:{{shipping}}</p>

            <product-details :details="details"></product-details>

            <div v-for="(variant,index) in variants" 
                :key="variant.varinatId "
                class="color-box"
                :style="{backgroundColor:variant.variantColor}"
                @mouseover="updateProduct(index)"
                >
            </div>

            <div v-for="size in sizes">
                <span>{{size}}</span>
            </div>

            <button v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >Add to cart
            </button>

            <button v-on:click="removeFromCart">Removce from Cart</button>
           
        </div>
    </div>
    `,
    data(){
        return {
            brand:"Vue mastery",
            product:"Socks",
            selectedVariant:0,
            description:"A pair of warm, fuzzy socks",
            altText:"A pair of socks",
            link:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
            inventory:0,
            onSale:true,
            details:["80% cotton","20% polyester","Gender-netural"],
            variants:[
                {
                    variantId:2234,
                    variantColor:"green",
                    variantImage:"./assests/vmSocks-green-onWhite.jpg",
                    variantQuantity:5
                },
                {
                    variantId:2235,
                    variantColor:"blue",
                    variantImage:"./assests/vmSocks-blue-onWhite.jpg",
                    variantQuantity:0
                }
            ],
            sizes:["XS","S","M","L"],
        }
    },
        methods: {
            addToCart:function (){
                this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
            },
            removeFromCart:function (){
                this.$emit('remove-from-cart',this.variants[this.selectedVariant].variantId)
            },
            updateProduct:function(index){
                this.selectedVariant=index 
            } 
        },
        computed:{
            title(){
                return this.brand+' '+this.product 
            },
            image(){
                return this.variants[this.selectedVariant].variantImage 
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity
            },
            sale(){
                if(this.onSale){
                    return this.brand+' '+this.product +'are on sale!'
                }else{
                    return this.brand+' '+this.product +'are not on sale'
                }
            },
            shipping(){
                if(this.premium){
                    return "Free"
                }
                return 2.99
            }
        }
})

var app = new Vue({
    el: '#app',
    data:{
        premium:false,
        cart:[]
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        removeProduct(id){
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                   this.cart.splice(i, 1);
                }
            }
        }
    }
})  