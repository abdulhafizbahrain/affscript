let localAddress
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

function Data(){
    const index = Math.round(Math.random() * (data.length - 2) + 1);
    return 'https://shope.ee/' + data[index];
}

if(document.querySelector('#id') != null){
    document.querySelector('#id').addEventListener('click', function(){
        document.querySelector('#id').href = Data();
    })
}

function linkRedirect(timeOut = 1000){
    setTimeout(function(){
        window.location = Data();
    }, timeOut);
}

function alertRedirect(timeOut = 1000, message = "Click OK to continue !"){
    setTimeout(function(){
        alert(message);
        window.location = Data();
    }, timeOut);
}

console.log(Data());
console.log('berhasil');