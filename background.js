const filter = {
  urls: [
    '*://*/*',
  ],
}

const webRequestFlags = [
  'blocking',
];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);
    if(page.url.includes('youtube')){
        return {cancel: false};
    }else{
        return {cancel: true};   
    }
  },
  filter,
  webRequestFlags,
);