
$(document).ready(function() {
    $('.slider').slider();  
});
     
//Menu vista responsive        
$(document).ready(main);

let count = 1;

function main() {
    $('.bt-menu').click(function (e) {
        e.preventDefault();

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


