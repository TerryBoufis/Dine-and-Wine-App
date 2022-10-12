
const BREAKFASTURL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
const DESSERTURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
const DINNERURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
const LUNCHURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side"
const GINURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
const RUMURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum"
const VODKAURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
const WHISKEYURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey"


function drinktoggleMenu() {
    let categories = $("#drink-categories")
    categories.toggleClass("active")
    console.log("click")
}
function toggleMenu() {
    let categories = $("#categories")
    categories.toggleClass("active")
    console.log("click")
}
function toggleBreakfast(){
    fetch(BREAKFASTURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}
function toggleLunch(){
    fetch(LUNCHURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
    
}
function toggleDinner(){
    fetch(DINNERURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}
function toggleDessert(){
    fetch(DESSERTURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}
function toggleVodka(){
    fetch(VODKAURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}
function toggleGin(){
    fetch(GINURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}
function toggleWhiskey(){
    fetch(WHISKEYURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}
function toggleRum(){
    fetch(RUMURL).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
    })
}


document.getElementById("categories-btn").addEventListener("click", toggleMenu)
document.getElementById("drink-categories-btn").addEventListener("click", drinktoggleMenu)

document.querySelector("#breakfast").addEventListener("click", toggleBreakfast)
document.querySelector("#lunch").addEventListener("click", toggleLunch)
document.querySelector("#dinner").addEventListener("click", toggleDinner)
document.querySelector("#dessert").addEventListener("click", toggleDessert)

document.querySelector("#rum").addEventListener("click", toggleRum)
document.querySelector("#vodka").addEventListener("click", toggleVodka)
document.querySelector("#whiskey").addEventListener("click", toggleWhiskey)
document.querySelector("#gin").addEventListener("click", toggleGin)


