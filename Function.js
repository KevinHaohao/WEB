function checkInput()
{
    var regBox = {
        regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //邮箱
        regName: /^[a-z0-9_-]{3,16}$/, //用户名
        regMobile: /^1(3|4|5|7|8)\d{9}$/, //手机
    }
    var name_ = document.getElementById("name").value;
    var phone_num_ = document.getElementById("phone_number").value;
    var email_ = document.getElementById("email").value;
    var check_phone = regBox.regMobile.test(phone_num_);
    var check_email = regBox.regEmail.test(email_);

    if (name_ == "")
    {
        alert("姓名不能为空！");
    }
    else if (!check_phone && !check_email)
    {
        alert("提交成功！");
    }
    else if (!check_phone)
    {
        alert("电话格式有误，请您重新输入电话号码！");
    }
    else if (!check_email)
    {
        alert("邮箱格式有误，请您重新输入邮箱！");
    }
}

function To_Address_book()
{
    window.location.href="Address_book.html";
}

function To_Add()
{
    window.location.href="Add.html";
}