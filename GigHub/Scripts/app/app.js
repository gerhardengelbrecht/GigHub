var GigsController = function() {

    var button;

    var toggleAttendance = function(e) {
        var fail = function() {
            alert("Something failed");
        };

        var done = function() {
            var text = (button.text() == "Going") ? "Going?" : "Going";

            button.toggleClass("btn-info").toggleClass("btn-default");
        }

        button = $(e.target);

        if (button.hasClass("btn-default")) {
            $.post("/api/attendances", { "gigId": button.attr("data-gig-id") })
                .done(done)
                .fail(fail);
        } else {
            $.ajax({
                    url: "api/attendances" + button.attr("data"),
                    method: "DELETE"
                })
                .done(done)
                .fail(fail);
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