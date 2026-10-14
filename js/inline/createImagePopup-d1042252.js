
    $(document).ready(function () {
        let currentSlide = 0;
        var totalnewsides = 0;
        $('.slider').on('click', function (event) {
            const clickedDiv = $(this);
            const imgSrc = clickedDiv.find('img');
            const ImageId = imgSrc.attr('id');
            let popupShown = false;

            $.ajax({
                type: "POST",
                url: "/PCBLive/PCB/GetGalleryImgs",
                data: { ImageId: ImageId },
                success: function (response) {
                    if (response.length > 0) {
                        var imageSrcs = [];
                        var imageids = [];
                        for (var i = 0; i < response.length; i++) {
                            var image = response[i].uploadPath;
                            var imageid = response[i].displayImageID;

                            imageSrcs.push(image);
                            imageids.push(imageid);

                        }
                        createImagePopup(imageSrcs, imageids);
                    }
                },
                failure: function (response) {
                    alert(response);
                }
            });
            if (popupShown) {
                $('#popupOverlay').show();
            } else {
                $('#popupOverlay').hide();
            }
        });

        function createImagePopup(imageSrcs, imageids) {
            // Create a container for the popup images
            var popupContainer = $('<div class="popup-images"></div>');
            popupContainer.appendTo('body');

            // Create a close button
            var closeButton = $('<button class="close-button">X</button>');
            closeButton.appendTo(popupContainer);

            // Create a slider for the images
            var imageSlider = $('<div class="image-slider"></div>');
            imageSlider.appendTo(popupContainer);

            // Add the images to the slider
            for (var i = 0; i < imageSrcs.length; i++) {
                var image = $('<img src="' + imageSrcs[i] + '"id="' + imageids[i] + '">');
                image.appendTo(imageSlider);
            }

            // Add navigation buttons
            var prevButton = $('<button class="prev-button">&lt;</button>');
            prevButton.appendTo(popupContainer);

            var nextButton = $('<button class="next-button">&gt;</button>');
            nextButton.appendTo(popupContainer);

            // Add event listeners for navigation
            prevButton.on('click', function () {
                navigateImages(-1);
            });

            nextButton.on('click', function () {
                navigateImages(1);
            });

            // Add event listener for close button
            closeButton.on('click', function () {
                popupContainer.remove();
                $('#popupOverlay').hide();
            });

            // Show the first image
            showImage(0);

            // Function to navigate images
            function navigateImages(direction) {
                currentSlide += direction;
                if (currentSlide < 0) {
                    currentSlide = imageSrcs.length - 1;
                } else if (currentSlide >= imageSrcs.length) {
                    currentSlide = 0;
                }
                showImage(currentSlide);
            }

            // Function to show an image
            function showImage(index) {
                imageSlider.find('img').hide();
                imageSlider.find('img').eq(index).show();
            }
        }

        $('#next').on('click', function (event) {
            event.preventDefault();
            currentSlide = (currentSlide + 1) % totalnewsides;
            updateSlidePosition();
        });

        $('#prev').on('click', function (event) {
            event.preventDefault();
            currentSlide = (currentSlide - 1 + totalnewsides) % totalnewsides;
            updateSlidePosition();
        });

        function updateSlidePosition() {
            const offset = -currentSlide * 100;
            $('.slides').css('transform', `translateX(${offset}%`)
        }

        function updateSlidePosition() {
            const offset = -currentSlide * 100;
            $('.slides').css('transform', `translateX(${offset} %)`);
        }

        $('#closePopup').on('click', function () {
            $('#popupOverlay').hide();
            $('#tablePopup').hide();
        });
    });
