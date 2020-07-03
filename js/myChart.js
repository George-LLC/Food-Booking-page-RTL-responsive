
var home = document.getElementsByClassName("tab-content");
var num_card = document.getElementsByClassName("num_card");
var card_caunt = Number(num_card[0].innerHTML);

home[0].addEventListener("click", function(e) {
	let target = e.target
	if(target.tagName != "A") return;
	card_caunt += 1;
	num_card[0].innerHTML = card_caunt;
});


var myChart = document.getElementById("myChart");

function openMyCart() {
  myChart.style.display = "block";
  document.body.style.overflow="hidden";
}

function closeMyCart() {
  myChart.style.display = "none";
  document.body.style.overflow="unset";
}

function removeCard() {
	num_card[0].innerHTML = 0;
	card_caunt = 0;
}