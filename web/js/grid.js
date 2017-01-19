alert(000);
$(document).ready(
    function(){
        alert(111);
        var cells = "<div class='cell'></div>";
        //$(".canvas").html(cells + cells);
        var rows = $(".canvas").width()/40;
        // for(var i = 0;i < 15; i++){
        //     cells = cells + "<div class='cell'></div>";
        // }
        alert(2222);
        $(".canvas").html(cells);

    }
);