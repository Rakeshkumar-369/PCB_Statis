
    jQuery(document).ready(function () {
        $.each($('#tblPHC tbody tr'), function (index, value) {
            var ele = value.cells[0];
            if (parseInt($(ele).text()) > 0)
                $(ele).text(index + 1);
        });
    })
    jQuery(document).ready(function () {
        $.each($('#tblUPH tbody tr'), function (index, value) {
            var ele = value.cells[0];
            if (parseInt($(ele).text()) > 0)
                $(ele).text(index + 1);
        });
    })



