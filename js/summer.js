let total=0;
let grandTotal=0;
function commonShareHandle(event)
{
    
    const nameString=event.childNodes[5].innerText;
    console.log(nameString);
    const liTag=document.getElementById('creat-element')
    const count=liTag.childElementCount;
    const p=document.createElement('p')
    
    
    liTag.appendChild(p).innerText=` ${count+1}.${nameString}`;
    
    
    const priceString=event.childNodes[7].innerText.split(' ')[0];
    const price=parseFloat(priceString);
    total=total+price;
   
  



    const TotalMoney=document.getElementById('total-money')
    TotalMoney.innerText=total +'tk';
    grandTotal=total+'tk';
    const averagetotal=document.getElementById('grand-total');
    averagetotal.innerText=grandTotal;
    
    const purchaseButton = document.getElementById('purchase-button');

    { 
        
        if (total>0) {
        
               purchaseButton.disabled = false; // Enable the button
               
               document.getElementById('go-button').addEventListener('click',function(){
                location.href="http://127.0.0.1:5500/index.html";
                
               });
               
               
                
                
                
             } 
             
    }

}





function buttonShare(){
    const applyButton =document.getElementById('apply-button');
    if(total>=200)
    {
        applyButton.disabled=false;
        const inputField=document.getElementById('input-field');
    const input=inputField.value;
        if(input==="SELL500")
        {
           
           const discountString=document.getElementById('discount-money');

           const discountTotal=total*(20/100);
           const discount=discountTotal.toFixed(2);
           discountString.innerText=discount+ 'tk';
           grandTotal=total-discount;
           const averagetotal=document.getElementById('grand-total');
           averagetotal.innerText=grandTotal+'TK';

        }
    }
    else{
        applyButton.disabled=true;
        
    }
    
}
9