
$(document).ready(function() {
    $('.slider').slider();  
});
     
        
$(document).ready(main);

let count = 1;

function main() {
    $('.bt-menu').click(function (e) {
        e.preventDefault();

        console.log("boton pulsado")

        if (count == 1) {
            $(".xs-menu").animate({
                left: "0"
            });
            count = 0;
        } else {
            count = 1;
            $(".xs-menu").animate({
                left: "-100%"
            });
        }

    });
}


