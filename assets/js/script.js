$(document).foundation();

const BREAKFASTURL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
const DESSERTURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
const DINNERURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
const LUNCHURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side";
const GINURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
const RUMURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum";
const VODKAURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
const WHISKEYURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey";

var breakfastLink = $("#breakfastRecipes");
var lunchLink = $("#lunchRecipes");
var dinnerLink = $("#dinnerRecipes");
var dessertLink = $("#dessertRecipes");
var ginLink = $("#ginRecipes");
var vodkaLink = $("#vodkaRecipes");
var whiskeyLink = $("#whiskeyRecipes");
var rumLink = $("#rumRecipes");
var repCards = $(".recipe-cards");
var templateCard = $("#templateCard");
var middlePage = $(".marketing-site-hero");
var savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
var savedPage = $("#saved");
var home = $("#homePage");
var savedDiv = $("#savedRecipes");


    // javascript for added selectable cards to DOM which will hold recipes
    $('[data-cardSelectButton]').click(function() {
        $(this).parent('[data-cardSelect]').toggleClass('is-selected');
      });
    
    function toggleHome() {
        repCards.html("");
        middlePage.removeClass("hidden")
    }
    
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
    //iterate through each returned object to retrieve a link to the full recipe
    //based on the object ID number, then insert full link, recipe image and title
    //into a selectable card created on the page
    function printCards(data) {
        repCards.html("")
        savedDiv.addClass("hidden")
        data.meals.forEach(m => {
            var recipeID = m.idMeal;
            var recipeTitle = m.strMeal;
            var recipeImgLink = m.strMealThumb;
            //create url to fetch recipe URL with recipe object ID number
            var idSearchURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recipeID;
    
            fetch(idSearchURL)
            .then(function(response){
                return response.json()
            }).then(function(data){
                //console.log(data)
                //get link to actual recipe instructions
                var recipeLink = data.meals[0].strSource;
                var recipeCard = $(templateCard).clone();
                $("img", recipeCard).attr("src", recipeImgLink)
                $("h5", recipeCard).text(recipeTitle)
                $("a", recipeCard).attr("href", recipeLink)
                $(".button", recipeCard).on("click", function(){
                    //console.log($(this).parent().html()) 
                    savedRecipes.unshift($(this).parent().html());
                    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes)) 
                    //console.log(savedRecipes);
                })
                recipeCard.appendTo(repCards)
                repCards.removeClass("hidden")
                recipeCard.removeClass("hidden")
                middlePage.addClass("hidden")
    
            })
        })
    
    }
    
    function printDrinks(data) {
        repCards.html("")
        savedDiv.addClass("hidden")
        data.drinks.forEach(c => {
            var recipeID = c.idDrink;
            var recipeTitle = c.strDrink;
            var recipeImgLink = c.strDrinkThumb;
            //create url to fetch recipe URL with recipe object ID number
            var idSearchURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + recipeID;
    
            fetch(idSearchURL)
            .then(function(response){
                return response.json()
            }).then(function(data){
                console.log(data)
                //get link to actual recipe instructions
                var recipeInstructions = data.drinks[0].strInstructions;
                var recipeCard = $(templateCard).clone();
                $("img", recipeCard).attr("src", recipeImgLink)
                $("h5", recipeCard).text(recipeTitle)
                $("p", recipeCard).text(recipeInstructions)
                $("#repLink").remove()
                $(".button", recipeCard).on("click", function(){
                    //console.log($(this).parent().html()) 
                    savedRecipes.unshift([$(this).parent().html()]);
                    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes)) 
                    localStorage.getItem("savedRecipes");
                    console.log(savedRecipes);
                })
                recipeCard.appendTo(repCards)
                repCards.removeClass("hidden")
                recipeCard.removeClass("hidden")
                middlePage.addClass("hidden")
                
    
            })
        })
    
    }
    
    function toggleBreakfast(){
        fetch(BREAKFASTURL).then(function(data){
            return data.json()
        }).then(function(data){
            // console.log(data)
            printCards(data)
            
        })
    }
    function toggleLunch(){
        fetch(LUNCHURL).then(function(data){
            return data.json()
        }).then(function(data){
            printCards(data)
        })
        
    }
    function toggleDinner(){
        fetch(DINNERURL).then(function(data){
            return data.json()
        }).then(function(data){
            // console.log(data)
            printCards(data)
        })
    }
    function toggleDessert(){
        fetch(DESSERTURL).then(function(data){
            return data.json()
        }).then(function(data){
            // console.log(data)
            printCards(data)
        })
    }
    function toggleVodka(){
        fetch(VODKAURL).then(function(data){
            return data.json()
        }).then(function(data){
           // console.log(data)
            printDrinks(data)
        })
    }
    function toggleGin(){
        fetch(GINURL).then(function(data){
            return data.json()
        }).then(function(data){
            //console.log(data)
            printDrinks(data)
        })
    }
    function toggleWhiskey(){
        fetch(WHISKEYURL).then(function(data){
            return data.json()
        }).then(function(data){
            //console.log(data)
            printDrinks(data)
        })
    }
    function toggleRum(){
        fetch(RUMURL).then(function(data){
            return data.json()
        }).then(function(data){
            //console.log(data)
            printDrinks(data)
        })
    }
    
    function loadSaved() {
        repCards.html("")
        repCards.addClass("hidden")
        middlePage.addClass("hidden")
        savedRecipes.forEach(r => {
            //console.log($(r))
            savedDiv.append(r)
            $("button", savedDiv).remove()
        })
    }

breakfastLink.on("click", toggleBreakfast);
lunchLink.on("click", toggleLunch);
dinnerLink.on("click", toggleDinner);
dessertLink.on("click", toggleDessert);
ginLink.on("click", toggleGin);
vodkaLink.on("click", toggleVodka);
whiskeyLink.on("click", toggleWhiskey);
rumLink.on("click", toggleRum);
home.on("click", toggleHome);
savedPage.on("click", loadSaved);


