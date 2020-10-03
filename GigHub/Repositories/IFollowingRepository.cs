namespace GigHub.Repositories
{
    public interface IFollowingRepository
    {
        bool GetFollowing(string artistId, string userId);
    }
}