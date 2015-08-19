var cat_image = document.getElementById("cat_image");
var feed_button = document.getElementById("feed_button");
var run_button = document.getElementById("run_button");

cat_image.onclick = function() {
	alert("MeOw!");
};

feed_button.addEventListener("click",function(){
	feed(50);
});

function feed(mealsize){
	cat_image.style.width = (cat_image.offsetWidth + mealsize) + "px";
};

run_button.addEventListener("click",run);

function run(){
	cat_image.style.width = (cat_image.offsetWidth - 50) + "px";
};

var list_of_numbers = [cat_image,1,"runrunrun"];

var cat_object = {
	weight: 5,
	pass_weight_values: [1.4,2.3,4.5],
	name: "princess caroline"
};

cat_object.height = 10;

var cat_list = [cat_object,cat_object];

cat_list.push({ 
	weight:23, 
	pass_weight_values:[1.23,1.4], 
	name:"halohalo"
});

cat_list.push({
	pass_weight_values:[99.42,123.23]
});

console.log(cat_list);

for (var i = cat_list.length - 1; i >= 0; i--) {
console.log(cat_list[i]);
};

console.log("ଲ( ⓛ ω ⓛ *)ଲ");

cat_list[0].name = "Princess IsaKiKo";

for(var cat in cat_list){
	console.log(cat_list[cat]);
};

function turnCatToDog(cat){
	return { 
		name: "Mr. " + cat.name,
		weight: cat.weight*2
	};
};

var dog_list = cat_list.map(turnCatToDog);

for(var dog in dog_list){
	console.log(dog_list[dog]);
};

console.log("ଲ( ⓛ ω ⓛ *)ଲ");

var cat_json = JSON.stringify(cat_list);

console.log(cat_json);

var cat_list_from_json = JSON.parse(cat_json);

for(var cat in cat_list_from_json){
	console.log(cat_list_from_json[cat]);
};

