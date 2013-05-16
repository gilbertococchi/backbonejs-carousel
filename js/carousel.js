(function(){

    window.Carousel = function() {

        var Model = Backbone.Model.extend({
            defaults : {
                animation : {
                    delay : 3000,
                    enabled : true
                },
                busy : false,
                index : 0,
                loop : false,
                orientation : {
                    horizontal : true,
                    vertical : false
                },
                position : {
                    offset : 0,
                    x : 0,
                    y : 0
                },
                lastIndex : 0,
                slides : [],
                time : 1000,
                visibleSlides : 3
            },

            addSlide : function(_slide) {

                var slide = _slide;
                slide.id = this.get('slides').length;
                slide.loaded = false;

                console.log('Model addSlide', slide);

            }

        });

        var View = Backbone.View.extend({

            defaults : {

            },

            // slide manipuliation start
            addSlide : function(slide) {
                this.model.addSlide(slide);
            },
            getSlide : function() {

            },
            editSlide : function() {

            },
            removeSlide : function() {

            },
            // slide manipuliation end

            // slideshow auto-animation control
            start : function() {

            },
            stop : function() {

            },
            toggle : function() {

            }

        });


        return new View({
            model : new Model()
        });
    };


})();

