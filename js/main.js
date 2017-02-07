$(document).ready(function(){

   // **** GADIENTIFY ****
   //  $('main').gradientify({
   //      gradients: [
   //          { start: [49,76,172], stop: [242,159,191] },
   //          { start: [255,103,69], stop: [240,154,241] },
   //          { start: [33,229,241], stop: [235,236,117] }
   //      ]
   //  });

    // **** UI ANIMATIONS ****

    // ** HOME BUTTON **
    $('#home-btn').click(function(){
       $('#intro').show();
       $('#carte').hide();
       $('#ou-nous-trouver').hide();
       $('#evenements-prives').hide();
       $('#a-propos').hide();

        $('#foodtruck').transition({'margin-left': 0}, 750, 'easeInBack')
    });

    // ** CARTE BUTTON **
    $('#carte-btn').click(function(){
        $('#intro').hide();
        $('#carte').show();
        $('#ou-nous-trouver').hide();
        $('#evenements-prives').hide();
        $('#a-propos').hide();

        $('#foodtruck').transition({'margin-left': '15%'}, 750, 'easeInBack')
    });

    // ** TROUVER BUTTON **
    $('#trouver-btn').click(function(){
        $('#intro').hide();
        $('#carte').hide();
        $('#ou-nous-trouver').show();
        $('#evenements-prives').hide();
        $('#a-propos').hide();

        $('#foodtruck').transition({'margin-left': '30%'}, 750, 'easeInBack')
    });

    // ** PRIVES BUTTON **
    $('#prives-btn').click(function(){
        $('#intro').hide();
        $('#carte').hide();
        $('#ou-nous-trouver').hide();
        $('#evenements-prives').show();
        $('#a-propos').hide();

        $('#foodtruck').transition({'margin-left': '55%'}, 750, 'easeInBack')
    });

    // ** APROPOS BUTTON **
    $('#apropos-btn').click(function(){
        $('#intro').hide();
        $('#carte').hide();
        $('#ou-nous-trouver').hide();
        $('#evenements-prives').hide();
        $('#a-propos').show();

        $('#foodtruck').transition({'margin-left': '70%'}, 750, 'easeInBack')
    });

});