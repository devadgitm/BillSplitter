const billSpliterForm = document.getElementById('bill-spliter-form');

billSpliterForm.addEventListener('submit', billSpliterHandler);

function billSpliterHandler(event){
    event.preventDefault();
    const inputs = getInputs();
    showCalculatedOutput(inputs);
}

// get all the inputs for the bill divider
function getInputs(){
    let subtotal = document.getElementById('subtotal').value;
    let taxPercent = document.getElementById('tax').value;
    let noOfPerson = document.getElementById('no-of-person').value;
    return {subtotal, taxPercent, noOfPerson};
}

//calculate the bill divider info
function showCalculatedOutput(input){
    billSpliterForm.reset();

    let totalTax = (parseFloat(input.subtotal) * parseFloat(input.taxPercent)) / 100;
    let totalAmount = parseFloat(input.subtotal) + totalTax;
    let taxPerPerson = totalTax / parseFloat(input.noOfPerson);
    let billPerPerson = totalAmount / parseFloat(input.noOfPerson);
    // console.log(totalTip, totalAmount, tipPerPerson, billPerPerson);

    document.getElementById('total-bill').innerHTML = `$ ${totalAmount.toFixed(2)}`;
    document.getElementById('bill-per-person').innerHTML = `$ ${billPerPerson.toFixed(2)}`;
    document.getElementById('total-tax').innerHTML = `$ ${totalTax.toFixed(2)}`;
    document.getElementById('tax-per-person').innerHTML = `$ ${taxPerPerson.toFixed(2)}`;
}