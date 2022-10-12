function toggleMenu() {
    let categories = $("#categories")
    categories.toggleClass("active")
    console.log("click")
}

const BREAKFASTURL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
const DESSERTURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
const DINNERURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
const LUNCHURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side"

fetch(BREAKFASTURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
fetch(DESSERTURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
fetch(DINNERURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
fetch(LUNCHURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})


const GINURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
const RUMURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum"
const VODKAURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
const WHISKEYURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey"

fetch(GINURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
fetch(RUMURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
fetch(VODKAURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
fetch(WHISKEYURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})
