const search = document.getElementById('search');
const results = document.getElementById('results');
const char = document.getElementById('char');

for(i = 0; i < data.length; i++) {
	var breed = document.createElement('div');
	breed.classList.add('card');
	breed.setAttribute("id", `${data[i].id}`);
	var image = document.createElement('div');
	image.classList.add('card__image');
	image.style.backgroundImage = `url(${data[i].url})`;
	var cardContent = document.createElement('div');
	cardContent.classList.add('card_content');
	var h2 = document.createElement('h2');
	h2.innerHTML = `${data[i].breeds[0].name}`;
	var text = document.createElement('p');
	text.innerHTML = `Breed for: ${data[i].breeds[0].bred_for} <br> Breed group: ${data[i].breeds[0].breed_group} <br> Life span: ${data[i].breeds[0].life_span}`;
	breed.appendChild(image);
	cardContent.appendChild(h2);
	cardContent.appendChild(text);
	breed.appendChild(cardContent);
	results.appendChild(breed);
}
 
function dataCheck(name, character){
    for(var i = 0; i < data.length; i++){ 
        var dogs = data[i].breeds[0];
        if(dogs.name.toLowerCase().includes(name.toLowerCase()) && dogs.temperament.includes(character)){
            document.getElementById(data[i].id).style.display="block"
        } else {
            document.getElementById(data[i].id).style.display="none"
        }
    }
}

search.addEventListener('input', function(e){
    dataCheck(e.target.value, char.value)
});

char.addEventListener('change', function(e){
    dataCheck(search.value, e.target.value);
});