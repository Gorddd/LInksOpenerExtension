document.getElementById('goButton').addEventListener('click', () => {
    var input = document.getElementById('urlsArea').value;
    var urls = input.split(/[ \n]+/); //separate by ' ' and '\n'
    urls.forEach(u => {
        chrome.tabs.create({url: checkURL(u)});
    });
})

function checkURL(str){
    if (!str.includes('https://') && !str.includes('http://'))
        str = 'https://' + str;
    return str;
}