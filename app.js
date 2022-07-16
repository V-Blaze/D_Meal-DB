// window.onload = function() {

// };
const random = document.querySelector('#randombtn');
const randomdiv = document.querySelector('#randomDiv');

const randomMeal = async () => {
	const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php', {
		params: {}
	});
	if (response.data.Error) {
		console.log(error);
		return [];
	}

	return response.data.meals;
};

random.addEventListener('click', async () => {
	const randmeal = await randomMeal();

	console.log(randmeal);

	randomdiv.innerHTML = `
	    <div class="card">
	    <div class="card-content">
        <figure class="image" has-text-centered>
        <img src="${randmeal[0].strMealThumb}/preview"/>
        </figure>
        <h2 class="subtitle" style="color: black;">${randmeal[0].strMeal}</h2>
	    </div>
	    <footer class="card-footer">
	        <div class="card-footer-item">
	            <span class="button is-success"><i class="fa fa-thumbs-up"></i></span>
	        </div>
	        <div class="card-footer-item">
	            <span class="button is-info"><i class="fa fa-retweet"></i></span>
	        </div>
	    </footer>
	</div>
	    `;
});
