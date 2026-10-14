/// <reference path="../Dashboardscripts/plugins/jQuery/jQuery-2.1.4.min.js" />
/// <reference path="jquery.md5.min.js" />

function EncryptPassword(e, rno) {
   // debugger;
    if (e.keyCode == 13) {
        var pwdval = $('#txtpassword').val();
        if (pwdval != '') {
            var pwd = $.trim(pwdval);
            var enc_pwd = $.md5($.md5(pwd) + rno);
            $('#txtpassword').val(enc_pwd);
        }
        return true;
    }
}

function EncryptPassword1(e, rno) {
    //debugger;
    if (e.keyCode != 13) {
        var pwdval = $('#txtpassword').val();
        if (pwdval != '') {
            var pwd = $.trim(pwdval);
            var enc_pwd = $.md5($.md5(pwd) + rno);
            $('#txtpassword').val(enc_pwd);
        }
        return true;
    }
}