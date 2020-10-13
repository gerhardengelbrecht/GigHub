using AutoMapper;
using GigHub.Core;
using GigHub.Core.Dtos;
using GigHub.Core.Models;
using Microsoft.AspNet.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace GigHub.Controllers.Api
{
    [Authorize]
    public class NotificationsController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public NotificationsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IEnumerable<NotificationDto> GetNewNotifications()
        {
            var userId = User.Identity.GetUserId();
            // var notifications = _context.UserNotifications
            //     .Where(un => un.UserId == userId && !un.IsRead)
            //     .Select(un => un.Notification)
            //     .Include(n => n.Gig.Artist)
            //     .ToList(); // ToDo: fix

            var notifications = new List<Notification>();

            return notifications.Select(Mapper.Map<Notification, NotificationDto>);
        }

        [HttpPost]
        public IHttpActionResult MarkAsRead()
        {
            var userId = User.Identity.GetUserId();
            // var notifications = _context.UserNotifications
            //     .Where(un => un.UserId == userId && !un.IsRead)
            //     .ToList(); // ToDo: fix

            //notifications.ForEach(n => n.Read());

            _unitOfWork.Complete();

            return Ok();
        }
    }
}
