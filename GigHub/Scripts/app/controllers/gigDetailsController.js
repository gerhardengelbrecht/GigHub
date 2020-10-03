var GigDetailsController = function(followingService) {
    var followButton;

    var done = function() {
        var text = (button.text() === "Follow") ? "Following" : "Follow";

        button.toggleClass("btn-info").toggleClass("btn-default");
    }

    var fail = function() {
        alert("Something went wrong");
    }

    var init = function() {
        $("js-toggle-follow").click(toggleFollowing);

    };

    var toggleFollowing = function(e) {
        followButton = $(e.target);
        var followeeId = followButton.attr("data-user-id");

        if (followButton.hasClass("btn-default")) {
            followingService.createFollowing(followeeId, done, fail);
        } else {
            followingService.deleteFollowing(followeeId, done, fail);
        }
    };

    return {
        init: init
    }
}(FollowingService);