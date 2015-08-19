var cat_image = document.getElementById('cat_image');
var feed_button = document.getElementById('feed_button');
var run_button = document.getElementById('run_button');

cat_image.onclick = function() {
	alert('MeOw!');
};

feed_button.addEventListener('click',function(){
	feed(50);
});

function feed(mealsize){
	cat_image.style.width = (cat_image.offsetWidth + mealsize) + 'px';
};

run_button.addEventListener('click',run);

function run(){
	cat_image.style.width = (cat_image.offsetWidth - 50) + 'px';
};