const allBtn= document.getElementsByClassName('add-btn');

for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        const name=event.target.parentNode.childNodes[1].innerText;
        const price=event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category=event.target.parentNode.childNodes[5].childNodes[1].innerText;

        // console.log(name,price,category);



        const selectedContainer=document.getElementById('selected-players-container');
       
       
 event.target.setAttribute("disabled", false);

const firstBudget=getConvertedValue('budget');
const firstCartCount=getConvertedValue('cart');
const firstLeftCount=getConvertedValue('left');

if ( firstBudget-parseInt(price)<0 ||firstCartCount+1>6 || firstLeftCount-1<0 ){
    alert('finished limit');
    return;
}

event.target.parentNode.style.backgroundColor = "gray";
event.target.parentNode.style.color = "white";
// update budget
const budget=getConvertedValue('budget');
document.getElementById('budget').innerText=budget-parseInt(price);

const cartCount=getConvertedValue('cart');
document.getElementById('cart').innerText=cartCount+1;

const leftCount=getConvertedValue('left');
document.getElementById('left').innerText=leftCount-1;


        const div=document.createElement('div');
        div.classList.add('selected-players');

        const p1=document.createElement('p')
        const p2=document.createElement('p')
        const p3=document.createElement('p')

        p1.innerText=name;
        p2.innerText=price;
        p3.innerText=category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
        updatedGrandTotal();


    })
}


function updateTotalCost(value){
    const totalCost= getConvertedValue('total-cost');
    const sum=totalCost+parseInt(value);
    document.getElementById('total-cost').innerText=sum;
}

function updatedGrandTotal(status){
    const totalCost=getConvertedValue('total-cost');
    if (status===undefined){
        document.getElementById('grand-total').innerText=totalCost;
    }
    else{
      const couponCode=  document.getElementById('coupon-code').value;
      if(couponCode==='love you 2'){
        const garandTotal= totalCost- (totalCost*0.2);
        document.getElementById('grand-total').innerText=garandTotal;
      }
      else{
        alert('Enter valid coupon code');
      }

    }
}





function getConvertedValue(id){
   const price= document.getElementById(id).innerText;
   const convertPrice=parseInt(price);
   return convertPrice;
}