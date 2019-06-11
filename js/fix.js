var hideHeaderControls = true;

function displayControl(){

    if(hideHeaderControls){
        
        $('header .container > div').fadeOut();

        $('header input').css({
            "border": "0",
            "padding": "0",
            "height": "0"
        })

    }else{
        
        $('header .container > div').fadeIn();

        $('header input').css({
            "border": "1px",
            "padding": "10px 10px 10px 10px",
            "height": "40"
        })
        $('header input[type="text"]').css({
            "padding-left": "40px"
        })

    }

}

$(document).ready(function(){
    
    $('header .container > div').hide();

    $('#subscribe-btn').click(function(){
        hideHeaderControls = !hideHeaderControls
        displayControl(hideHeaderControls);
    });

});