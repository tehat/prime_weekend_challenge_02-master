var arrayOfPeers = [];

var indexTracker = 0;

var array;






$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "/data",

        success: function(data){
            //console.log("first")

            arrayOfPeers = data.zeta;
            appendDom();
            createCarousel(arrayOfPeers);

        }

    });



    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);

});




function appendDom() {

    for (var i = 0; i < arrayOfPeers.length; i++) {
        //console.log('forloop');
        var classmate = arrayOfPeers[i];

        var el = "<div class='classmate text-center well'>" +
            "<div >" + classmate.name + "</div>" +
            "<div >" + classmate.github + "</div>" +
            "<div >" + classmate.shoutout + "</div>" +
            "</div>";


            if (indexTracker == i) {
                $('#mainContent').append(el);
            }

    }
}




function createCarousel() {
    $("#profile").append("<div class='main'></div>");
    var $el = $("#profile").children().last();

    createIndexPoints($el);
    createNavButtons($el);


}


function createNavButtons($el) {
    $el.prepend("<div id='prev' class='nav-button btn btn-info'><</div>");
    $el.append("<div id='next' class='nav-button btn btn-info'>></div>");

}

function createIndexPoints($el){
    //create something visual, Divs will work

    for(var i = 0; i < arrayOfPeers.length; i++){
        $el.append("<div class='index-point' id='index" + i + "'></div>");
    }
}

function updateIndexPoints(){
    for(var i = 0; i < arrayOfPeers.length; i++){
        $("#index" + i).removeClass("index-point-active main");

        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active main");

        }

    }
}

//function appendPerson(){
//    for(var i = 0; i < arrayOfPeers.length; i++){
//        $('#mainContent').remove('#person' + i);
//        if(i == indexTracker){
//            $('#mainContent').append('#person' + i);
//        }
//    }
//
//
//}



function nextSlide(){
    indexTracker++;
    if(indexTracker >= arrayOfPeers.length){
        indexTracker = 0;
    }
    updateIndexPoints();
    appendDom();

}

function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = arrayOfPeers.length - 1;
    }

    updateIndexPoints();
    appendDom();
}


