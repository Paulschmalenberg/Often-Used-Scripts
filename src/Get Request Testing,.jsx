const createCORSRequest = function (method, url) {
  let xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    // Most browsers.
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest !== 'undefined') {
    // IE8 & IE9
    xhr = new XDomainRequest()
    xhr.open(method, url)
  } else {
    // CORS not supported.
    xhr = null
  }
  return xhr
}

const url = 'https://secure2.chambermaster.com/api/associations(2490)/events'
const method = 'GET'
const xhr = createCORSRequest(method, url)

xhr.onload = function () {
  // Success code goes here.
  console.log('Success')
}

xhr.onerror = function () {
  // Error code goes here.
  console.log('Error')
}

xhr.setRequestHeader('X-ApiKey', '3cb27b0d-2426-4abb-b778-8b1d00d924bf')
