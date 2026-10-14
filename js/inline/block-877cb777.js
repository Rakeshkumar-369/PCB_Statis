
    $(document).ready(function () {
        $('#saveenergy').click(function () {
            $('#saveenergytab').show();
            $('#savewatertab').hide();
            $('#sustainablefoodstab').hide();
            $('#reducewastetab').hide();
            $('#saynotoplastictab').hide();
            $('#healthlifestyletab').hide();
            $('#reduce-e-wastetab').hide();
        });

        $('#savewater').click(function () {
            $('#saveenergytab').hide();
            $('#saynotoplastictab').hide();
            $('#sustainablefoodstab').hide();
            $('#reducewastetab').hide();
            $('#healthlifestyletab').hide();
            $('#reduce-e-wastetab').hide();
            $('#savewatertab').show();
        });
        $('#saynotoplastic').click(function () {
            $('#saveenergytab').hide();
            $('#savewatertab').hide();
            $('#sustainablefoodstab').hide();
            $('#reducewastetab').hide();
            $('#healthlifestyletab').hide();
            $('#reduce-e-wastetab').hide();
            $('#saynotoplastictab').show();
        });
        $('#sustainablefoods').click(function () {
            $('#saveenergytab').hide();
            $('#savewatertab').hide();
            $('#saynotoplastictab').hide();
            $('#reducewastetab').hide();
            $('#healthlifestyletab').hide();
            $('#reduce-e-wastetab').hide();
            $('#sustainablefoodstab').show();
        });
        $('#reducewaste').click(function () {
            $('#saveenergytab').hide();
            $('#savewatertab').hide();
            $('#saynotoplastictab').hide();
            $('#sustainablefoodstab').hide();
            $('#healthlifestyletab').hide();
            $('#reduce-e-wastetab').hide();
            $('#reducewastetab').show();
        });
        $('#healthlifestyle').click(function () {
            $('#saveenergytab').hide();
            $('#savewatertab').hide();
            $('#saynotoplastictab').hide();
            $('#sustainablefoodstab').hide();
            $('#reducewastetab').hide();
            $('#reduce-e-wastetab').hide();
            $('#healthlifestyletab').show();
        });
        $('#reduce-e-waste').click(function () {
            $('#saveenergytab').hide();
            $('#savewatertab').hide();
            $('#saynotoplastictab').hide();
            $('#sustainablefoodstab').hide();
            $('#reducewastetab').hide();
            $('#healthlifestyletab').hide();
            $('#reduce-e-wastetab').show();
        });
    })
