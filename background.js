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

    return {
      cancel: true,
    };
  },
  filter,
  webRequestFlags,
);