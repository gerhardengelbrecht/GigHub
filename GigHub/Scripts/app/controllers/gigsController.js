var GigsController = function(attendanceService) {

    var button;

    var toggleAttendance = function(e) {
        button = $(e.target);

        var gigId = button.attr("data-gig-id");

        if (button.hasClass("btn-default")) {
            attendanceService.createAttendance(gigId, done, fail);
        } else {
            attendanceService.deleteAttendance(gigId, done, fail);
        }

    }

    var initGigs = function() {
        $(".js-toggle-attendance").click(toggleAttendance);
    }

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

}(AttendanceService);