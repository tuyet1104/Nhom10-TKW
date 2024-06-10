// Khởi tạo một mảng để lưu trữ các sản phẩm trong giỏ hàng
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    cart.push(product); // Thêm sản phẩm vào mảng giỏ hàng
    updateCartCount(); // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
function updateCartCount() {
    const cartCount = document.querySelector('.carta');
    cartCount.textContent = cart.length; // Hiển thị số lượng sản phẩm trong giỏ hàng
}

