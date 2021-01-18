
let inBlackList = true

const blacklist = []
const whitelist = []

// get the buttons
const blackListButton = document.getElementById('blacklist-button')
const whiteListButton = document.getElementById('whitelist-button')
const saveButton = document.getElementById('save-button')

// initially we start showing the blacklist
const showBlackList = () => {
    // remove previous elements
    removeListElements()

    inBlackList = true
    blacklist.forEach((item, index) => {
        createUrlElement(item, index)
    })
}

const showWhiteList = () => {

    // remove previous elements
    removeListElements()
    inBlackList = false
    whitelist.forEach((item, index) => {
        createUrlElement(item, index)
    })
}

const saveURL = () => {

    // get the value in the input field
    const inputFieldValue = document.getElementById('input-field').value

    // remove the value from the input field
    document.getElementById('input-field').value = ''

    // if the user saved it to the blacklist then add it to the blacklist otherwise add it to the whitelist
    inBlackList ? blacklist.push(inputFieldValue) : whitelist.push(inputFieldValue)

    // reprint the list
    inBlackList ? showBlackList() : showWhiteList()
}

const createUrlElement = (text, index) => {
    // get the parent element to store the element
    const parentDiv = document.getElementById('url-list')

    // create the url element
    const urlDiv = document.createElement('div')
    urlDiv.setAttribute('class', 'url-div')

    // create the text for the url element
    const urlText = document.createElement('p')
    urlText.setAttribute('class', 'url-text')
    urlText.innerHTML = text

    // create the button for the url element
    const urlRemoveButton = document.createElement('button')
    urlRemoveButton.setAttribute('class', 'url-remove-button')
    urlRemoveButton.innerHTML = 'Remove'

    //add the elements to the div
    urlDiv.appendChild(urlText)
    urlDiv.appendChild(urlRemoveButton)

    // append the div to the parent div
    parentDiv.appendChild(urlDiv)
}

const removeListElements = () => {
    
    // remove the previous list values from the dom
    const parent = document.getElementById("url-list")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }

    console.log('removing elements from dom')
}

blackListButton.addEventListener('click', showBlackList)
whiteListButton.addEventListener('click', showWhiteList)
saveButton.addEventListener('click', saveURL)