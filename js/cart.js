var NoOfItems = document.getElementsByClassName("quantity");
var addBtn = document.getElementsByClassName("addbtn");
var subBtn = document.getElementsByClassName("subbtn");
var itemPrice = document.getElementsByClassName('itemPrice');
var removebtn = document.getElementsByClassName('removebtn');
var itemDiv = document.getElementsByClassName('item');
var itemsincart = document.getElementById("itemsincart");
var emptyCart = document.getElementById("emptyCart");



for(let i=0;i<addBtn.length;i++){
    addBtn[i].addEventListener('click',()=>{
        NoOfItems[i].value++;
        
    })

    subBtn[i].addEventListener('click',()=>{
        if(NoOfItems[i].value == 1)
        subBtn.disabled = true;
        else{subBtn.disabled = false;
            NoOfItems[i].value--;
        }
    })

    removebtn[i].addEventListener('click',(x)=>{
        itemDiv[i].style.display='none';
    })
}


