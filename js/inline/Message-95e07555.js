
        $(document).ready(function () {
            function Message(title, msg, type) {
                Swal.fire(
                    {
                        title: title,
                        text: msg,
                        icon: type,
                    }
                )
            };


            $("#ctoForm").hide();
            $("#CEForm").show();
            $("#cteForm").hide();
            $("#DIRForm").hide();
            $("#divYear").hide();
            $("#DivMonths").hide();
            // Event handler for Compliance Type dropdown change
            $("#ddlComplianceType").change(function () {
                var selectedType = $(this).val();
                clearFormData();
                clearCTEFormData();
                clearCEFormData();
                clearDIRFormData();
                // Hide all forms initially
                $("#ctoForm").hide();
                $("#CEForm").hide();
                $("#cteForm").hide();
                $("#DIRForm").hide();
                $("#divYear").hide();
                $("#DivMonths").hide();
                // Show the form based on the selected compliance type
                if (selectedType == "CTO") {
                    $("#ctoForm").show();
                    $("#divYear").show();
                    $("#DivMonths").show();


                    // Show CTO Form if CTO is selected
                } else if (selectedType == "EC") {
                    $("#CEForm").show();
                    $("#divYear").show();
                    $("#DivMonths").show();// Show CE Form if EC is selected
                }
                else if (selectedType == "CTE") {
                    $("#cteForm").show();
                    $("#divYear").show();
                    $("#DivMonths").show();
                    // Show CE Form if EC is selected
                }
                else if (selectedType == "Directions") {
                    $("#DIRForm").show();
                    $("#divYear").show();
                    $("#DivMonths").show();// Show CE Form if EC is selected
                }
                // You can add more conditions here as per your other compliance types like CTE, Direction, etc.
            });
            $("#btnSubmit").click(function () {
                // Get the active tab ID
                var ComplianceType = $("#ddlComplianceType").val();

                if (ComplianceType == null || ComplianceType=="00"||ComplianceType==undefined)
                {
                $("#ddlComplianceType").focus();
                Message('error', 'Please Select Compliance Type', 'error');

                return false;
                }
                // let activeTab = $(".tab-buttons .btn.active").attr("id");
                if (ComplianceType === "CTO") { // Only validate when CTO tab is active
                    if (validateCTOForm()) {
                        CTOsubmitForm(); // Call AJAX function only if validation passes
                    }
                } 
                if (ComplianceType === "CTE") { // Only validate when CTE tab is active
                    if (validateCTEForm()) {
                        CTEsubmitForm(); // Call AJAX function only if validation passes
                    }
                } 
                if (ComplianceType === "EC") { // Only validate when CE tab is active
                    if (validateCEForm()) {
                        CEsubmitForm(); // Call AJAX function only if validation passes
                    }
                } 
                if (ComplianceType === "Directions") { // Only validate when DIR tab is active
                    if (validateDIRForm()) {
                        DIRsubmitForm(); // Call AJAX function only if validation passes
                    }
                }
                
            });
           
            function validateCTOForm() {

                var year = $('#ddlyear').val();
                if (year.trim() === "" || year == null || year == "00" || year == undefined) {

                    $("#ddlyear").focus();
                    Message('error', 'Please Select Year', 'error');

                    return false;
                }

                var YearHalf = $("input[name='RdoMonths']:checked").val();

                if (YearHalf == undefined || YearHalf == null || YearHalf == "") {


                    Message('error', 'Please Select Month between', 'error');

                    return false;
                }
                // Validate CTO District
                var CTODistrict = $("#ddlCTODistrict").val();
                if (CTODistrict.trim() === "" ||CTODistrict==null||CTODistrict=="00") {
                    $("#ddlCTODistrict").focus();
                    Message('error', 'Please Select District', 'error');
                   
                    return false;
                }

                // Validate CTO Category  Dropdown
                var CTOcategoryType = $("#ddlCTOcategoryType").val();
                if (CTOcategoryType.trim() === "" || CTOcategoryType == "00" || CTOcategoryType == "00") {
                    $("#ddlCTOcategoryType").focus();
                    Message('error', 'Please Select Category', 'error');
                    return false;
                }
                // Validate CTOLineOfActivity Dropdown
                var CTOLineOfActivity = $("#ddlCTOLineofAcitvity").val();
                if (CTOLineOfActivity === "" || CTOLineOfActivity == null || CTOLineOfActivity == undefined||CTOLineOfActivity == "0" ) {
                    $("#ddlCTOLineofAcitvity").focus();
                    Message('error', 'Please Select Line Of Activity', 'error');
                    return false;
                }
                // Validate CTO Industry Name Dropdown
                var CTOIndustryName = $("#ddlCTOIndustryName").val();
                if (CTOIndustryName === "" || CTOIndustryName == "0" || CTOIndustryName==undefined) {
                   $("#ddlCTOIndustryName").focus();
                    Message('error', 'Please Select Industry', 'error');
                    return false;
                }
               
               
                // Validate Order Number
                var CTOOrderNumber = $("#txtCTOOrderNumber").val();
                if (CTOOrderNumber.trim() === ""||CTOOrderNumber==null||CTOOrderNumber==undefined) {
                   
                    $("#txtCTOOrderNumber").focus();
                    Message('error', 'Please Enter Order Number', 'error');
                    return false;
                }
                
                // Validate Order Date
                var CTOOrderDate = $("#txtCTOOrderDate").val();
                if (CTOOrderDate.trim() === "" || CTOOrderDate == undefined || CTOOrderDate == null) {
                   
                    $("#txtCTOOrderDate").focus();
                    Message('error', 'Please Select  Order Date', 'error');
                    return false;
                }
                // Validate Order Issued by
                var CTOOrderIssuedby = $("#ddlCTOOrderIssuedby").val();
                if (CTOOrderIssuedby.trim() === ""||CTOOrderIssuedby=="00"||CTOOrderIssuedby==undefined) {
                    
                    $("#ddlCTOOrderIssuedby").focus();
                    Message('error', 'Please Select Order Issued by', 'error');
                    return false;
                }
                // Validate Email
                var CTOemail = $("#txtCTOemail").val();
                if (CTOemail.trim() === ""||CTOemail==null||CTOemail==undefined) {
                   
                    $("#txtCTOemail").focus();
                    Message('error', 'Please Enter  Email', 'error');
                    return false;
                }
               

              

                // Validate Phone Number
                var phoneNumber = $("#txtCTOPhoneNumber").val().trim();
                if (phoneNumber === "" ) {
                   
                    $("#txtCTOPhoneNumber").focus();
                    Message('error', 'Please Enter Phone Number', 'error');
                    return false;
                }
                if (!/^\d{10}$/.test(phoneNumber)) {
                    $("#txtCTOPhoneNumber").focus();
                    Message('error', 'Please Enter Valid 10 Digit Phone Number', 'error');
                    return false;
                }
                if (!/^[6-9]/.test(phoneNumber)) {
                    $("#txtCTOPhoneNumber").focus();
                    Message('error', 'The Phone Number should start with 6,7,8 or 9 ', 'error');

                    return false;
                }
                // Validate Address
                var CTOIndustryAddress = $("#txtCTOIndustryAddress").val().trim();
                if (CTOIndustryAddress.trim() === ""||CTOIndustryAddress==null||CTOIndustryAddress==undefined) {
                   
                    $("#txtCTOIndustryAddress").focus();
                    Message('error', 'Please Enter Address', 'error');
                    return false;
                }

              

                // Validate Compliance Status Dropdown
                var CTOStatusCompliance = $("#ddlCTOStatusCompliance").val().trim();
                if (CTOStatusCompliance === ""||CTOStatusCompliance=="00"||CTOStatusCompliance==undefined) {
                   
                    $("#ddlCTOStatusCompliance").focus();
                    Message('error', 'Please Select Status Compliance', 'error');
                    return false;
                }

                // Validate File Upload

                var pdffileexp = /(\.pdf)$/i;
                if (document.getElementById('ComplianceCTOReportUpload').value.trim() == "") {
                    if (!document.getElementById('ComplianceCTOReportUpload').value.match(pdffileexp)) {
                        Message('error', 'Please Upload the File in PDF Format Only', 'error');
                        return false;
                    }
                }

                var fileComplianceReportUpload = $("#ComplianceCTOReportUpload")[0];
                var leng = fileComplianceReportUpload.files.length;
                var item = fileComplianceReportUpload.files;
                var fileComplianceReportUploadFileSize = 0;
                if (leng > 0) {
                    for (var i = 0; i < leng; i++) {
                        fileComplianceReportUploadFileSize = fileComplianceReportUploadFileSize + item[i].size;
                    }
                    if (fileComplianceReportUploadFileSize > 31457280) {
                        Message('error', 'Please Upload File Size Should Be Less Than 30MB', 'error');
                       
                        return false;
                    }
                }
                // Validate Checkbox
                if (!$("#CTOch").is(":checked")) {

                    Message('error', 'Please Check the Note', 'error');
                    return false;
                }
                // Validate Captcha
                if ($("#txtcaptcha").val().trim() === "") {
                    $("#txtcaptcha").focus();
                    Message('error', 'Please Enter Captcha', 'error');
                    return false;
                }

               
                return true;
               
               
            }
            function clearFormData() {
              
                $('#ddlCTODistrict').val('00');
                //$('#ddlCTOLineofAcitvity').val("0").change();
               // $('#ddlCTOIndustryName').val("0").change();
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
                $('#ddlyear').val('00');
             
                $("input[name='RdoMonths']").prop("checked", false);
            }
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
            function CTOsubmitForm() {
               
                var YearHalf = $("input[name='RdoMonths']:checked").val();

                let formData = new FormData();

                formData.append("ComplianceType", $("#ddlComplianceType").val());
                formData.append("DistrictID", $('#ddlCTODistrict').val());
                formData.append("LineOfActivity", $('#ddlCTOLineofAcitvity').val());
                formData.append("IndustryID", $('#ddlCTOIndustryName').val());
                formData.append("Category", $('#ddlCTOcategoryType').val());
                formData.append("OrderNumber", $('#txtCTOOrderNumber').val());
                formData.append("OrderIssuedDate", $('#txtCTOOrderDate').val());
                formData.append("OrderIssuedby", $('#ddlCTOOrderIssuedby :selected').text());
                formData.append("Email", $('#txtCTOemail').val());
                formData.append("PhoneNumber", $('#txtCTOPhoneNumber').val());
                formData.append("Address", $('#txtCTOIndustryAddress').val());
                formData.append("ComplianceStatus", $('#ddlCTOStatusCompliance :selected').text());
                formData.append("Year", $('#ddlyear :selected').text());
                formData.append("HalfYearly_Type", YearHalf);
                formData.append("Filepath", $('#ComplianceCTOReportUpload')[0].files[0]);
                    // formData.append("clearance", "CFO/CFE");
               
                   formData.append("captcha", $('#txtcaptcha').val());
                formData.append("createdby", $('#ddlCTOIndustryName').val());
               
              

                $.ajax({
                    url: "/PCBLive/ForIndustry/Submission_Compliance_of_CTO",
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        console.log(response);

                        



                        if (response === "suc") {
                            
                            Message('success', 'CTO Compliance Successfully Submitted', 'success');
                            clearFormData();
                              $('#ddlCTOLineofAcitvity').val("0").change();
                $('#ddlCTOIndustryName').val("0").change();
                            $("#ddlComplianceType").val('00');
                            refreshcaptcha();
                            //location.reload(); // Reload page after success
                        } else if (response === "Entervalidcaptcha") {
                            Message('error', 'Invalid Captcha. Please try again.', 'error');
                            refreshcaptcha();
                        } else if (response === "Invalidfilepdf") {
                            Message('error', 'Invalid File Format,Please Upload PDF File', 'error');
                            refreshcaptcha();
                        } 
                        else if (response === "Email") {
                            Message('error', 'Invalid Email Address,Please Enter Correct Email', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Already") {
                            Message('error', 'Already Exist', 'error');
                        }
                        else if (response === "Malicious") {
                            Message('error', 'Upload File has Virus Content! PLease Upload Another File', 'error');
                        }
                        else {
                           
                            Message('error', 'CTO Compliance Submission Failed! Please try again.', 'error');
                            refreshcaptcha();
                        }
                    },
                    error: function (xhr) {
                        console.error(xhr.responseText);
                    }
                });
            }



            function validateCTEForm() {

                var year = $('#ddlyear').val();
                if (year.trim() === "" || year == null || year == "00"||year==undefined) {

                    $("#ddlyear").focus();
                    Message('error', 'Please Select Year', 'error');

                    return false;
                }

                var YearHalf = $("input[name='RdoMonths']:checked").val();

                if (YearHalf == undefined || YearHalf == null || YearHalf == "") {

                   
                    Message('error', 'Please Select Month between', 'error');

                    return false;
                }
                // Validate CTO District
                var CTODistrict = $("#ddlCTEDistrict").val();
                if (CTODistrict.trim() === "" || CTODistrict == null || CTODistrict == "00") {
                   
                    $("#ddlCTEDistrict").focus();
                    Message('error', 'Please Select District', 'error');

                    return false;
                }
                // Validate CTO Category  Dropdown
                var CTOcategoryType = $("#ddlCTEcategoryType").val();
                if (CTOcategoryType.trim() === "" || CTOcategoryType == "" || CTOcategoryType == "00") {

                    $("#ddlCTEcategoryType").focus();
                    Message('error', 'Please Select Category', 'error');
                    return false;
                }
                // Validate CTOLineOfActivity Dropdown
                var CTOLineOfActivity = $("#ddlCTELineOfActivity").val();
                if (CTOLineOfActivity === "" || CTOLineOfActivity == null || CTOLineOfActivity == undefined || CTOLineOfActivity == "0") {


                    $("#ddlCTELineOfActivity").focus();
                    Message('error', 'Please Select Line Of Activity', 'error');
                    return false;
                }
                // Validate CTO Industry Name Dropdown
                var CTOIndustryName = $("#ddlCTEIndustryName").val();
                if (CTOIndustryName === "" || CTOIndustryName == "0" || CTOIndustryName == undefined) {
                   

                    $("#ddlCTEIndustryName").focus();
                    Message('error', 'Please Select Industry', 'error');
                    return false;
                }
              
               
                // Validate Order Number
                var CTOOrderNumber = $("#txtCTEOrderNumber").val();
                if (CTOOrderNumber.trim() === "" || CTOOrderNumber == null || CTOOrderNumber == undefined) {
                   


                    $("#txtCTEOrderNumber").focus();
                    Message('error', 'Please Enter Order Number', 'error');
                    return false;
                }

                // Validate Order Date
                var CTOOrderDate = $("#txtCTEOrderDate").val();
                if (CTOOrderDate.trim() === "" || CTOOrderDate == undefined || CTOOrderDate == null) {
                  

                    $("#txtCTEOrderDate").focus();
                    Message('error', 'Please Select  Order Date', 'error');
                    return false;
                }
                // Validate Order Issued by
                var CTOOrderIssuedby = $("#ddlCTEOrderIssuedby").val();
                if (CTOOrderIssuedby.trim() === "" || CTOOrderIssuedby == "00" || CTOOrderIssuedby == undefined) {
                   

                    $("#ddlCTEOrderIssuedby").focus();
                    Message('error', 'Please Select Order Issued by', 'error');
                    return false;
                }
                // Validate Email
                var CTOemail = $("#txtCTEemail").val();
                if (CTOemail.trim() === "" || CTOemail == null || CTOemail == undefined) {
                   

                    $("#txtCTEemail").focus();
                    Message('error', 'Please Enter  Email', 'error');
                    return false;
                }


                // Validate Phone Number
                var phoneNumber = $("#txtCTEPhoneNumber").val().trim();
                if (phoneNumber === "") {
                  

                    $("#txtCTEPhoneNumber").focus();
                    Message('error', 'Please Enter Phone Number', 'error');
                    return false;
                }
                if (!/^\d{10}$/.test(phoneNumber)) {
                    $("#txtCTEPhoneNumber").focus();
                    Message('error', 'Please Enter Valid 10 Digit Phone Number', 'error');
                  
                    return false;
                } if (!/^[6-9]/.test(phoneNumber)) {
                    $("#txtCTEPhoneNumber").focus();
                    Message('error', 'The Phone Number should start with 6,7,8 or 9 ', 'error');

                    return false;
                }
                // Validate Address
                var CTOIndustryAddress = $("#txtCTEIndustryAddress").val().trim();
                if (CTOIndustryAddress.trim() === "" || CTOIndustryAddress == null || CTOIndustryAddress == undefined) {
                   

                    $("#txtCTEIndustryAddress").focus();
                    Message('error', 'Please Enter Address', 'error');
                    return false;
                }



                // Validate Compliance Status Dropdown
                var CTOStatusCompliance = $("#ddlCTEStatusCompliance").val().trim();
                if (CTOStatusCompliance === "" || CTOStatusCompliance == "00" || CTOStatusCompliance == undefined) {
                  

                    $("#ddlCTEStatusCompliance").focus();
                    Message('error', 'Please Select Status Compliance', 'error');
                    return false;
                }

               



                var pdffileexp = /(\.pdf)$/i;
                if (document.getElementById('ComplianceCTEReportUpload').value.trim() == "") {
                    if (!document.getElementById('ComplianceCTEReportUpload').value.match(pdffileexp)) {
                        Message('error', 'Please Upload the File in PDF Format Only', 'error');
                        return false;
                    }
                }

                var fileComplianceReportUpload = $("#ComplianceCTEReportUpload")[0];
                var leng = fileComplianceReportUpload.files.length;
                var item = fileComplianceReportUpload.files;
                var fileComplianceReportUploadFileSize = 0;
                if (leng > 0) {
                    for (var i = 0; i < leng; i++) {
                        fileComplianceReportUploadFileSize = fileComplianceReportUploadFileSize + item[i].size;
                    }
                    if (fileComplianceReportUploadFileSize > 31457280) {
                        Message('error', 'Please Upload File Size Should Be Less Than 30MB', 'error');

                        return false;
                    }
                }
               
                // Validate Checkbox
                if (!$("#CTEch").is(":checked")) {


                    Message('error', 'Please Check the Note', 'error');
                    return false;
                }
                // Validate Captcha
                if ($("#txtcaptcha").val().trim() === "") {
                    $("#txtcaptcha").focus();
                    Message('error', 'Please Enter Valid Captcha', 'error');
                    return false;
                }

               
                return true;
              

            }
            function clearCTEFormData() {
              
                $('#ddlCTEDistrict').val('00');
               // $('#ddlCTELineOfActivity').val("0").change();
                //$('#ddlCTEIndustryName').val("0").change();
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
                $('#ddlyear').val('00');
                $("input[name='RdoMonths']:checked").prop("checked", false);
              
            }
            function CTEsubmitForm() {
                var YearHalf = $("input[name='RdoMonths']:checked").val();
                let formData = new FormData();

                formData.append("ComplianceType", $("#ddlComplianceType").val());
                formData.append("DistrictID", $('#ddlCTEDistrict').val());
                formData.append("LineOfActivity", $('#ddlCTELineOfActivity').val());
                formData.append("IndustryID", $('#ddlCTEIndustryName').val());
                formData.append("Category", $('#ddlCTEcategoryType').val());
                formData.append("OrderNumber", $('#txtCTEOrderNumber').val());
                formData.append("OrderIssuedDate", $('#txtCTEOrderDate').val());
                formData.append("OrderIssuedby", $('#ddlCTEOrderIssuedby :selected').text());
                formData.append("Email", $('#txtCTEemail').val());
                formData.append("PhoneNumber", $('#txtCTEPhoneNumber').val());
                formData.append("Address", $('#txtCTEIndustryAddress').val());
                formData.append("ComplianceStatus", $('#ddlCTEStatusCompliance :selected').text());
                formData.append("Year", $('#ddlyear :selected').text());
                formData.append("HalfYearly_Type", YearHalf);
                formData.append("Filepath", $('#ComplianceCTEReportUpload')[0].files[0]);
                // formData.append("clearance", "CFO/CFE");
               
                formData.append("captcha", $('#txtcaptcha').val());
                formData.append("createdby", $('#ddlCTEIndustryName').val());

                $.ajax({
                    url: "/PCBLive/ForIndustry/Submission_Compliance_of_CTO",
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                       
                        if (response === "suc") {
                            Message('success', 'CTE Compliance Successfully Submitted', 'success');
                            clearCTEFormData();
                            $("#ddlComplianceType").val('00');
                               $('#ddlCTELineOfActivity').val("0").change();
                $('#ddlCTEIndustryName').val("0").change();
                            refreshcaptcha();
                            //location.reload(); // Reload page after success
                        } else if (response === "Entervalidcaptcha") {
                            Message('error', 'Invalid Captcha. Please try again.', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Email") {
                            Message('error', 'Invalid Email Address,Please Enter Correct Email', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Invalidfilepdf") {
                            Message('error', 'Invalid File Format,Please Upload PDF Files', 'error');
                            refreshcaptcha();
                        } else if (response === "Already") {
                            Message('error', 'Already Exist', 'error');
                        }

                        else if (response === "Malicious") {
                            Message('error', 'Upload File has Virus Content! Please Upload Another File', 'error');
                        }
                        
                        else {
                            Message('error', 'CTE Compliance Submission Failed! Please try again.', 'error');
                          
                        }
                    },
                    error: function (xhr) {
                        console.error(xhr.responseText);
                    }
                });
            }



            function validateCEForm() {
                var year = $('#ddlyear').val();
                if (year.trim() === "" || year == null || year == "00" || year == undefined) {

                    $("#ddlyear").focus();
                    Message('error', 'Please Select Year', 'error');

                    return false;
                }
                var YearHalf = $("input[name='RdoMonths']:checked").val();

                if (YearHalf == undefined || YearHalf == null || YearHalf == "") {


                    Message('error', 'Please Select Month between', 'error');

                    return false;
                }
                // Validate CE District
                var CEDistrict = $("#ddlCEDistrict").val();
                if (CEDistrict.trim() === "" || CEDistrict == null || CEDistrict == "00") {
                   
                    $("#ddlCEDistrict").focus();
                    Message('error', 'Please Select District', 'error');
                    return false;
                }

              
                // Validate CE Industry Name 
                var CEIndustryName = $("#txtNameofIndustry").val();
                if (CEIndustryName === "" || CEIndustryName == null || CEIndustryName == undefined) {
                   

                    $("#txtNameofIndustry").focus();
                    Message('error', 'Please Enter Industry', 'error');
                    return false;
                }
                // Validate Order Number
                var CEOrderNumber = $("#txtCEOrderNumber").val();
                if (CEOrderNumber.trim() === "" || CEOrderNumber == null || CEOrderNumber == undefined) {
                   
                    $("#txtCEOrderNumber").focus();
                    Message('error', 'Please Enter Order Number', 'error');
                    return false;
                }
                // Validate Order Date
                var CEOrderDate = $("#txtCEOrderDate").val();
                if (CEOrderDate.trim() === "" || CEOrderDate == undefined || CEOrderDate == null) {
                    

                    $("#txtCEOrderDate").focus();
                    Message('error', 'Please Select  Order Date', 'error');
                    return false;
                }
                // Validate Order Issued by
                var CEOrderIssuedby = $("#ddlCEOrderIssuedby").val();
                if (CEOrderIssuedby.trim() === "" || CEOrderIssuedby == "00" || CEOrderIssuedby == undefined) {
                    
                    $("#ddlCEOrderIssuedby").focus();
                    Message('error', 'Please Select  Order Issued by', 'error');
                    return false;
                }
                // Validate Email
                var CEemail = $("#txtCEemail").val();
                if (CEemail.trim() === "" || CEemail == null || CEemail == undefined) {
                   
                    $("#txtCEemail").focus();
                    Message('error', 'Please Enter  Email', 'error');
                    return false;
                }
                // Validate Phone Number
                var phoneNumber = $("#txtCEPhoneNumber").val().trim();
                if (phoneNumber === "") {

                    $("#txtCEPhoneNumber").focus();
                    Message('error', 'Please Enter Phone Number', 'error');
                   
                    return false;
                }
                if (!/^\d{10}$/.test(phoneNumber)) {
                    
                    $("#txtCEPhoneNumber").focus();
                    Message('error', 'Please Enter Valid 10 Digit Phone Number', 'error');
                    return false;
                } if (!/^[6-9]/.test(phoneNumber)) {
                    $("#txtCEPhoneNumber").focus();
                    Message('error', 'The Phone Number should start with 6,7,8 or 9 ', 'error');
                  
                    return false;
                }

                // Validate Address
                var CEIndustryAddress = $("#txtCEIndustryAddress").val().trim();
                if (CEIndustryAddress.trim() === "" || CEIndustryAddress == null || CEIndustryAddress == undefined) {
                    $("#txtCEIndustryAddress").focus();
                    Message('error', 'Please Enter Address', 'error');
                    
                    return false;
                }
                // Validate Compliance Status Dropdown
                var CEStatusCompliance = $("#ddlCEStatusCompliance").val().trim();
                if (CEStatusCompliance === "" || CEStatusCompliance == "00" || CEStatusCompliance == undefined) {
               

                    $("#ddlCEStatusCompliance").focus();
                    Message('error', 'Please Select Status Compliance', 'error');
                    return false;
                }
                // Validate File Upload
               

                var pdffileexp = /(\.pdf)$/i;
                if (document.getElementById('ComplianceCEReportUpload').value.trim() == "") {
                    if (!document.getElementById('ComplianceCEReportUpload').value.match(pdffileexp)) {
                        Message('error', 'Please Upload the File in PDF Format Only', 'error');
                        return false;
                    }
                }

                var fileComplianceReportUpload = $("#ComplianceCEReportUpload")[0];
                var leng = fileComplianceReportUpload.files.length;
                var item = fileComplianceReportUpload.files;
                var fileComplianceReportUploadFileSize = 0;
                if (leng > 0) {
                    for (var i = 0; i < leng; i++) {
                        fileComplianceReportUploadFileSize = fileComplianceReportUploadFileSize + item[i].size;
                    }
                    if (fileComplianceReportUploadFileSize > 31457280) {
                        Message('error', 'Please Upload File Size Should Be Less Than 30MB', 'error');

                        return false;
                    }
                }

                // Validate Checkbox
                if (!$("#ECch").is(":checked")) {
                    
                    Message('error', 'Please Check the Note', 'error');
                    return false;
                }
                // Validate Captcha
                if ($("#txtcaptcha").val().trim() === "") {
                    $("#txtcaptcha").focus();
                    Message('error', 'Please Enter  Captcha', 'error');
                    return false;
                }

               
                return true;
               

            }
             function clearCEFormData() {
             
                $('#ddlCEDistrict').val('00');
                $('#txtNameofIndustry').val('');
                
                $('#txtCEOrderNumber').val('');
                $('#txtCEOrderDate').val('');
                $('#ddlCEOrderIssuedby').val('00');
                $('#txtCEemail').val('');
                $('#txtCEPhoneNumber').val('');
                $('#txtCEIndustryAddress').val('');
                $('#ddlCEStatusCompliance').val('00');
                $('#ComplianceCEReportUpload').val('');
                $('#txtcaptcha').val('');
                $('#ddlyear').val('00');
                $("#ECch").prop("checked", false);
                $("input[name='RdoMonths']:checked").prop("checked", false);
            }
            function CEsubmitForm() {
                var YearHalf = $("input[name='RdoMonths']:checked").val();
               
                let formData = new FormData();

                formData.append("ComplianceType", $("#ddlComplianceType").val());
                formData.append("DistrictID", $('#ddlCEDistrict').val());
             
       
                formData.append("IndustryEC", $('#txtNameofIndustry').val());
              
                formData.append("OrderNumber", $('#txtCEOrderNumber').val());
                formData.append("OrderIssuedDate", $('#txtCEOrderDate').val());
                formData.append("OrderIssuedby", $('#ddlCEOrderIssuedby :selected').text());
                formData.append("Email", $('#txtCEemail').val());
                formData.append("PhoneNumber", $('#txtCEPhoneNumber').val());
                formData.append("Address", $('#txtCEIndustryAddress').val());
                formData.append("ComplianceStatus", $('#ddlCEStatusCompliance :selected').text());
                formData.append("Year", $('#ddlyear :selected').text());
                formData.append("HalfYearly_Type", YearHalf);
                formData.append("Filepath", $('#ComplianceCEReportUpload')[0].files[0]);
                formData.append("captcha", $('#txtcaptcha').val());
                formData.append("createdby", $('#txtNameofIndustry').val());

                
                $.ajax({
                    url: "/PCBLive/ForIndustry/Submission_Compliance_of_CTO",
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response === "suc") {
                            Message('success', 'EC Compliance Successfully Submitted', 'success');
                            clearCEFormData();
                            $("#ddlComplianceType").val('00');
                            refreshcaptcha();
                            //location.reload(); // Reload page after success
                        } else if (response === "Entervalidcaptcha") {
                            Message('error', 'Invalid Captcha. Please try again.', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Email") {
                            Message('error', 'Invalid Email Address,Please Enter Correct Email', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Invalidfilepdf") {
                            Message('error', 'Invalid File Format,Please Upload PDF Files', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Already") {
                            Message('error', 'Already Exist', 'error');
                        } 
                        else if (response === "Malicious") {
                            Message('error', 'Upload File has Virus Content! PLease Upload Another File', 'error');
                        }
                        else {
                            Message('error', ' EC Compliance Submission Failed! Please try again', 'error');
                        }
                    }, 
                    error: function (xhr) {
                        console.error(xhr.responseText);
                    }
                });
            }



            function validateDIRForm() {

                var year = $('#ddlyear').val();
                if (year.trim() === "" || year == null || year == "00" || year == undefined) {

                    $("#ddlyear").focus();
                    Message('error', 'Please Select Year', 'error');

                    return false;
                }
                var YearHalf = $("input[name='RdoMonths']:checked").val();

                if (YearHalf == undefined || YearHalf == null || YearHalf == "") {


                    Message('error', 'Please Select Month between', 'error');

                    return false;
                }
                // Validate CE District
                var CEDistrict = $("#ddlDIRDistrict").val();
                if (CEDistrict.trim() === "" || CEDistrict == null || CEDistrict == "00") {
                   
                    $("#ddlDIRDistrict").focus();
                    Message('error', 'Please Select District', 'error');
                    return false;
                }
                
                    var ddlDIRcategoryType = $("#ddlDIRcategoryType").val();
                if (ddlDIRcategoryType.trim() === "" || ddlDIRcategoryType == null || ddlDIRcategoryType == "00") {
                   
                    $("#ddlDIRcategoryType").focus();
                    Message('error', 'Please Select Category', 'error');
                    return false;
                }

                var ddlDIRLineOfActivity = $("#ddlDIRLineOFAcivity").val();
                if (ddlDIRLineOfActivity === "" || ddlDIRLineOfActivity == null || ddlDIRLineOfActivity == undefined || ddlDIRLineOfActivity == "0") {

                    $("#ddlDIRLineOFAcivity").focus();
                    Message('error', 'Please Select Line of Activity', 'error');
                    return false;
                }
               
                // Validate CE Industry Name
                var ddlDIRIndustryName = $("#ddlDIRIndustryName").val();
                if (ddlDIRIndustryName === "" || ddlDIRIndustryName == null || ddlDIRIndustryName == undefined||ddlDIRIndustryName=="0") {
                   
                    $("#ddlDIRIndustryName").focus();
                    Message('error', 'Please Select Industry', 'error');
                    return false;
                } 
                // Validate Order Number
                var CEOrderNumber = $("#txtDIROrderNumber").val();
                if (CEOrderNumber.trim() === "" || CEOrderNumber == null || CEOrderNumber == undefined) {
                  

                    $("#txtDIROrderNumber").focus();
                    Message('error', 'Please Enter Order Number', 'error');
                    return false;
                }
                // Validate Order Date
                var CEOrderDate = $("#txtDIROrderDate").val();
                if (CEOrderDate.trim() === "" || CEOrderDate == undefined || CEOrderDate == null) {
                   

                    $("#txtDIROrderDate").focus();
                    Message('error', 'Please Select  Order Date', 'error');
                    return false;
                }
                // Validate Order Issued by
                var CEOrderIssuedby = $("#ddlDIROrderIssuedby").val();
                if (CEOrderIssuedby.trim() === "" || CEOrderIssuedby == "00" || CEOrderIssuedby == undefined) {
                  
                    $("#ddlDIROrderIssuedby").focus();
                    Message('error', 'Please Select Order Issued by', 'error');
                    return false;
                }
                // Validate Email
                var CEemail = $("#txtDIRemail").val();
                if (CEemail.trim() === "" || CEemail == null || CEemail == undefined) {
                

                    $("#txtDIRemail").focus();
                    Message('error', 'Please Enter  Email', 'error');
                    return false;
                }
                // Validate Phone Number
                var phoneNumber = $("#txtDIRPhoneNumber").val().trim();
                if (phoneNumber === "") {
                   
                    $("#txtDIRPhoneNumber").focus();
                    Message('error', 'Please Enter Phone Number', 'error');
                    return false;
                }
                if (!/^\d{10}$/.test(phoneNumber)) {
                   
                      $("#txtDIRPhoneNumber").focus();
                    Message('error', 'Please Enter Valid 10 Digits Phone Number', 'error');
                    return false;
                } if (!/^[6-9]/.test(phoneNumber)) {
                    $("#txtDIRPhoneNumber").focus();
                    Message('error', 'The Phone Number should start with 6,7,8 or 9 ', 'error');

                    return false;
                }

                // Validate Address
                var CEIndustryAddress = $("#txtDIRIndustryAddress").val().trim();
                if (CEIndustryAddress.trim() === "" || CEIndustryAddress == null || CEIndustryAddress == undefined) {
                   

                    $("#txtDIRIndustryAddress").focus();
                    Message('error', 'Please Enter Address', 'error');
                    return false;
                }
                // Validate Compliance Status Dropdown
                var CEStatusCompliance = $("#ddlDIRStatusCompliance").val().trim();
                if (CEStatusCompliance === "" || CEStatusCompliance == "00" || CEStatusCompliance == undefined) {
                 
                    $("#ddlDIRStatusCompliance").focus();
                    Message('error', 'Please Select Status Compliance', 'error');
                    return false;
                }
                // Validate File Upload
              



                var pdffileexp = /(\.pdf)$/i;
                if (document.getElementById('ComplianceDIRReportUpload').value.trim() == "") {
                    if (!document.getElementById('ComplianceDIRReportUpload').value.match(pdffileexp)) {
                        Message('error', 'Please Upload the File in PDF Format Only', 'error');
                        return false;
                    }
                }

                var fileComplianceReportUpload = $("#ComplianceDIRReportUpload")[0];
                var leng = fileComplianceReportUpload.files.length;
                var item = fileComplianceReportUpload.files;
                var fileComplianceReportUploadFileSize = 0;
                if (leng > 0) {
                    for (var i = 0; i < leng; i++) {
                        fileComplianceReportUploadFileSize = fileComplianceReportUploadFileSize + item[i].size;
                    }
                    if (fileComplianceReportUploadFileSize > 31457280) {
                        Message('error', 'Please Upload File Size Should Be Less Than 30MB', 'error');

                        return false;
                    }
                }
                // Validate Checkbox
                if (!$("#DIRch").is(":checked")) {
                   
                    Message('error', 'Please Check the Note', 'error');
                    return false;
                }
                // Validate Captcha
                if ($("#txtcaptcha").val().trim() === "") {
                   
                    $("#txtcaptcha").focus();
                    Message('error', 'Please Enter  Captcha', 'error');
                    return false;
                }

              
                return true;


            }
            function clearDIRFormData() {
               
                $('#ddlDIRDistrict').val('00');
                $('#ddlDIRcategoryType').val('00');
                $('#ddlDIRLineOFAcivity').val('0').change();
               // $('#ddlDIRLineOFAcivity').html('');
                $('#ddlDIRIndustryName').val('0').change();
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
                $('#ddlyear').val('00');
                $("input[name='RdoMonths']:checked").prop("checked", false);
            }
            function DIRsubmitForm() {
                var YearHalf = $("input[name='RdoMonths']:checked").val();
               
                let formData = new FormData();

                formData.append("ComplianceType",$("#ddlComplianceType").val());
                formData.append("DistrictID", $('#ddlDIRDistrict').val());
                formData.append("LineOfActivity", $('#ddlDIRLineOFAcivity').val());
                formData.append("IndustryID",  $('#ddlDIRIndustryName').val());
                formData.append("Category", $('#ddlDIRcategoryType').val());
                formData.append("OrderNumber", $('#txtDIROrderNumber').val());
                formData.append("OrderIssuedDate", $('#txtDIROrderDate').val());
                formData.append("OrderIssuedby", $('#ddlDIROrderIssuedby :selected').text());
                formData.append("Email", $('#txtDIRemail').val());
                formData.append("PhoneNumber", $('#txtDIRPhoneNumber').val());
                formData.append("Address", $('#txtDIRIndustryAddress').val());
                formData.append("ComplianceStatus", $('#ddlDIRStatusCompliance :selected').text());
                formData.append("Year", $('#ddlyear :selected').text());
                formData.append("HalfYearly_Type", YearHalf);
                formData.append("Filepath", $('#ComplianceDIRReportUpload')[0].files[0]);
                formData.append("captcha", $('#txtcaptcha').val());
                formData.append("createdby", $('#ddlDIRIndustryName').val());


                // $('#ddlDIRStatusCompliance :selected').text()
                $.ajax({
                    url: "/PCBLive/ForIndustry/Submission_Compliance_of_CTO",
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response === "suc") {
                            Message('success', ' Direction Compliance Successfully Submitted', 'success');
                            $("#ddlComplianceType").val('00');
                            clearDIRFormData();
                            refreshcaptcha();
                            //location.reload(); // Reload page after success
                        } else if (response === "Entervalidcaptcha") {
                            Message('error', 'Invalid Captcha. Please try again.', 'error');
                            refreshcaptcha();
                        } else if (response === "Email") {
                            Message('error', 'Invalid Email Address,Please Enter Correct Email', 'error');
                            refreshcaptcha();
                        }
                        else if (response === "Invalidfilepdf") {
                            Message('error', 'Invalid File Format,Please Upload PDF Files', 'error');
                            refreshcaptcha();
                        } else if (response === "Already") {
                            Message('error', 'Already Exist', 'error');
                        }
                        else if (response === "Malicious") {
                            Message('error', 'Upload File has Virus Content! Please Upload Another File', 'error');
                        }
                        else {
                            Message('error',' Direction Compliance Submission Failed! Please try again.','error');
                        }
                    },
                    error: function (xhr) {
                        console.error(xhr.responseText);
                    }
                });
            }

        });

    