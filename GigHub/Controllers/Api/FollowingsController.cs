using GigHub.Core;
using GigHub.Core.Dtos;
using GigHub.Core.Models;
using Microsoft.AspNet.Identity;
using System.Web.Http;

namespace GigHub.Controllers.Api
{
    [System.Web.Http.Authorize]
    public class FollowingsController : ApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public FollowingsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [System.Web.Http.HttpPost]
        public IHttpActionResult Follow(FollowingDto dto)
        {
            var userId = User.Identity.GetUserId();

            // if (_context.Followings.Any(f => f.FollowerId == userId && f.FolloweeId == dto.FolloweeId)) // ToDo: fix
            // {
            //     return BadRequest("Following already exists.");
            // }

            var following = new Following
            {
                FolloweeId = userId,
                FollowerId = dto.FolloweeId
            };

            // _context.Followings.Add(following);
            _unitOfWork.Complete();

            return Ok();
        }

        [System.Web.Http.HttpDelete]
        public IHttpActionResult Unfollow(string id)
        {
            var userId = User.Identity.GetUserId();

            // var following = _context.Followings.SingleOrDefault(f => f.FollowerId == userId && f.FolloweeId == id); // ToDo: Fix
            var following = new Following();

            if (following == null)
            {
                return NotFound();
            }

            //_context.Followings.Remove(following);
            _unitOfWork.Complete();

            return Ok();
        }
    }
}
