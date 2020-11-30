var app = new Vue({
    el: '#app',
    data:{
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
        cart:0
    },
    methods: {
        addToCart:function (){
            this.cart+=1
        },
        removeFromCart:function (){
            this.cart-=1
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
        }
    }

})  