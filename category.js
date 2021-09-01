const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleBrandsList(data);
    });

function handleBrandsList(data) {
    //   console.log(data);
    data.forEach(showBrand);
}

function showBrand(product) {
    console.log(product);
    //grab template
    const template = document.querySelector("#brandName").content;
    //clone it
    const copy = template.cloneNode(true);
    copy.querySelector("li").textContent = `${product.brandname}`;
    copy.querySelector("a").setAttribute("href", "product_list.html?id=" + product.id);
    const parent = document.querySelector("main");
    //append}
    parent.appendChild(copy);
}