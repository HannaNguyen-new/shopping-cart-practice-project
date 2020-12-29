const items = [
    {name:"Milk", cost:5, id:0},
    {name:"Bread", cost:3, id:1},
    {name:"Butter", cost:3, id:2},
    {name:"Apple", cost:1, id:3}
]

const cart = {};
const output = document.createElement("div");
document.body.appendChild(output); 

items.forEach(item => {
    // display items using createElement and appendChild
    let div = document.createElement("div");
    div.innerHTML = `<h3>${item.name}</h3> $ ${item.cost}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.style.textAlign = "center"
    document.body.appendChild(div);

    //whenever the item is clicked, it is added to the cart
    div.addEventListener("click", function(){
        let itemAdded = item.name.toLowerCase();
        // add item to cart
        if(!cart[itemAdded]){
            cart[itemAdded] = {
                name: item.name,
                price: item.cost,
                quantity: 1,
                subtotal: function(){
                    return this.price*this.quantity
                }
            }
        }else{
            cart[itemAdded].quantity++;
        }
        
        relist();
    })

})

    
function relist(){
    output.innerHTML = "";
    console.log(cart)
    let total = 0;

    for(let product in cart){
        let subTotal = cart[product].subtotal();
        // using product only gives access to the name
        // using cart[product] gives access to the object
        output.innerHTML += `${cart[product].name} : $${cart[product].price} *`;
        output.innerHTML += `${cart[product].quantity} = $${subTotal} <br>`;
        total += subTotal;
    }
   output.innerHTML += ` Total = $${total}`
}