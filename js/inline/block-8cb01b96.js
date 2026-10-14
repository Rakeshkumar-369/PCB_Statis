
    jQuery(document).on('click', '.Get', function () {
        debugger;
        var ele = $(this).data('name');
        var year = $(this).data('year');
        // alert(ele);
        $.ajax(
            {
                url: "/PCBLive/PCB/GetTFCData",
                type: "POST",

                //contentType: "application/json; charset=utf-8",
                //dataType: "json",
                /* data: "{'Zone': '" + ele + "','Year': '" + year + "'}",*/
                data: { Zone: ele, Year: year },
                success: function (response) {
                    var res = response;
                    debugger;

                    if (year == "2020" || year == "2021" || year == "2022" || year == "2023" || year == "2024") {

                        //    alert('#' + ele.replace("-", year) + '' + 'Content');

                        $('#' + ele.replace("-", year) + '' + 'Content').html('');
                        $('#' + ele.replace("-", year) + '' + 'Content').html(res);
                        $('#' + ele.replace("-", year) + '' + 'Content').css('display', 'block');
                    }
                    else {
                        //alert("Via Ajax Zone: " + res);
                        $('#' + ele.replace("-", "") + '' + 'Content').html('');
                        $('#' + ele.replace("-", "") + '' + 'Content').html(res);
                        $('#' + ele.replace("-", "") + '' + 'Content').css('display', 'block');
                    }
                },
                failure: function (response) {
                    alert(response.d);
                }
            }
        );
    });


    $(document).on('click', '.content', function () {
        debugger;
        var date = $(this).data('date');
        var zone = $(this).data('zone');
        var Cat = $(this).attr('href').substring(1, 4);
        //alert('Meeting ID: ' + ele);

        var id = $(this).attr('href');
        if (!$(id).hasClass('collapse')) {
            $(id).addClass('collapse');
            $(id).removeClass('coll');
        }
        else {
            $.ajax({
                url: "/PCBLive/PCB/MeetingDetails_GET",

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



