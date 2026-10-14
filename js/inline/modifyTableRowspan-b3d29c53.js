

    var column1 = $('#annualtable td:first-child');

    modifyTableRowspan(column1);


    function modifyTableRowspan(column) {
        var prevText = "";
        var counter = 0;
        column.each(function (index) {
            var textValue = $(this).text();
            if (index == 0) {
                prevText = textValue;
            }
            if (textValue !== prevText || index === column.length - 1) {
                var first = index - counter;
                if (index === column.length - 1) {
                    counter = counter + 1;
                }
                column.eq(first).attr('rowspan', counter);
                if (index == column.length - 1) {
                    for (var j = index; j > first; j--) {
                        column.eq(j).remove();
                    }
                }
                else {
                    for (var i = index - 1; i > first; i--) {
                        column.eq(i).remove();
                    }
                }
                prevText = textValue;
                counter = 0;
            }

            counter++;


        });
    }


