


        document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('marquee').forEach(function (m) {
                m.addEventListener('mouseover', function () { m.stop(); });
                m.addEventListener('mouseleave', function () { m.start(); });
            });
            document.querySelectorAll('[data-open-url]').forEach(function (el) {
                el.addEventListener('click', function () {
                    window.open(this.getAttribute('data-open-url'), '_blank');
                });
            });
            document.querySelectorAll('[data-load-content]').forEach(function (el) {
                el.addEventListener('click', function () {
                    if (typeof loadContent === 'function') { loadContent(this.getAttribute('data-load-content')); }
                });
            });
        });

    