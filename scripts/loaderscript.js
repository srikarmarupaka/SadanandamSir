
$(function(){
    // Loading all the sections and utilities
    $("[data-load]").each(function(){
        $(this).load($(this).data("load"), function(){
        });
    });
})