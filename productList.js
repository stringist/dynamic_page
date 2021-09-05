const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
const url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brandname;

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
        const price = `${product.price}`;
        const discount = `${product.discount}`;
        const percentage = discount / 100;
        const newPrice = price - (price * percentage)
        copy.querySelector("article div").classList.add("onSale");
        copy.querySelector(".onSale :first-child").textContent = `DKK
        ${Math.floor(newPrice)}`;
        copy.querySelector(".onSale :last-child").textContent = `${Math.floor(percentage * 100)}%`;

    }
    const parent = document.querySelector("main");
    //append}
    parent.appendChild(copy);
    document.querySelector("h1").textContent = `Products by ${product.brandname}`;
}