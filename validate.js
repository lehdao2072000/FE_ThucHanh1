var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var passwordConfirm = document.querySelector('#passwordConfirm');
var formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', function(e) {
    e.preventDefault()
    let checkUser = CheckUser();
    let checkEmail = CheckEmail();
    let checkPass = CheckPass();
    let checkPassConfirm = CheckPassConfirm();

    if (checkUser && checkEmail && checkPass && checkPassConfirm) {
        alert('Chúc mừng bạn đăng ký tài khoản thành công');
    }
});
// hiển thị thông báo lỗi
function showError(key, message) {
    let parent = key.parentElement;
    let formError = parent.querySelector('.form-error');
    parent.classList.add('error');
    formError.innerHTML = message;
}
//bắt lỗi đúng
function showSuccess(key) {
    let parent = key.parentElement;
    let formError = parent.querySelector('.form-error');
    parent.classList.remove('error');
    formError.innerHTML = '';
}

// Disable nút submit nếu có lỗi


// kiểm tra dữ liệu đầu vào user Tên: chữ hoa chữ thường, không có kí tự đặc biệt, có thể tiếng Việt
function CheckUser() {
    const regexUser = /^(?=.*[a-z])(?=.*[A-Z])/;

    let isCheck = true;
    if (username.value == '') {
        showError(username, 'Không được để trống thông tin');
        isCheck = false;
    } else if (!regexUser.test(username.value)) {
        showError(username, 'Định dạng gồm chữ hoa, chữ thường, không có kí tự đặc biệt')
        isCheck = false;
    } else {
        showSuccess(username);
    }
    return isCheck;
}
// kiểm tra email theo chuẩn email
function CheckEmail() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isCheck = true;
    if (email.value == '') {
        showError(email, 'Không được để trống thông tin')
        isCheck = false;

    } else if (!regexEmail.test(email.value)) {
        showError(email, 'Định dạng đúng kiểu email')
        isCheck = false;
    } else {
        showSuccess(email);
    }
    return isCheck;
}
// lỗi 
function CheckMaxMinLenght(key, min, max) {
    if (key.value.lenght < min) {
        showError(key, `Vui lòng nhập tối thiểu ${min} kí tự`);
    }

    if (key.value.lenght > max) {
        showError(key, `Vui lòng nhập không quá ${max} ký tự`);
    }

}
// kiểm tra pass 8-32 kí tự, ít nhất 1 chữ hoa và 1 chữ thường

function CheckPass() {
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z]){8,32}/;
    //const regexPass = /^(?=.*[a-z])(?=.*[A-Z])/;
    let isCheck = true;
    if (password.value == '') {
        showError(password, 'Không được để trống thông tin');
        isCheck = false;
    } else if (!regexPass.test(password.value)) {
        showError(password, '8-32 kí tự, ít nhất 1 chữ hoa và 1 chữ thường');
        isCheck = false;
    } else {

        showSuccess(password);
    }
    return isCheck;
}

function CheckPassConfirm() {
    let isCheck = true;
    if (passwordConfirm.value == '') {
        showError(passwordConfirm, 'Không được để trống thông tin');
        isCheck = false;
    } else if (password.value != passwordConfirm.value) {
        showError(passwordConfirm, 'Mật khẩu không khớp')
        isCheck = false;
    } else {
        showSuccess(passwordConfirm)
    }
    return isCheck;
}