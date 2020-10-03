﻿using GigHub.Models;
using GigHub.Repositories;

namespace GigHub.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public IAttendanceRepository Attendances { get; private set; }
        public  IGigRepository Gigs { get; private set; }
        public  IFollowingRepository Followings { get; private set; }
        public  IGenreRepository Genres { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Attendances = new AttendanceRepository(context);
            Gigs = new GigRepository(context);
            Followings = new FollowingRepository(context);
            Genres = new GenreRepository(context);
        }

        public void Complete()
        {
            _context.SaveChanges();
        }
    }
}