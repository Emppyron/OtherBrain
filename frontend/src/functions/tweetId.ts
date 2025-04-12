export function extractTweetId(url : String) {
    const match = url.match(/status\/(\d+)/);
    return match ? match[1] : "Nothing as of Now";
  }