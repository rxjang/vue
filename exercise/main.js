var app = new Vue({
    el: '#app',
    data:{
        product:"Socks",
        image:"./assests/vmSocks-green-onWhite.jpg",
        description:"A pair of warm, fuzzy socks",
        altText:"A pair of socks",
        link:"https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        inventory:0,
        onSale:true,
        details:["80% cotton","20% polyester","Gender-netural"],
        variants:[
            {
                variantId:2234,
                variantColor:"green"
            },
            {
                variantId:2235,
                variantColor:"blue"
            }
        ],
        sizes:["XS","S","M","L"]
    }

})  