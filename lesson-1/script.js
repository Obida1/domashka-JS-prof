const products = [
  {id:1, title: 'Shirt', price: 150 },
  {id:2, title: 'Socks', price: 50 },
  {id:3, title: 'Jacket', price: 350 },
  {id:4, title: 'Shoes', price: 250 },
  ];

const getProductHTMLString = (title, price) => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p>${price} $</p>
            <img src="https://montessoriself.ru/wp-content/uploads/2014/05/o1.jpg" alt="clothes">
            <button class="by-btn">Добавить</button>
            </div>`;
 };
          
const renderProducts = (productList) => {
  const list = productList.map((good) => getProductHTMLString(good.title, good.price)).join('');

document.querySelector('.products').innerHTML = list;
}

renderProducts(products);