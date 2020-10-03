using GigHub.Repositories;

namespace GigHub.Persistence
{
    public interface IUnitOfWork
    {
        IAttendanceRepository Attendances { get; }
        IGigRepository Gigs { get; }
        IFollowingRepository Followings { get; }
        IGenreRepository Genres { get; }
        void Complete();
    }
}