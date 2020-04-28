$("a.stack").on("click", function(){
    $("article").addClass("stack");
});
$("a.grid").on("click", function(){
    $("article").removeClass("stack");
});

$("#hamburger").on("click", function(){
    $("#nav").toggleClass("nav");
})