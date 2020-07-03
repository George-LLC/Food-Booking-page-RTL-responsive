var home = document.getElementsByClassName("tab-content");
var addItemsCart = document.getElementsByClassName("form-addItemsCart");


home[0].addEventListener("click", function(e) {
	let target = e.target
	if(target.tagName != "A") return;
	 addItemsCart.style.display = "block";
  document.body.style.overflow="hidden";	
	
});


function closeAddItemsCart() {
  addItemsCart.style.display = "none";
  document.body.style.overflow="unset";
}

// =============   OPEN and CLOSE DROPDOWN 1 and 2   ==============================//
	var count1 = 0;
	var count2 = 0;

var dropdown_menu1 = document.getElementsByClassName("dropdown_menu1");
var dropdown_menu2 = document.getElementsByClassName("dropdown_menu2");
var headerDropdown1 = document.querySelector(".header-dropdown1");
var headerDropdown2 = document.querySelector(".header-dropdown2");

function dropdown1(){

	if (count1 % 2 == 0) {
		headerDropdown1.classList.add("downArrow");
		dropdown_menu1[0].style.display = "none";
	}
	if (count1 % 2 != 0) {
		headerDropdown1.classList.remove("downArrow");
		dropdown_menu1[0].style.display = "block";
	}
	count1++;
}

function dropdown2(){

	if (count2% 2 == 0) {
		headerDropdown2.classList.add("downArrow");
		dropdown_menu2[0].style.display = "none";
	}
	if (count2 % 2 != 0) {
		headerDropdown2.classList.remove("downArrow");
		dropdown_menu2[0].style.display = "block";
	}
	count2++;
}

