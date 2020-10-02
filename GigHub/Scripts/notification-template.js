//<%
_.each(notifications,
    function(notification) {
        if (notification.type === 1) {
            //%>
            //<li><span class="highlight"><%= notification.gig.artist.name %></span> has canceled the gig at <%= notification.gig.venue %> as <%= moment(notification.gig.datetime).format("D MMM HH:mm") %></li>
            //<%
        } else if (notification.type === 2) {
            var changes = [],
                originalValues = [],
                newValues = [];

            if (notification.originalValue !== notification.gig.venue) {
                changes.push('venue');
                originalValues.push(notification.orignalVenue);
                newValues.push(notification.gig.venue);
            }

            if (notification.orginalDateTime !== notification.gigId.dateTime) {
                changes.push('date/time');
                originalValues.push(moment(notification.originalDateTime).format("D MMM HH:mm"));
                newValues.push(moment(notification.gig.dateTime).format("D MMM HH:mm"));
            }
            //%>
            //<li <span class="highlight"><% notification.gig.artist.name %></span> has changed the <%= changes.join(' and ') of the gig from <%= originalValues.join('/') %> to <%= newValues.join('/') %> </li> 
            //%>
        }
    });
//%>