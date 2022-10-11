function toggleMenu() {
    let categories = $("#categories")
    categories.toggleClass("active")
    console.log("click")
}

document.getElementById("categories-btn").addEventListener("click", toggleMenu)

  