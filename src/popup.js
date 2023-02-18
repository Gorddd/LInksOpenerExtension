document.getElementById('goButton').addEventListener('click', () => {
    var input = document.getElementById('urlsArea').value;
    chrome.tabs.create({url: input});
})