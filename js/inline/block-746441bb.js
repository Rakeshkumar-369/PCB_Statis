


    // Search Button Logic
    $(document).ready(function () {
        $('#btnSearch').click(function (event) {
            event.preventDefault(); // Prevent the default form submission

            var WaterBody = $('#ddlWaterBody').val();
            var District = $('#ddlDistrict').val();
            var Frequency = $('#ddlFrequency').val();
            var Station = $('#ddlStation').val();

            // Basic validation
            if (WaterBody == "00") {
                $("#ddlWaterBody").focus();
                alert("Please select Water Body");
                return false;
            }
            if (District == "00") {
                $("#ddlDistrict").focus();
                alert("Please select District");
                return false;
            }

            if (Frequency == "00") {
                $("#ddlFrequency").focus();
                alert('Please select Frequency');
                return false;
            }
            if (Station == "00") {
                $("#ddlStation").focus();
                alert('Please select Station Details');
                return false;
            }
            // // Show loader
            // $('#loader').show();
            // // Destroy existing DataTable if initialized
            // if ($.fn.DataTable.isDataTable('#GrdIndustry')) {
            //     $('#GrdIndustry').DataTable().clear().destroy();
            // }

            // // Clear table body
            // $('#GrdIndustry tbody').empty();

            // // Make AJAX call
            // $.ajax({
            //     type: 'GET',
            //     url: 'Microsoft.AspNetCore.Mvc.Routing.EndpointRoutingUrlHelper/* .Action("Get_IndustryAdd_ReportDetails", "HCF")', */
            //     data: {
            //         fromDate: fromDate,
            //         toDate: toDate,
            //         district: district
            //     },
            //     success: function (response) {
            //         console.log(response);
            //         if (response.success) {
            //             console.log(response.getdata);
            //             $('#lblstartdate').text(fromDate);
            //             $('#lblenddate').text(toDate);
            //             $('#loader').hide();
            //             $('#FromDate').val('');
            //             $('#Todate').val('');
            //             $('#UserID').val('00');
            //             $('#GrdIndustry').show();
            //             if (response.getdata && response.getdata.length > 0) {
            //                 // Populate the table dynamically
            //                 $.each(response.getdata, function (index, IndustryAdd_ReportDetails) {
            //                     var row = `<tr>
            //                         <td>${index + 1}</td>
            //                         <td>${IndustryAdd_ReportDetails.name_of_Industry}</td>
            //                         <td>${IndustryAdd_ReportDetails.district}</td>
            //                         <td>${IndustryAdd_ReportDetails.address}</td>
            //                         <td>${IndustryAdd_ReportDetails.pinCode}</td>
            //                         <td>${IndustryAdd_ReportDetails.categoryName}</td>
            //                         <td>${IndustryAdd_ReportDetails.line_of_Activity}</td>
            //                         <td>${IndustryAdd_ReportDetails.plantHead}</td>
            //                         <td>${IndustryAdd_ReportDetails.mobileNumber}</td>
            //                         <td>${IndustryAdd_ReportDetails.email}</td>
            //                         <td>${IndustryAdd_ReportDetails.createdDate}</td>
            //                         <td>${IndustryAdd_ReportDetails.createdBy}</td>
            //                     </tr>`;
            //                     $('#GrdIndustry tbody').append(row); // Append new rows
            //                 });
            //                 $('#GrdIndustry').DataTable({
            //                     emptyTable: "No data available",
            //                     LengthChange: true,
            //                     lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            //                     search: true,
            //                     sort: true,
            //                     paginate: true,
            //                     autoWidth: true,
            //                     language: {
            //                         search: "Search:",
            //                         searchPlaceholder: "Search Records",
            //                         emptyTable: "No Records Found",
            //                     },
            //                     responsive: true,
            //                     dom: 'Blfrtip',
            //                     buttons: [{
            //                         extend: 'excelHtml5',
            //                         autoFilter: true,
            //                         sheetName: 'IndustryReport',
            //                         title: "Industry Report",
            //                         text: '<span class="glyphicon glyphicon-list-alt" style="color:white; font-size:14px;Cursor:Pointer">Excel</span></i>'
            //                     },
            //                     {
            //                         text: '<span class="glyphicon glyphicon-list-alt" style="color:black; font-size:14px;Cursor:Pointer">Screenshot</span></i>',
            //                         action: function () {
            //                             var element = document.getElementById("GrdIndustry");
            //                             html2canvas(element).then(function (canvas) {
            //                                 var imageData = canvas.toDataURL("image/png", 1.0);
            //                                 var downloadLink = document.createElement("a");
            //                                 downloadLink.href = imageData;
            //                                 downloadLink.download = "IndustryReport.png";
            //                                 downloadLink.click();
            //                             });
            //                         }
            //                     }]
            //                 });
            //             } else {
            //                 alert("No records found.");
            //             }
            //         }
            //         else {
            //             alert(response.message);
            //         }
            //     },
            //     error: function (xhr, status, error) {
            //         $('#loader').hide();
            //         alert('An error occurred: ' + error);
            //     }
            // });

        });
    });
