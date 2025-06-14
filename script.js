let discountvalue=document.getElementById('discountvalue')
function calculateDiscount(){
    let amountInput=document.getElementById('amount');
    let discountInput=document.getElementById('discount');

    let dividedValue=discountInput.value/100;

    discountvalue.textContent="The discount will be " + dividedValue*amountInput.value ;
    amountInput.value=null;
    discountInput.value=null;

}