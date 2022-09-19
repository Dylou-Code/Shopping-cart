let shop = document.getElementById("shop");

let shopItemsData = [{
    id:"first",
    name:"Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-1.jpg"
},
{
    id:"second",
    name:"Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-2.jpg" 
},
{
    id:"three",
    name:"Shirt",
    price: 300,
    desc: "Merlo ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-3.jpg"
},
{
    id:"four",
    name:"Men Suit",
    price: 75,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/img-4.jpg"
}];

let basket = [{

}];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
        return `<div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h3>${x.name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${x.price} €</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `
    }).join(""));
    
};

generateShop();

//Function
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item:1,
        });
    }
    else {
        search.item += 1;
    }     
    //console.log(basket);
    update(selectedItem.id);
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search.item === 0) return;
    
    else {
        search.item -= 1;
    }
    //console.log(basket);
    update(selectedItem.id);
};


let update = (id) => {
    let search = basket.find((x) => x.id === id);
    //console.log(search.item);
    document.getElementById(id) .innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();