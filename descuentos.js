function findValueDiscount(price, discount) {
    const amountDiscounted = (discount / 100) * price;
    const finalPrice = price - amountDiscounted;
    return finalPrice;
    
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickFindValueDiscount() {
    const inputPrice = document.getElementById("PriceInput");
    const inputCoupon = document.getElementById("CouponInput");

    const price = inputPrice.value;
    const couponValue = inputCoupon.value;

    let discountPrice;
    let discount;
    const result = document.getElementById("Result");

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        discount = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        discount = 30;
     } else if (couponValue === "es_un_secreto") {
        discount = 25;
     }
    
     discountPrice = findValueDiscount(price, discount)
     result.innerHTML = "$" + discountPrice
}


// function onClickFindValueDiscount() {
//     const inputPrice = document.getElementById("PriceInput");
//     const inputDiscount = document.getElementById("DiscountInput");

//     const price = inputPrice.value;
//     const discount = inputDiscount.value;

//     const value = findValueDiscount(price, discount);

//     const result = document.getElementById("Result");
//     result.innerText = "$" + value;
// }
