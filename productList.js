const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleProductList(data);
    });

function handleProductList(data) {
    //   console.log(data);
    data.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    //grab template
    const template = document.querySelector("#productCard").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    //soldOut or discount
    if (product.soldout) {
        copy.querySelector("article").classList.add("soldOut")
    }
    if (product.discount) {
        copy.querySelector("article").classList.add("onSale")
    }
    //grab parent
    const parent = document.querySelector("main");
    //append}
    parent.appendChild(copy);
}



/* <template id="productCardTemplate"><a href="product_page.html?id=">
        <article>
          <h1>product name</h1>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="shirt"/>
          <p>
            description
          </p>
          <h2><span>price</span>dkk</h2>
          <button>View</button>
        </article>
      </a></template> */