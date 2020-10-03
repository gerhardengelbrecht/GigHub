var GigsController = function() {

    var button;

    var createAttendance = function() {
        $.post("/api/attendances", { "gigId": button.attr("data-gig-id") })
            .done(done)
            .fail(fail);
    };

    var deleteAttendance = function() {
        $.ajax({
                url: "api/attendances" + button.attr("data"),
                method: "DELETE"
            })
            .done(done)
            .fail(fail);
    }

    var toggleAttendance = function(e) {
        button = $(e.target);

        if (button.hasClass("btn-default")) {
            createAttendance();
        } else {
            deleteAttendance();
        }

    }

    var initGigs = function() {
        $(".js-toggle-attendance").click(toggleAttendance);
    };

    var toggleFollows = function(e) {

        button = $(e.target);

        $.post("/api/followings", { "followeeId": button.attr("js-toggle-follow") })
            .done(function() {
                butt.text("Following");
            })
            .fail(fail);

    }

    var initFollows = function() {
        $(".js-toggle-follow").click(toggleFollows);
    }

    return {
        initGigs: initGigs,
        initFollows: initFollows
    }
}();