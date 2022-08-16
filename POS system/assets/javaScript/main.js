const orderItemArray = [];
const orderPriceArray = [];
const orderArray = [];

function cart(itemname, itemprice, itemimg){
orderItemArray.push(itemname);
orderPriceArray.push(itemprice);
orderArray.push(itemname, itemprice, itemimg);

let orderlist = document.getElementById('orderlist');

// Create the li tag
const orderitem = document.createElement('li');
orderitem.className = 'd-flex justify-content-between align-items-center py-2';
//Create a span for red color
const orderitempricespan = document.createElement('span');
// create a text node withe itemname and itemprice
const orderitemname = document.createTextNode(itemname);
const orderitemprice = document.createTextNode(' '+ itemprice + ' TL');

// Adjust text color and add price into span
orderitempricespan.className = 'text-danger';

orderitempricespan.appendChild(orderitemprice);



 //Image
 const orderitemimg = document.createElement('img');

//Img src
orderitemimg.src = itemimg;
orderitemimg.className = 'w-25 rounded border border-dark';

//Create a span 
const orderitemleftspan = document.createElement('span');
// combine
//appendchild to li
orderitemleftspan.appendChild(orderitemimg);
// Add itemname and itemprice to li
orderitemleftspan.appendChild(orderitemname)
//end of combine
orderitem.appendChild(orderitemleftspan)
// Add span to li
orderitem.appendChild(orderitempricespan);

// Append the li tag to parent id=ORDERLIST
orderlist.appendChild(orderitem);


};

function totalitems(){
document.getElementById('totalitems').innerText = orderItemArray.length;

}

function costitems(){
if(orderPriceArray.length === 0){
  document.getElementById('totalcost').innerText = 0;
}else{
document.getElementById('totalcost').innerText = orderPriceArray.reduce(sumarray).toFixed(2);

function sumarray(total, num){
  return total + num;
};
}
orderPriceArray.reduce(itemprice);
};

function clearCart(){
let orderlist = document.getElementById('orderlist');
orderlist.innerHTML = '';
orderItemArray.length = 0;
orderPriceArray.length = 0;
orderArray.length = 0;

totalitems();
costitems();
};

