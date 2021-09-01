const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

//fetch data
fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

// populate page
function showProduct(product) {
    console.log(product);
    document.querySelector("h1.product_name").textContent =
        product.productdisplayname;
    document.querySelector("p.product_headline").textContent = product.styledesc;
    document.querySelector("p.product_description").innerHTML =
        product.description;
    document.querySelector("img.product_image").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.product_image").alt = product.productdisplayname;
}