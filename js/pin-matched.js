function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pinString
    } else {
        return getPin();
    }

};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const num = event.target.innerText;
    const calcInput = document.getElementById('type-num');
    if (isNaN(num)) {
        if (num == 'C') {
            calcInput.value = '';
        }
    } else {
        const prevCalc = calcInput.value;
        calcInput.value = prevCalc + num;
    }


});

function verifyPin() {
    const displayPin = document.getElementById('display-pin').value;
    const typeNum = document.getElementById('type-num').value;
    const failNotification = document.getElementById('notify-fail');
    const notifySuccess = document.getElementById('notify-success');

    if (displayPin == typeNum) {
        notifySuccess.style.display = 'block';
        failNotification.style.display = 'none'
    } else {
        notifySuccess.style.display = 'none';
        failNotification.style.display = "block"
    }
}