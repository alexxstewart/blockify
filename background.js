const filter = {
  urls: [],
}

let inBlacklist = true

let whitelist = []
let blacklist = []

const webRequestFlags = [
  'blocking',
];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    //we first want to check if we are in whitelist or blacklist mode
    if(inBlacklist){
        // block all the urls that are in the blacklist
        blacklist.forEach((item) => {
            if(page.url.includes(item)){
                return {cancel: true}
            }
        })
    }else{
        // check that the url is in the whitelist
        let flag = true
        whitelist.forEach((item) => { page.url.includes(item) ? flag = false : null
        })

        // if the flag has been made false then we allow the request otherwise block it
        if(flag){
            return {cancel: true}
        }else{
            return {cancel: false}
        }
    }
  },
  filter,
  webRequestFlags,
);

chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        if(msg.type === 'blacklist'){
            inBlacklist = true
            blacklist = msg.list
        }else if(msg.type === 'whitelist'){
            inBlacklist = false
            whitelist = msg.list
        }
    });
})