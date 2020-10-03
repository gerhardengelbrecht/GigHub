var GigsController = function() {

    var button;

    var toggleFollows = function(e) {

        button = $(e.target);

        $.post("/api/followings", { "followeeId": button.attr("js-toggle-follow") })
            .done(function() {
                butt.text("Following");
            })
            .fail(alert("Something went wrong."));
    }

    var init = function() {
        $(".js-toggle-follow").click(toggleFollows);
    }

    return {
        init: init
    }


}();