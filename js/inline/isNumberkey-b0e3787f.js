
        $(document).ready(function () {
            $(".tab-buttons .btn").click(function () {
                $(".tab-buttons .btn").removeClass("active");
                $(this).addClass("active");

                $(".tab-pane").removeClass("show active");

                let target = $(this).attr("id").replace("-tab", "Form");
                $("#" + target).addClass("show active");
            });

          


            function isNumberkey(evt) {
                //Allow only Numbers
                var input = evt.target.value;
                if (!/^[(\i+)?(\i+)?]*$/.test(input)) {
                    evt.target.value = input.replace(/[^0-9]/, '');
                    return false;
                }
                return true;

            }
        });
    