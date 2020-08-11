console.log('Extension Cargada');


const tema1 = {

    '.flex-property': {
        flexDirection: 'row !important'
    },
    '.content': {
        backgroundColor: 'transparent !important',
        border: 'none !important',
        boxShadow: 'none !important',
        lineHeight: '1px',
        fontSize: '15px !important'
    },
    '.arrow-chat': {
        display: 'none !important'
    },
    '.timeStamp': {
        display: 'none !important'
    },
    '.userItem': {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'steelblue',
        fontSize: '15px'
    },
    '#container': {
        backgroundColor: 'lightblue !important'
    },
    '#footer': {
        backgroundColor: 'lightblue !important',
        padding: '4px !important'
    },
    '.nav-tabss': {
        display: 'flex !important',
        alignItems: 'flex-end',
        padding: 0,
        border: 0,
        flexWrap: 'wrap',
        backgroundColor: 'lightblue'
    },
    '.nav > li': {
        backgroundColor: 'white',
        borderRadius: '10px 10px 0 0',
        marginTop: '5px'
    },
    '.nav > li > a': {
        border: 'none'
    },
    '#send-msg-btn': {
        position: 'absolute !important',
        zIndex: '100 !important',
        marginRight: '5px !important',
        bottom: '20px !important',
        right: '10px !important',
        background: 'linear-gradient(#eeeeee 50%, aliceblue 70%)',
        fontWeight: 'bolder',
        border: '1px solid grey',
        color: 'black',
        borderRadius: '5px'
    },
    '#headerr': {
        width: '100%',
        backgroundColor: 'aliceblue',
        height: '50px !important',
        borderBottom: '1px solid #ebebeb !important',
        paddingRight: '20px !important',
        paddingLeft: '20px !important',
        alignItems: 'center'
    },
    '#usersContainer .nav-pills>li.active>a': {
        background: 'white !important'
    },
    '#usersContainer .nav-pills>li>a': {
        borderRadius: '10px 10px 0 0 !important',
        border: '1px solid lightgray !important'
    },
    '.emojionearea .emojionearea-editor:empty:before': {
        padding: '7px'
    },
    '#chatInputContainer ': {
        height: '125px'
    },
    '.nav-pills': {
        backgroundColor: 'lightblue'
    },
    '.emojionearea': {
        borderRadius: '0',
        border: '1px solid lightgray',
        background: 'radial-gradient(#fbffff, aliceblue)'
    },
    '.focused': {
        boxShadow: 'none',
        border: '1px solid lightgray'
    },
    '.emojionearea-editor': {
        borderTop: '1px solid lightgray !important',
        backgroundColor: 'white !important'
    },
    '.textarea-icons-wrapper': {
        top: '10px'
    },
    '.header-chat-logo > a > img': {
        borderRadius: '9999px'
    },
    '#usersContainer .tab-content': {
        height: '100% !important'
    },
    '.emojionearea-editor:focus': {
        fontSize: '20px'
    },
    '#usersContainer .nav-pills>li>a ': {
        color: 'transparent'
    },
    '#usersContainer .nav-pills>li.active>a': {
        color: 'transparent'
    },
    '#usersContainer li a': {
        fontSize: 0
    },
    '#usersContainer2': {
        backgroundColor: 'lightblue'
    },
    '.myUsername': {
        marginLeft: '10px !important'
    },
    '.tab-content': {
        border: 'none !important'
    },
    '.focused': {
        border: 'none !important'
    },
    '.search-bar': {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderBottom: '2px dotted yellow',
        borderTop: '2px dotted yellow'
    }
};

const formatString = x => {
    let y = x.search(/[A-Z]/);
    if (y < 0) return x.toLowerCase();
    let h = x.split('');
    h.splice(y, 0, '-');
    return h.join('').toLowerCase();
}

const createString = x => {
    let y = '';
    for (let i in x) {
        y += `${i}{`;
        for (let j in x[i]) {
            y += `${formatString(j)}`;
            y += ':';
            y += `${x[i][j]}`;
            y += ';';
        }
        y += '}';
    }
    return y;
}

const modifDetalles = () => {
    //let item = document.querySelectorAll('.nav-tabs');
    let item2 = document.querySelector('#marqueeContainer');
    let item4 = document.querySelector('#myAvatar');
    let item5 = document.querySelector('#usersContainer');
    document.querySelector('.dropdown').innerHTML = '<h1 style="font-weight:bold;">EL CHAT</h1>'
    document.querySelector('#header').setAttribute('id', 'headerr');
    document.querySelector('#sortWebcamtBtn').style.visibility = 'hidden';
    document.querySelector('#sortBtn').style.visibility = 'hidden';
    document.querySelector('.users-info').children[1].style.visibility = 'hidden';
    document.querySelector('.slide_block').style.display = 'none';
    //document.querySelector('#searchInput').parentNode.remove();
    document.querySelector('.users-info').parentNode.remove();
    document.querySelector('#roomsBtn').style.visibility = 'hidden';
    document.querySelectorAll('.header-btn-wrap')[2].children[1].style.width = '5px';
    document.querySelectorAll('.header-btn-wrap')[3].children[1].style.width = '5px';
    document.querySelector('#backgroundBtnContainer').style.visibility = 'hidden';
    document.querySelector('#usersContainer2').style.backgroundImage = '';
    document.querySelector('.myUsername').parentElement.remove();
    //item[0].classList.remove('nav-tabs');
    //item[0].classList.add('nav-tabss');
    item2.style.display = 'none';
    item5.insertBefore(item4, item5.children[2]);
    localStorage.setItem('background', '');
}

const aplicarTema = tema => {
    let style = document.getElementsByTagName('style')[0];
    let cadena = createString(tema);
    style.innerHTML = cadena;
    modifDetalles();
}

const compose = (...fnc) => x => fnc.reduceRight((acc, fn) => fn(acc), x);

const verifUrl = x => {
    const regexp = /(^(^(^http(s)?)|^((.jpg|.png|.gif)$)))/;
    return [x, regexp.test(x)];
}

const searchIndex = x => [x, x.search(/\:/) + 1];

const createArr = x => [x[0].split(''), x[1]];

const spliceArr = x => {
    let i = [].concat(x[0]);
    i.splice(0, x[1]);
    return i;
}

const joinArr = x => x.join('');

const formatUrl = x => {
    if (!x[1]) return null;
    return compose(joinArr, spliceArr, createArr, searchIndex)(x[0]);
}

const createElement = x => ([document.createElement(x[0]), x[1]]);

const insertHTML = x => {
    x[0].innerHTML += x[1];
    return x[0];
}

const addElementToBody = x => document.body.insertBefore(x, document.body.firstChild);

const aplicarFoto = x => {
    let formatedURL = formatUrl(verifUrl(x));
    if (!formatedURL) return null;
    let script = `chatHTML5.myUser.image = "${formatedURL}"`;
    compose(addElementToBody, insertHTML, createElement)(['script', script]);
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.type) {
        case 'color':
            document.querySelector('#colorPicker').value = msg.color;
            break;
        case 'older':
            aplicarTema(tema1);
            break;
        case 'photo':
            aplicarFoto(msg.url);
            break;
        default:
            console.log('dato invalido');
    }
});