$(document).ready(
    function(){
        var cells = "<div class='cell'></div>";
        //$(".canvas").html(cells + cells);
        for(var i = 0;i < 20; i++){
            for(var j = 0;j<9;j++){
                cells = cells + "<div class='cell'></div>";
            }
        }
        $(".canvas").html(cells);
        //$(".cell").css("position" , "absolute");
    }
);