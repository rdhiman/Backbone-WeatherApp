(function($) {
    window.Doc = Backbone.Model.extend({
        defaults : {
            id : '???',
            title : 'Le titre de mon modèle',
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ipsum nec porta dignissim. Donec a elementum magna. Donec sagittis magna eu nulla ullamcorper dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam volutpat felis vehicula, congue mi at, lobortis dolor.',
            keywords : 'lorem ipsum dolor sit amet'
        },
        initialize : function Doc() {
            console.log('Doc Constructor');
        }
    });
})(jQuery);	
