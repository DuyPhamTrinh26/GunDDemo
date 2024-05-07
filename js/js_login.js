const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//chuyển qua lại phần đăng nhập / đăng ký khi bấm vào các nút
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//-----------------------------XỬ LÝ ĐĂNG KÝ / ĐĂNG NHẬP----------------------------------------------

// Lấy các phần tử đã đặt id HTML
var registerForm = document.getElementById("register-form");
var loginForm = document.getElementById("login-form");
var registerBtn = document.getElementById("register-btn");
var loginBtn = document.getElementById("login-btn");

//------------------------XỬ LÝ PHẦN ĐĂNG KÝ-----------------------------------

var registerClicked = false; // Biến kiểm tra nút Đăng ký đã được nhấn hay chưa

//addEventListener: gắn kết 1 hàm xử lý sự kiện(event handler) vào 1 phần tử trên trang web
registerBtn.addEventListener("click", function() {
    registerClicked = true; // Đánh dấu rằng nút Đăng ký đã được nhấn

    // Lưu trữ thông tin đăng ký
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);

     // Kiểm tra điền đầy đủ thông tin trong đăng ký
     if (username.trim() === "") {
        alert("Vui lòng nhập tên đăng nhập!");
        return; // Dừng việc xử lý đăng ký nếu trường "username" không được điền và làm lại thao tác
    }

    if (email.trim() === "") {
        alert("Vui lòng nhập địa chỉ email!");
        return; // Dừng việc xử lý đăng ký nếu trường "email" không được điền và làm lại thao tác
    }

    if (password.trim() === "") {
        alert("Vui lòng nhập mật khẩu!");
        return; // Dừng việc xử lý đăng ký nếu trường "password" không được điền và làm lại thao tác
    }

    // Ẩn form đăng ký sau khi đăng ký thành công
    registerForm.style.display = "none";
    // Hiển thị form đăng nhập để bắt đầu đăng nhập
    loginForm.style.display = "block";

     // Chuyển về phần đăng nhập sau khi đăng ký thành công
     container.classList.remove("sign-up-mode");
});

//-----------------------------------XỬ LÝ ĐĂNG NHẬP-----------------------------------------------

//-*LƯU Ý: để thể thực hiện đăng nhập và nhảy đến trang index.html thì cần phải thực hiện bước sign-up trước

//-------------------------------------------------------------------------------------------------

// Gán sự kiện cho nút Đăng nhập
loginBtn.addEventListener("click", function(event) {
    // Kiểm tra xem nút Đăng ký đã được nhấn hay chưa nếu đã nhấn thì phần submit bên đăng nhập mới có thể chuyển trang đến index.html
    if (registerClicked) {
        event.preventDefault(); // Chặn các mặc định của submit chỉ khi nút Đăng ký đã được nhấn
    }

    // Lấy thông tin đăng nhập từ localStorage vừa tạo trước đó
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Thực hiện xử lý đăng nhập
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    // Kiểm tra các trường đăng nhập đã được điền đầy đủ hay không
    if (username.trim() === "") {
        alert("Vui lòng nhập tên đăng nhập!");
        return; // Dừng việc xử lý đăng nhập nếu trường "username" không được điền và làm lại thao tác
    }

    if (password.trim() === "") {
        alert("Vui lòng nhập mật khẩu!");
        return; // Dừng việc xử lý đăng nhập nếu trường "password" không được điền và làm lại thao tác
    }

    // Kiểm tra thông tin đăng nhập
    if (username === storedUsername && password === storedPassword) {
        alert("Đăng nhập thành công!");
        // sau khi đăng nhập thành công và chuyển trang đến index.html
        window.location.href = "../index.html";
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
        // sẽ làm lại thao tác nếu như đăng nhập thất bại
    }
});
