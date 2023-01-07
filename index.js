//Система меню бургер
const buttonBurger = document.querySelector(".burger_icon");
const burgerMenu = document.querySelector(".burger__menu");
const burgerExit = document.querySelector(".burger__exit");
const burger__list = document.querySelector(".burger__list");
const burger__menu = document.querySelector(".burger__menu");

buttonBurger.addEventListener('click', function(){
  burgerMenu.classList.add("burger__menuBLOCK");
})

burgerExit, burger__list, burger__menu.addEventListener("click", function () {
    burgerMenu.classList.remove("burger__menuBLOCK");
});

//Система добавления суммы в корзину
const summButton = document.querySelectorAll(".pcard__button");
const summ = document.querySelectorAll(".pcard__price");
const bbasketSumm = document.querySelector(".bbasket__summ");
const basketSumm = document.querySelector(".basket__summ");
const bbasketIcon = document.querySelector(".bbasket__icon");
const basketIcon = document.querySelector(".basket__icon");
let summa = 0

for (let b = 0; b < summButton.length; b++) {
    summButton[b].onclick = function() {
      alert("Товар добавлен в корзину!\nДля оплаты товара нажмите на кнопку 'Сделать заказ'\nЕсли вы случайно выбрали товар, то нажмите на иконку рядом с суммой!")
      summa = summa + parseFloat(summ[b].innerText.split(" ")[0]);
      bbasketSumm.innerText = `${summa} р.`;
      basketSumm.innerText = `${summa} р.`;
    }
}

basketIcon.addEventListener('click', function() {
  summa = 0
  bbasketSumm.innerText = "";
  basketSumm.innerText = "";
  alert("Корзина товаров успешно очищена!");
})

bbasketIcon.addEventListener("click", function () {
    summa = 0;
    bbasketSumm.innerText = "";
    basketSumm.innerText = "";
    alert("Корзина товаров успешно очищена!");
  });

/*Окно заказа*/
const offerButton = document.querySelector(".offer__button");
const order = document.querySelector(".order");
const orderExit = document.querySelector(".order__icon");
const orderOverlay = document.querySelector(".order__overlay");

offerButton.addEventListener('click', function() {
  order.classList.add("orderONN")
})

orderExit, orderOverlay.addEventListener('click', function() {
  order.classList.remove("orderONN");
})

orderExit.addEventListener("click", function () {
    order.classList.remove("orderONN");
});