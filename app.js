const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = meals => {
    console.log(meals)
    const mealContainer = document.getElementById('meal-container')
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row m-4 p-4'
        mealDiv.innerHTML = `
        <div class="col-md-4">
            <img id="details-meal" src="${meal.strMealThumb}">
            <h3 class="lyrics-name">${meal.strMeal}</h3>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    });
}