$(document).ready(function() {

    $(".show-email").after($("<p>").attr({class:"email-text"}).html("ryanbankier88@gmail.com").hide());

    $(".icon-exp").click(function(){
        $('.exp-text').slideToggle("slow");
    });
    $(".icon-edu").click(function(){
        $('.edu-text').slideToggle("slow");
    });
    $(".icon-hob").click(function(){
        $('.hob-text').slideToggle("slow");
    });

    $(".icons-ex").mouseover(function(){
        $(this).animate({"width":"75px"},"fast")
    });
    $(".icons-ex").mouseleave(function(){
        $(this).animate({"width":"65px"},"fast")
    });

    $(".show-email").mouseover(function(){
        $(".email-text").slideToggle()
    });
    $(".show-email").mouseleave(function(){
        $(".email-text").slideToggle()
    });

    $(".vLine").mouseenter(function(){
        $(this).toggleClass("scrollTogg")
    });
    $(".vLine").mouseleave(function(){
        $(this).toggleClass("scrollTogg")
    });

    $("#xpCol").mouseenter(function(){
        $(this).toggleClass("scrollTogg1")
    });
    $("#xpCol").mouseleave(function(){
        $(this).toggleClass("scrollTogg1")
    });

    $(".show-email").mouseleave(function(){
        $(".email-text").slideToggle()
    });

});