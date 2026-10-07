"use strict";
// Get HTML elements
const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");
// Exchange rate
const USD_TO_SOS = 11000;
// Convert currency
button.addEventListener("click", () => {
    const value = Number(amount.value);
    if (value <= 0) {
        result.textContent = "Please enter an amount.";
        return;
    }
    let converted;
    // USD → SOS
    if (from.value === "USD" && to.value === "SOS") {
        converted = value * USD_TO_SOS;
        result.textContent =
            `${value} USD = ${converted.toLocaleString()} SOS`;
    }
    // SOS → USD
    else if (from.value === "SOS" && to.value === "USD") {
        converted = value / USD_TO_SOS;
        result.textContent =
            `${value.toLocaleString()} SOS = ${converted.toFixed(2)} USD`;
    }
    // Same currency
    else {
        result.textContent =
            `${value} ${from.value} = ${value} ${to.value}`;
    }
});
