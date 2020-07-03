
var order = document.getElementById("order");

function openOrder() {
  order.style.display = "block";
  document.body.style.overflow="hidden";
}

function closeOrder() {
  order.style.display = "none";
  document.body.style.overflow="unset";
}