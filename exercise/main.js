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

        <div>
            <h2>Reviews</h2>
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
                <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                </li>
            </ul>
       </div>

        <product-review @review-submitted="addReview"></product-review>    
        
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
            reviews:[]
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
            },
            addReview(productReview) {
                this.reviews.push(productReview)
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

Vue.component('product-review',{
    template:`
    <form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length">
        <b>Please correct the following-error(s)":</b>
        <ul>
            <li v-for="error in errors">{{error }}</li>
        </ul>
    </p>
        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" placeholder="name">
        </p>
        <p>
            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
        <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
        <p>
            <input type="submit" value="Submit">  
        </p>    
    
    </form>
    `,
    data(){
        return{
            name:null,
            review:null,
            rating:null,
            errors:[]
        }
    },
    methods:{
        onSubmit() {
            if(this.name&&this.review&&this.rating){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                  }
                  this.$emit('review-submitted', productReview)
                  this.name = null
                  this.review = null
                  this.rating = null
            }else{
                 if(!this.name) this.errors.push("Name required")
                 if(!this.review) this.errors.push("Review required")
                 if(!this.rating) this.errors.push("Rating  required")
            }
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