
     function createCaptcha() {
        document.getElementById('captcha').innerHTML = "";
        var canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 100;
        canv.height = 50;
        var ctx = canv.getContext("2d");
        ctx.font = "25px Georgia";
        var ccode = 'JylCFL';
        ctx.strokeText(ccode, 0, 30);
        document.getElementById("captcha").appendChild(canv);
        return false;
        console.log(ccode, "ccode")
        }
        window.addEventListener('load', function () { if (typeof createCaptcha === 'function') { createCaptcha(); } });
        
        $(document).ready(function () {
            $('#btnrefresh').click(function (event) {
                // Prevent the default form submission behavior
                event.preventDefault();
               refreshcaptcha();
            });
        });
        function refreshcaptcha() {
            $.ajax({
                type: "GET",
                //url: "/PCbADMIN/Admin/CaptchaRefresh",
                url: "/PCBLive/ForIndustry/CaptchaRefresh",

                success: function (data) {
                    debugger;
                    if (data.responsecode === "1") {
                        document.getElementById('captcha').innerHTML = "";
                        var canv = document.createElement("canvas");
                        canv.id = "captcha";
                        canv.width = 100;
                        canv.height = 50;
                        var ctx = canv.getContext("2d");
                        ctx.font = "25px Georgia";
                        var ccode = data.captchaCode;
                        ctx.strokeText(ccode, 0, 30);
                        document.getElementById("captcha").appendChild(canv);
                        // return false;
                    }
                },
                error: function (xhr, textstatus, errorThrow) {
                    debugger;
                    console.log('Error:', errorThrow);
                }
            });
        }
    