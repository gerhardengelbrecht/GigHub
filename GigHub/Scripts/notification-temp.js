//<%
_.each(notifications,
    function(notification) {
        if (notification.type === 0) {
            //%>
            //<li>No new notifications</li>
            //<%
        }
        if (notification.type === 1) {
            //%>
            //<li><%= notification.gig.artist.name %>has canceled the gig at <%= notification.gig.venue %> as <%= notification.gig.datetime %></li>
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
                originalValues.push(notification.originalDateTime);
                newValues.push(notification.gig.dateTime);
            }
            //%>
            //<li <% notification.gig.artist.name %> has changed the <%= changes.join(' and ') of the gig from <%= originalValues %> to <%= newValues %> </li> 
            //%>
        }
    });
//%>