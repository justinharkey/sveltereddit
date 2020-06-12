import { handleStatus, toJson } from './serviceBase';

export const getSubredditPosts = (subredditName) => {
    const subreddit = subredditName || null;
    let fetchUrl = `https://www.reddit.com/r/${subreddit}.json`;
    fetch(fetchUrl, { method: 'get', cache: 'force-cache' })
    .then(handleStatus)
    .then(toJson)
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log('Request failed', error);
    });
}