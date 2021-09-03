const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleBrandsList(data);
    });

function handleBrandsList(data) {
    //   console.log(data);
    const newData = data.map(el => el.brandname)
    console.log(data)
    console.log(newData)
    newData.sort()
    newData.forEach(showBrand);
}

function showBrand(brand) {
    console.log(brand);
    //grab template
    const template = document.querySelector("#brandName").content;
    //clone it
    const copy = template.cloneNode(true);
    copy.querySelector("li").textContent = `${brand}`;
    copy.querySelector("a").setAttribute("href", "product_list.html?brandname=" + brand);
    const parent = document.querySelector("main");
    //append}
    parent.appendChild(copy);
}