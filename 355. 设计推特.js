/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.users={}
    this.feeds={}
    this.times=0;
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.feeds[tweetId]={
        posterId:userId,
        tweetId,
        time:++this.times
    }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let user=this.users[userId]
    if(!user){
        user=this.users[userId]={
            userId:userId,
            followUsers:{}
        }
    }
    const sortedFeeds=Object.values(this.feeds).sort((a,b)=>{
        return b.time-a.time;
    })
    return sortedFeeds.filter((feed)=>{
        return feed.posterId===userId||user.followUsers[feed.posterId]
    }).slice(0,10).map(item=>item.tweetId)
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(followerId===followeeId) return;
    let follower=this.users[followerId];
    if(!follower){
        follower=this.users[followerId]={
            userId:followerId,
            followUsers:{}
        }
    }
    follower.followUsers[followeeId]=true;
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let follower=this.users[followerId];
    if(follower){
        delete follower.followUsers[followeeId]
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
