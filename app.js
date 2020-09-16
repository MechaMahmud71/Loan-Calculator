const loanAmount = document.querySelector('#money');
const annualInterest = document.querySelector('#interest');
const time = document.querySelector('#time');
const btn = document.querySelector('.btn');
const form = document.querySelector('form');
const monthlyPayment = document.querySelector('.output_payment');
const totalPayment = document.querySelector('.output_payment_total');
const totalInterest = document.querySelector('.output_interest');
const img = document.querySelector('img');


form.addEventListener('submit', function (e) {
    const lower = document.querySelector('.lower');
    lower.style.display = 'none';
    img.style.display = 'block';
    setTimeout(calculate, 2000)
    e.preventDefault();
});


function calculate() {

    const principal = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(annualInterest.value) / 100 / 12;
    const calculatedPayments = parseFloat(time.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        img.style.display = 'none';

        setTimeout(showLower, 500);
    } else {
        img.style.display = 'block';
        setTimeout(showError, 2000);
        //showError();
    }


}

//..................showError function........................
function showError() {
    const error = document.querySelector('.error');
    const uppur = document.querySelector('.uppur');
    const lower = document.querySelector('.lower');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'errormsg';
    errorDiv.textContent = 'Please check your numbers'
    errorDiv.style.background = 'pink';
    errorDiv.style.padding = '15px 0px';
    errorDiv.style.color = 'red';
    // errorDiv.style.display = 'block';
    errorDiv.style.textAlign = 'center';
    error.style.padding = '10px';
    errorDiv.style.borderRadius = '5px';

    uppur.style.paddingTop = '5px';
    lower.style.margin = '10px 0px 0px 0px';
    img.style.display = 'none';
    error.appendChild(errorDiv);

    setTimeout(clearError, 3000);
}

function clearError() {

    document.querySelector('.errormsg').remove();
}

function showLower() {
    const lower = document.querySelector('.lower');
    lower.style.display = 'block';
    img.style.display = 'none';
}