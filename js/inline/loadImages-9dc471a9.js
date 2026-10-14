
    $(document).ready(function () {
        var folderMAP = { 1: '#Eluru' }

        $('.folder').on('click', function () {
            var folderId = $(this).data('folder-id');
            $('#imgdocstab').addClass('hidden');
            $('#galleryImages').removeClass('hidden');

            var targetId = folderMAP[folderId];
            $('#imgdocstab>div').hide();
            if (targetId) {
                $(targetId).show();
            }
            loadImages(folderId);
        });
        $('#backButton1').on('click', function () {
            $('#imgdocstab').removeClass('hidden');
            $('#accordionExample').show();
            $('#galleryImages').addClass('hidden');


        });
        function loadImages(folderId) {
            var images = {
                //ROEluru
                1: ["../../appcbdocs/swachimgs/17-09-2024/RO_ELURU/ELU1/2.jpg", "../../appcbdocs/swachimgs/17-09-2024/RO_ELURU/ELU1/3.jpg", "../../appcbdocs/swachimgs/17-09-2024/RO_ELURU/ELU1/4.jpg", "../../appcbdocs/swachimgs/17-09-2024/RO_ELURU/ELU1/5.jpg", "../../appcbdocs/swachimgs/17-09-2024/RO_ELURU/ELU1/6.jpg", "../../appcbdocs/swachimgs/17-09-2024/RO_ELURU/ELU1/1.jpg"],


            };

            var imageContainer = $('#imageContainer');
            imageContainer.empty();
            $('#carouselImages').empty();

            // Append images to the image container and carousel
            images[folderId].forEach(function (image, index) {
                var imgElement = '<div class="col-sm-2"><img src="' + image + '" class="img-fluid" data-bs-toggle="modal" data-bs-target="#imageModal" data-image-index="' + index + '" /></div>';
                imageContainer.append(imgElement);

                var carouselItem = '<div class="carousel-item"><img src="' + image + '" class="d-block w-100" /></div>';
                $('#carouselImages').append(carouselItem);
            });
        }


        //Click event for the dynamically loaded images to open modal and set the clicked image as active
        $(document).on('click', '#imageContainer img', function () {
            var index = $(this).data('image-index');

            // Remove active class from all carousel items
            $('#carouselImages .carousel-item').removeClass('active');

            // Add active class to the clicked image's corresponding carousel item
            $('#carouselImages .carousel-item').eq(index).addClass('active');

            // Open the modal and move to the clicked image in the carousel
            var carouselEl = document.getElementById('carouselExample');
            if (carouselEl && window.bootstrap && bootstrap.Carousel) {
                bootstrap.Carousel.getOrCreateInstance(carouselEl).to(index);
            }
        });

        //Reset carousel to the first item on modal show
        $('#imageModal').on('show.bs.modal', function () {
            var carouselEl0 = document.getElementById('carouselExample');
            if (carouselEl0 && window.bootstrap && bootstrap.Carousel) {
                bootstrap.Carousel.getOrCreateInstance(carouselEl0).to(0); // Optional: can remove this if you don't want to reset every time modal opens
            }
        });
    });

