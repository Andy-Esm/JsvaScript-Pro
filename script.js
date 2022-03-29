// Создаем класс
class GoodsItem {
  constructor(product, img = "img/websiteplanet-dummy-360X400.png") {
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }
  render() {
    return `<div class='goods-item'>
          <img src=${this.img}>
          <h3>${this.title}</h3>
          <p>${this.price}</p>
          <button class=" btn btn-buy">Купить</button>
          </div>`;
  }
}

class GoodsList {
  constructor(container = ".goods-list") {
    this.goods = [];
    this.container = container;
    this.fetchGoods();
    this.allGoods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: "Shirt", price: 150 },
      { title: "Socks", price: 50 },
      { title: "Jacket", price: 350 },
      { title: "Shoes", price: 250 },
    ];
  }
  getSum() {
    let priceOfGoods = 0;
    this.goods.forEach((item) => {
      priceOfGoods += item.price;
    });
  }
  renderGoods() {
    let block = document.querySelector(this.container); // обращаемся к контейнеру

    for (let product of this.goods) {
      let productObj = new GoodsItem(product);
      this.allGoods.push(productObj);
      block.insertAdjacentHTML("beforeend", productObj.render());
    }
  }
}

let list = new GoodsList();
list.renderGoods();
list.getSum();

class Basket {
  //добавляем товары
  addGood() {}
  //удаляем товар
  removeGood() {}
  //Замена товара в корзине
  changeGood() {}
  //Отрисовываем корзину
  renderBasket() {}
}

class ElemBasket {
  //отрисовываем отдельный элемент корзины
  render() {}
}
