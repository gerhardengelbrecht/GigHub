using GigHub.Models;
using GigHub.Repositories;

namespace GigHub.Persistence
{
    public class UnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public IAttendanceRepository Attendances { get; private set; }
        public  IGigRepository Gigs { get; private set; }
        public  IFollowingRepository Followings { get; private set; }
        public  IGenreRepository Genres { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Complete()
        {
            _context.SaveChanges();
        }
    }
}