
    $(document).on('click', '.Get', function () {
        debugger;
        var ele = $(this).data('name');
        var year = $(this).data('year');

        $.ajax({
            type: "POST",
            url: "/PCBLive/PCB/GetCFEData",
            data: { Zone: ele, Year: year },
            success: function (response) {
                var res = response;
                debugger;
                if (year == "2020") {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2020Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFE2020Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2020Content').css('display', 'block');
                }
                else if (year == "2021") {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2021Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFE2021Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2021Content').css('display', 'block');
                }
                else if (year == "2022") {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2022Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFE2022Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2022Content').css('display', 'block');
                }
                else if (year == "2023") {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2023Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFE2023Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2023Content').css('display', 'block');
                }
                else if (year == "2024") {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2024Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFE2024Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2024Content').css('display', 'block');
                }
                 else if (year == "2025") {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2025Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFE2025Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFE2025Content').css('display', 'block');
                }
                else {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFEContent').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFEContent').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFEContent').css('display', 'block');
                }

            },
            failure: function (response) {
                alert(response);
            }
        });
    });
    $(document).on('click', '.CTOGet', function () {
        debugger;
        var ele = $(this).data('name');
        var year = $(this).data('year');
        //alert(ele);
        $.ajax({
            type: "POST",
            url: "/PCBLive/PCB/GetCTOData",
            data: { Zone: ele, Year: year },
            success: function (response) {
                var res = response;
                debugger;
                if (year == '2020') {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2020Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFO2020Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2020Content').css('display', 'block');
                }
                else if (year == '2021') {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2021Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFO2021Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2021Content').css('display', 'block');
                }
                else if (year == '2022') {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2022Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFO2022Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2022Content').css('display', 'block');
                }
                else if (year == '2023') {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2023Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFO2023Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2023Content').css('display', 'block');
                }
                else if (year == '2024') {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2024Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFO2024Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2024Content').css('display', 'block');
                }
                 else if (year == '2025') {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2025Content').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFO2025Content').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFO2025Content').css('display', 'block');
                }
                else {
                    //alert("Via Ajax Zone: " + res);
                    $('#' + ele.replace("-", "") + '' + 'CFOContent').html('');
                    $('#' + ele.replace("-", "") + '' + 'CFOContent').html(res);
                    $('#' + ele.replace("-", "") + '' + 'CFOContent').css('display', 'block');
                }
                //                    //alert("Via Ajax Zone: " + res);
                //                    $('#' + ele.replace("-", "") + '' + 'CFOContent').html('');
                //                    $('#' + ele.replace("-", "") + '' + 'CFOContent').html(res);
                //                    $('#' + ele.replace("-", "") + '' + 'CFOContent').css('display', 'block');
            },
            failure: function (response) {
                alert(response);
            }
        });
    });
    $(document).on('click', '.content', function () {

        var date = $(this).data('date');
        var zone = $(this).data('zone');
        var Cat = $(this).attr('href').substring(1, 4);
        //alert('Meeting ID: ' + ele);

        var id = $(this).attr('href');
        if (!$(id).hasClass('collapsing')) {
            $(id).addClass('collapse');
            $(id).removeClass('coll');
        } else {

            $.ajax({
                url: "/PCBLive/PCB/MeetingDetails_GET_OCM",// "/APPCB/PCB/MeetingDetails_GET_OCM",
                type: "POST",
                /*contentType: "application/json; charset=utf-8",*/
                /* dataType: "json",*/
                /*data: "{'date': '" + date + "','zone': '" + zone + "','category': '" + Cat + "'}",*/
                data: { date: date, zone: zone, category: Cat },
                success: function (response) {
                    var res = response;
                    debugger;
                    $(document).find('.coll').removeClass('coll').addClass('collapse');
                    //alert("Via Ajax Zone: " + res);
                    $('#' + zone.split('-')[1] + date.replace('/', '').replace('/', '') + 'content').html('');
                    $('#' + zone.split('-')[1] + date.replace('/', '').replace('/', '') + 'content').html(res);
                    $('#' + zone.split('-')[1] + date.replace('/', '').replace('/', '') + 'content').parent().removeClass('collapse').addClass('coll');
                },
                failure: function (response) {
                    alert(response.d);
                }
            });
        }
    });
