function toggleMenu() {
    let categories = $("#categories")
    categories.toggleClass("active")
    console.log("click")
}

const BREAKFASTURL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
const DESSERTURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"

fetch(BREAKFASTURL).then(function(data){
    return data.json()
}).then(function(data){
    console.log(data)
})

