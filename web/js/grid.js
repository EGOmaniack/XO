$(document).ready(
    function(){
        var cells = "";
        //$(".canvas").html(cells + cells);
        for(var i = 0;i < 20; i++){
            for(var j = 0;j<9;j++){
                cells = cells + "<div class='cell'></div>";
            }
        }
        $(".canvas").html(cells);
        //$(".cell").css("position" , "absolute");

        $(".cell").click(function(){
            $(this).toggleClass("flip");
           var canvcells =  $(".cell");
           //console.log(canvcells.length);
           var yelcells = 0;
           for(var i =0;i<canvcells.length;i++){
               if(canvcells[i].className == "cell flip")yelcells++;
           }
           //console.log(yelcells);
           $("#selected").html(yelcells);
        });
    }
);

