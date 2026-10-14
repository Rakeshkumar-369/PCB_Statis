
    $(document).ready(function () {
        $('#pdfdocstab').show();
        $('#pdfdocs').click(function () {
            $('#imgdocstab').hide();
            $('#videodocstab').hide();
            $('#pdfdocstab').show();
        });
        $('#imgdocs').click(function () {
            $('#pdfdocstab').hide();
            $('#imgdocstab').show();
            $('#videodocstab').hide();
        });
        $('#videodocs').click(function () {
            $('#pdfdocstab').hide();
            $('#imgdocstab').hide();
            $('#videodocstab').show();
        });
    })
