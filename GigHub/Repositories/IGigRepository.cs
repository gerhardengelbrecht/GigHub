using System.Collections.Generic;
using GigHub.Models;

namespace GigHub.Repositories
{
    public interface IGigRepository
    {
        Gig GetGigWithAttendees(int gigId);
        List<Gig> GetGigsUserAttending(string userId);
        Gig GetGig(int id);
        List<Genre> GetGenres();
        List<Gig> GetUpcomingGigsByArtist(string userId);
        void Add(Gig gig);
    }
}