
/*chạy ảnh*/
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const totalSlides = sliderItems.length;
    let currentSlide = 0;

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100 / totalSlides}%)`;
    };

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
//nhảy vào giỏ hàng
function addToCart() {
    // Lấy phần tử chứa số lượng giỏ hàng
    var cartCountElement = document.querySelector('.cart2');
    
    // Lấy số lượng hiện tại và tăng lên 1
    var currentCount = parseInt(cartCountElement.textContent);
    cartCountElement.textContent = currentCount + 1;
}