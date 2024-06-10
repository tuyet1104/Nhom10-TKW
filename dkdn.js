document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy dữ liệu từ biểu mẫu
    var formData = new FormData(this);

    // Hiển thị thông báo thành công
    var successMessage = document.getElementById("successMessage");
    successMessage.innerText = "Đăng ký thành công!";

    // Xóa các trường trong biểu mẫu
    this.reset();

    // Tùy chọn: Gửi dữ liệu biểu mẫu đến máy chủ bằng AJAX
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'registration.php', true);
    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     successMessage.innerText = 'Đăng ký thành công!';
    //     registrationForm.reset();
    //   } else {
    //     successMessage.innerText = 'Lỗi: ' + xhr.statusText;
    //   }
    // };
    // xhr.send(formData);
  });

document
  .getElementById("loginLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Chuyển hướng đến trang đăng nhập...");
    // Thêm logic chuyển hướng đến trang đăng nhập ở đây
  });
