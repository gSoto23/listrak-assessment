$(document).ready(function() {

    $("#get-email").submit(function() {
        $(".confirmation-page").toggleClass("show-popup");
        $(".popup").toggleClass("show-popup");
    });

    $('#get-email').submit(function(event) {
        event.preventDefault();
        $(this).submit();
    });

    $(".x-cta").click(function() {
        location.reload();
    });
});