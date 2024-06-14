/*slider*/
document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const sliderItems = document.querySelectorAll('.slider-item');
  const totalSlides = sliderItems.length;
  let currentSlide = 0;
  let interval;

  // hamf chuyển tiếp slide tiếp theo
  const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      moveSliderTo(currentSlide);
  };

  // Hàm di chuyển thanh trượt đến 1 slide cụ thể
  const moveSliderTo = (slideIndex) => {
      currentSlide = slideIndex;
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100 / totalSlides}%)`;
  };

  // Hàm bắt đầu khoảng trượt
  const startSlider = () => {
      interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  };

  // Hàm dừng khoảng trượt
  const stopSlider = () => {
      clearInterval(interval);
  };

  // Thêm trình xử lý sự kiệu co chuột nhấp và rời khỏi để tạm dừng, tiếp tục thanh trượt
  sliderWrapper.addEventListener('mouseenter', stopSlider);
  sliderWrapper.addEventListener('mouseleave', startSlider);

  // Xử lý các sự kiện nhấp chuột trên hình ảnh thanh trượt
  const sliderImages = document.querySelectorAll('.slider-item img');
  sliderImages.forEach((image, index) => {
      image.addEventListener('click', (event) => {
          event.preventDefault(); //Ngăn chặn hành vi mặc định khi nhấp vào hình ảnh
          const link = image.closest('.slider-item').querySelector('.slider-link');
          if (link) {
              const slideIndex = Array.from(sliderItems).indexOf(image.closest('.slider-item'));
              moveSliderTo(slideIndex);
              window.location.href = link.href; // Điều hướng đến url của liên kết
          }
      });
  });

  // Khời động thanh trượt
  startSlider();
});
function addToCart() {
  // Lấy phần tử chứa số lượng giỏ hàng
  var cartCountElement = document.querySelector(".cart2");

  // Lấy số lượng hiện tại và tăng lên 1
  var currentCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = currentCount + 1;
}

function toggleNav() {
  document.getElementById("myShoppingCart").style.width = "450px";
}

function closeNav() {
  document.getElementById("myShoppingCart").style.width = "0";
}
