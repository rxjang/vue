var app = new Vue({
    el: '#app',
    data:{
        product:"Socks",
        image:"./assests/vmSocks-green-onWhite.jpg",
        description:"A pair of warm, fuzzy socks",
        altText:"A pair of socks",
        link:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        inventory:0,
        inStock:false,
        onSale:true,
        details:["80% cotton","20% polyester","Gender-netural"],
        variants:[
            {
                variantId:2234,
                variantColor:"green",
                variantImage:"./assests/vmSocks-green-onWhite.jpg"
            },
            {
                variantId:2235,
                variantColor:"blue",
                variantImage:"./assests/vmSocks-blue-onWhite.jpg"
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
        updateProduct:function(variantImage){
            this.image=variantImage
        }
    },

})  