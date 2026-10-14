
        $(document).ready(function () {
       
            //cte district selected index
            // $('#ddlCTEDistrict').change(function () {
            //     $.ajax({
            //         url: "/PCBLive/ForIndustry/GetIndustryByCategoryAndIDistrict_V2",
            //         type: "POST",
            //         data: { ComplianceType:$('#ddlComplianceType').val(), DistrictID: $('#ddlCTEDistrict').val(),CategoryID:'' },
            //         success: function (response) {
            //             var res = response;
            //             console.log(response);

            //             $('#ddlCTEIndustryName').html(res);
            //             $('#ddlCTEIndustryName').select2();
            //         },
            //         failure: function (response) {
            //             alert(response.d);
            //         }
            //     });
            // });

            $('#ddlCTEDistrict').change(function () {
               // $('#ddlCTELineOfActivity').val("0").change();
               // $('#ddlCTEIndustryName').val("0").change();
                $('#ddlCTEcategoryType').val('00');
                $('#txtCTEOrderNumber').val('');
                $('#txtCTEOrderDate').val('');
                $('#ddlCTEOrderIssuedby').val('00');
                $('#txtCTEemail').val('');
                $('#txtCTEPhoneNumber').val('');
                $('#txtCTEIndustryAddress').val('');
                $('#ddlCTEStatusCompliance').val('00');
                $('#ComplianceCTEReportUpload').val('');
                $('#txtcaptcha').val('');
                $("#CTEch").prop("checked", false);
            });
            $('#ddlCTODistrict').change(function () {
               // $('#ddlCTOLineofAcitvity').val("0").change();
                //$('#ddlCTOIndustryName').val("0").change();
                $('#ddlCTOcategoryType').val('00');
                $('#txtCTOOrderNumber').val('');
                $('#txtCTOOrderDate').val('');
                $('#ddlCTOOrderIssuedby').val('');
                $('#txtCTOemail').val('');
                $('#txtCTOPhoneNumber').val('');
                $('#txtCTOIndustryAddress').val('');
                $('#ddlCTOStatusCompliance').val('');
                $('#ComplianceCTOReportUpload').val('');
                $('#txtcaptcha').val('');
                $("#CTOch").prop("checked", false);
            });
            $('#ddlDIRDistrict').change(function () {
                $('#ddlDIRcategoryType').val('00');
                //$('#ddlDIRLineOFAcivity').val('0').change();
                // $('#ddlDIRLineOFAcivity').html('');
                //$('#ddlDIRIndustryName').val('0').change();
                $('#txtDIROrderNumber').val('');
                $('#txtDIROrderDate').val('');
                $('#ddlDIROrderIssuedby').val('00');
                $('#txtDIRemail').val('');
                $('#txtDIRPhoneNumber').val('');
                $('#txtDIRIndustryAddress').val('');
                $('#ddlDIRStatusCompliance').val('00');
                $('#ComplianceDIRReportUpload').val('');
                $('#txtcaptcha').val('');
                $("#DIRch").prop("checked", false);
            });
            
            $('#ddlCTEcategoryType').change(function () {
                $.ajax({
                    url: "/PCBLive/ForIndustry/GetLineOFActivtiy_V2",
                    type: "POST",
                    data: {  CategoryID: $('#ddlCTEcategoryType').val() },
                    success: function (response) {
                        var res = response;
                        console.log(response);
                      
                        $('#ddlCTELineOfActivity').html(res);
                         $('#ddlCTELineOfActivity').select2();
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });
            });

            // $('#ddlCTOcategoryType').change(function () {
            //     $.ajax({
            //         url: "/PCBLive/ForIndustry/GetIndustryandLOAByCategoryAndIDistrict_V2",
            //         type: "POST",
            //         data: {
            //             ComplianceType: $('#ddlComplianceType').val(),
            //             DistrictID: $('#ddlCTODistrict').val(),
            //             CategoryID: $('#ddlCTOcategoryType').val()
            //         },
            //         success: function (response) {
            //             if (response.error) {
            //                 alert(response.error);
            //                 return;
            //             }
            //             console.log(response);
            //             // Populate Industry Dropdown
            //             $('#ddlCTOIndustryName').html('<option selected="selected" value="0">Select</option>');
            //             $.each(response.industries, function (index, item) {
            //                 $('#ddlCTOIndustryName').append($('<option>', {
            //                     value: item.industry_ID,
            //                     text: item.industry_Name
            //                 }));
            //             });
            //             $('#ddlCTOIndustryName').select2();

            //             // Populate Line of Activity Dropdown
            //             $('#ddlCTOLineofAcitvity').html('<option selected="selected" value="0">Select</option>');
            //             $.each(response.lineOfActivities, function (index, item) {
            //                 $('#ddlCTOLineofAcitvity').append($('<option>', {
            //                     value: item.lineofActivityID,
            //                     text: item.lineofActivity
            //                 }));
            //             });
            //             $('#ddlCTOLineofAcitvity').select2();
            //         },
            //         error: function (xhr, status, error) {
            //             alert("Error: " + error);
            //         }
            //     });
            // });
            $('#ddlCTOcategoryType').change(function () {
                $.ajax({
                    url: "/PCBLive/ForIndustry/GetLineOFActivtiy_V2",
                    type: "POST",
                    data: { CategoryID: $('#ddlCTOcategoryType').val() },
                    success: function (response) {
                        var res = response;
                        console.log(response);

                        $('#ddlCTOLineofAcitvity').html(res);
                        $('#ddlCTOLineofAcitvity').select2();
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });
            });
            $('#ddlDIRcategoryType').change(function () {
                $.ajax({
                    url: "/PCBLive/ForIndustry/GetLineOFActivtiy_V2",
                    type: "POST",
                    data: { CategoryID: $('#ddlDIRcategoryType').val()},
                    success: function (response) {
                        var res = response;
                        console.log(response);
                       
                        $('#ddlDIRLineOFAcivity').html(res);
                        $('#ddlDIRLineOFAcivity').select2();
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });
            });


            $('#ddlCTELineOfActivity').change(function () {
                // GetIndustry_V2
                $.ajax({
                    url: "/PCBLive/ForIndustry/GetIndustryByCategoryAndIDistrict_V2",
                    
                    type: "POST",
                   
                    data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlCTEDistrict').val(), CategoryID: $('#ddlCTEcategoryType').val(), LOA: $('#ddlCTELineOfActivity').val() },
                    success: function (response) {
                        var res = response;
                        console.log(response);
     
                        $('#ddlCTEIndustryName').html(res);
                        $('#ddlCTEIndustryName').select2();
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });

            });

            $('#ddlCTOLineofAcitvity').change(function () {

               
               
                // GetIndustry_V2
                $.ajax({
                    url: "/PCBLive/ForIndustry/GetIndustryByCategoryAndIDistrict_V2",
                   
                    type: "POST",

                    data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlCTODistrict').val(), CategoryID: $('#ddlCTOcategoryType').val(), LOA: $('#ddlCTOLineofAcitvity').val() },

                    success: function (response) {
                        var res = response;

                        console.log(response);
                        
                        $('#ddlCTOIndustryName').html(res);
                        $('#ddlCTOIndustryName').select2();
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });

            });

            $('#ddlDIRLineOFAcivity').change(function () {


                $.ajax({
                    url: "/PCBLive/ForIndustry/GetIndustry_V2",

                    type: "POST",
                  
                    data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlDIRDistrict').val(), CategoryID: $('#ddlDIRcategoryType').val(), LOA: $('#ddlDIRLineOFAcivity').val() },

                    success: function (response) {
                        var res = response;

                        console.log(response);

                        $('#ddlDIRIndustryName').html(res);
                        $('#ddlDIRIndustryName').select2();
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });

            });

            // $('#ddlCTEIndustryName').change(function () {
              

            //     $.ajax({
            //         url: "/PCBLive/ForIndustry/GetIndustryAdddressbyIndustry_V2",
            //         type: "POST",
            //       //  data: { DistrictID: $('#ddlCTEDistrict').val(), LineofActivity: $('#txtlineof').val(), IndustryID: $('#ddlCTEIndustryName').val() },
            //         data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlCTEDistrict').val(), CategoryID: $('#ddlCTEcategoryType').val() ,IndustryID:$('#ddlCTEIndustryName').val()},

            //         success: function (response) {
            //             var res = response;
            //              console.log(response);
                         
            //             $('#txtCTEIndustryAddress').val(res);
            //         },
            //         failure: function (response) {
            //             alert(response.d);
            //         }
            //     });


            // });
            $('#ddlCTEIndustryName').change(function () {
                
                // GetIndustryAddress_V2
                $.ajax({
                    url: "/PCBLive/ForIndustry/GetIndustryAdddressbyIndustry_V2",
                    type: "POST",
                    // data: { DistrictID: $('#ddlDIRDistrict').val(), LineofActivity: $('#ddlDIRLineOfActivity').val(), IndustryID: $('#ddlDIRIndustryName').val() },
                    data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlCTEDistrict').val(), CategoryID: $('#ddlCTEcategoryType').val(), LOA: $('#ddlCTELineOfActivity').val(), IndustryID: $('#ddlCTEIndustryName').val() },

                    success: function (response) {
                        var res = response;
                        console.log(response);
                        $('#txtCTEIndustryAddress').val(res);
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });


            });
            $('#ddlDIRIndustryName').change(function () {
               

                $.ajax({
                    url: "/PCBLive/ForIndustry/GetIndustryAddress_V2",
                    type: "POST",
                   // data: { DistrictID: $('#ddlDIRDistrict').val(), LineofActivity: $('#ddlDIRLineOfActivity').val(), IndustryID: $('#ddlDIRIndustryName').val() },
                    data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlDIRDistrict').val(), CategoryID: $('#ddlDIRcategoryType').val(), LOA: $('#ddlDIRLineOFAcivity').val(), IndustryID: $('#ddlDIRIndustryName').val() },

                    success: function (response) {
                        var res = response;
                        console.log(response);
                        $('#txtDIRIndustryAddress').val(res);
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });


            });


            $('#ddlCTOIndustryName').change(function () {


                $.ajax({
                    url: "/PCBLive/ForIndustry/GetIndustryAdddressbyIndustry_V2",
                    type: "POST",
                    // data: { DistrictID: $('#ddlDIRDistrict').val(), LineofActivity: $('#ddlDIRLineOfActivity').val(), IndustryID: $('#ddlDIRIndustryName').val() },
                    data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlCTODistrict').val(), CategoryID: $('#ddlCTOcategoryType').val(), LOA: $('#ddlCTOLineofAcitvity').val(), IndustryID: $('#ddlCTOIndustryName').val() },

                    success: function (response) {
                        var res = response;
                        console.log(response);
                        $('#txtCTOIndustryAddress').val(res);
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });


            });
            // $('#ddlCTOIndustryName').change(function () {
              
            //     $.ajax({
            //         url: "/PCBLive/ForIndustry/GetIndustryAdddressbyIndustry_V2",
            //         type: "POST",
            //        // data: { DistrictID: $('#ddlCTEDistrict').val(), LineofActivity: $('#txtlineof').val(), IndustryID: $('#ddlCTEIndustryName').val() },
            //         data: { ComplianceType: $('#ddlComplianceType').val(), DistrictID: $('#ddlCTODistrict').val(), CategoryID: $('#ddlCTOcategoryType').val(), IndustryID: $('#ddlCTOIndustryName').val() },

            //         success: function (response) {
            //             var res = response;
            //             console.log(response);
            //             $('#txtCTOIndustryAddress').val(res);
            //         },
            //         failure: function (response) {
            //             alert(response.d);
            //         }
            //     });


            // });

          
        });
    