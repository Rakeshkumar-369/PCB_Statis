
    $(document).ready(function () {
        $('#ddlDistricts').change(function () {
            var districtid = $(this).val();
            if (districtid) {
                $.ajax({
                    url: /*'@Url.Action("GetStation","Divisions")'*/  "/APPCBV2/Divisions/GetStation",
                    type: "GET",
                    data: { districtid: districtid },
                    success: function (data) {
                        console.log(data);
                        debugger;
                        $("#ddlStation").empty();
                        $("#ddlStation").append($("<option></option>").val(0).text("Select"));
                        $.each(data, function (key, value) {
                            $("#ddlStation").append($("<option></option>").val(value.stationID).text(value.station));
                        });
                    }
                });
            }
            else {
                $("#ddlStation").empty();
                $("#ddlStation").append($("<option></option>").val(0).text("Select"));
            }
        });

    });



    $(document).ready(function () {
        $('#ddlStation').change(function () {
            var districtid = $('#ddlDistricts').val();
            var stationid = $(this).val();
            if (districtid, stationid) {
                $.ajax({
                    url: "/APPCBV2/Divisions/Reports_Get",
                    type: "GET",
                    data: { districtid: districtid, stationid: stationid },
                    success: function (data) {
                        console.log(data);
                        debugger;
                        $('#YearlyHeading').html($('#ddlStation option:selected').text());
                        $('#MonthlyHeading').html($('#ddlStation option:selected').text());
                        $("#YearlyReport").html(data.yearlyReports);
                        $("#MonthlyReport").html(data.monthlyReport);
                    }
                });
            }

        });

    });

