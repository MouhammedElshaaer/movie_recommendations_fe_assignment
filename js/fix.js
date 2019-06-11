var hideHeaderControls = true;

function displayControl(){

    if(hideHeaderControls){
        console.log('if');
        $('header input').css({
            "border": "0",
            "padding": "0",
            "height": "0"
        })

    }else{
        console.log('else');
        $('header input').css({
            "border": "1px",
            "padding": "10px 10px 10px 10px",
            "height": "40"
        })

    }

}

$(document).ready(function(){
    
    displayControl(!hideHeaderControls);

    $('#subscribe-btn').click(function(){
        console.log('else');
        hideHeaderControls = !hideHeaderControls
        displayControl(hideHeaderControls);
    });

});