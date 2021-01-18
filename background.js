const filter = {
  urls: [
    '*://*/*',
  ],
}

const whitelist = ["youtube", "google", "wikipedia", "stackoverflow", "quora", "freecodecamp", "github", "goodreads"]

const webRequestFlags = [
  'blocking',
];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);
    // check that the url is in the whitelist
    console.log(typeof page.url)
    let flag = true
    whitelist.forEach((item) => { page.url.includes(item) ? flag = false : null
    })
    console.log(flag)
    // if the flag has been made false then we allow the request otherwise block it
    if(flag){
        return {cancel: true}
    }else{
        return {cancel: false}
    }
  },
  filter,
  webRequestFlags,
);