$(document).ready(function() {

    $(".show-email").after($("<p>").attr({class:"email-text"}).html("ryanbankier88@gmail.com").hide());
    /* hides or shows the infomation depending on which icon is clicked*/
    $(".icon-exp").click(function(){
        $('.exp-text').slideToggle("slow");
    });
    $(".icon-edu").click(function(){
        $('.edu-text').slideToggle("slow");
    });
    $(".icon-hob").click(function(){
        $('.hob-text').slideToggle("slow");
    });
    
    /* animates each icon if the mouse moves over it*/
    $(".icons-ex").mouseover(function(){
        $(this).animate({"width":"75px"},"fast")
    });
    $(".icons-ex").mouseleave(function(){
        $(this).animate({"width":"65px"},"fast")
    });
    
    /* shows the email address if the mouse is over the email link*/
    $(".show-email").mouseover(function(){
        $(".email-text").slideToggle()
    });
    $(".show-email").mouseleave(function(){
        $(".email-text").slideToggle()
    });
    
    /* shows/ hides the scroll bar depending which section the mouse is over*/
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
