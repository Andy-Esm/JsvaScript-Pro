const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 150 },
  { title: "Shoes", price: 250 },
];

const renderGoodsItem = (product) => {
  return `<div class='goods-item'>
          <img src="img/websiteplanet-dummy-360X400.png">
          <h3>${product.title}</h3>
          <p>${product.price}</p>
          <button class=" btn btn-buy">Купить</button>
          </div>`;
};

const page = (x) => {
  document.querySelector(".goods-list").innerHTML = x
    .map((product) => renderGoodsItem(product))
    .join("");
};
page(goods);
