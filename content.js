alert('heelo there')

function _getCurrentTab(callback){ //Take a callback
    var theTab;
    chrome.tabs.query({active:true, currentWindow:true},function(tab){
        callback(tab); //call the callback with argument
    });
};

function _displayTab(tab){ //define your callback function
    console.log(tab);
 };

 _getCurrentTab(_displayTab);