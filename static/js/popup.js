let colorPick = document.querySelector('.colorPick');
let btnColor = document.querySelector('#btn-color');
let btnOld = document.querySelector('#btn-old');
let formUpload = document.querySelector('#formUpload');
let urlPhoto = document.querySelector('#urlPhoto');

colorPick.addEventListener('click', e => {
    btnColor.style.backgroundColor = e.target.getAttribute('id');
});

btnColor.addEventListener('click', e => {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        let msg = {
            type: 'color',
            color: btnColor.style.backgroundColor
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
        window.close();
    });
});

btnOld.addEventListener('click', e => {
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        let msg = {
            type: 'older',
            theme: 'old'
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
        window.close();
    });
});

formUpload.addEventListener('submit', e => {
    e.preventDefault();
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        let msg = {
            type: 'photo',
            url: urlPhoto.value
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
        window.close();
    })
});