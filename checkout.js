function closeCheckout() {
    const checkoutContainer = document.getElementById('checkout-container');
    checkoutContainer.style.display = 'none';
}

function renderCartSummary() {
    const cartSummary = document.querySelector('.cart-summary');
    cartSummary.innerHTML = `
        Số lượng sản phẩm: ${cart.length}<br>
        Tổng tiền: ${cart.reduce((total, item) => total + item.price, 0)} VND
    `;
}

function placeOrder(event) {
    event.preventDefault();
    const form = document.getElementById('checkout-form');
    const formData = new FormData(form);

    // Here you can send the form data to your server
    console.log('Order placed:', Object.fromEntries(formData));

    // Reset cart and form
    cart = [];
    updateCartCount();
    form.reset();
    closeCheckout();
    alert('Đơn hàng của bạn đã được đặt thành công!');
}


