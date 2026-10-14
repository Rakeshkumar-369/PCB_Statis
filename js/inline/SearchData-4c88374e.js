
        function SearchData() {
            var River = $("#ddlriver").val();
            if (River == "00" || River == undefined || River == null) {
                $("#ddlriver").focus();
                alert('Please Select  River');
                return false;
            }
            var Year = $("#ddlyear").val();
            if (Year == "00" || Year == undefined || Year == null) {
                $("#ddlyear").focus();
                alert('Please Select  Year');
                return false;
            }
            var Location = $("#ddllocation").val();
            if (Location == "00" || Location == undefined || Location == null) {
                $("#ddllocation").focus();
                alert('Please Select  Location ');
                return false;
            }

            $('#loader').show();

        }
    