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
    copy.querySelector("h2").textContent = `${product.productdisplayname}`;
    copy.querySelector(".greyed").textContent = `${product.articletype} | ${product.brandname}`;
    copy.querySelector(".price").textContent = `DKK ${product.price}`;
    copy.querySelector("a").setAttribute("href", "product_view.html?id=" + product.id);
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector("img").alt = product.productdisplayname;
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



{
    /* <article class="productCard">
                    <h2>product name</h2>
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="shirt" />
                    <p class="greyed">sub-category | brand</p>
                    <p class="price"><span>Prev.</span> DKK 5000,-</p>
                    <div class="onSale">
                        <p>Now: DKK 4000,-</p>
                        <p>-34%</p>
                    </div>
                    <button>View</button>
                </article> */
}