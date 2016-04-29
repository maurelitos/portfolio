(function() {
    var app = {
        activeSlide: '',
        initialize: function initialize() {
            this.bindUI();
            this.bindEvents();
        },

        bindUI: function bindUI() {
            this.ui = {};
            this.ui.$body = $('body');
            this.ui.projectLinks = '.js-project-link';
            this.ui.$projectThumbs = $('.js-project-thumb');
        },

        bindEvents: function bindEvents() {
            this.ui.$body.on('mouseenter mouseleave', this.ui.projectLinks, this.handleMouseLinks.bind(this));
        },

        handleMouseLinks: function handleMouseLinks(e) {
            var $currentTarget = $(e.currentTarget),
                name = $currentTarget.data('name');

            switch(e.type) {
                case "mouseenter":
                    $(this.ui.projectLinks).addClass('is-disabled');
                    $currentTarget.removeClass('is-disabled');

                    this.showProjectThumbnail(name);
                    break;
                case "mouseleave":
                    $(this.ui.projectLinks).removeClass('is-disabled');

                    this.hideProjectThumbnails();
                    break;
                default:
                    break;
            }
        },

        hideProjectThumbnails: function hideProjectThumbnails() {
            this.ui.$projectThumbs.removeClass('is-active');
        },

        showProjectThumbnail: function showProjectThumbnail(name) {
            this.ui.$projectThumbs.filter('[data-name="' + name + '"]').addClass('is-active');
        }
    };

    $(document).ready(function(){ 
        app.initialize();
    });

})(jQuery, window);