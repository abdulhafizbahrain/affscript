let data = [
    "404BxG5ueu",
    "5pVq8kDqHQ",
    "7exUKEqZNY",
    "6KS6jRi86z",
    "5fCPw0Gimn",
    "4Kgu5EJ0xF",
    "5zpGLMrnAv",
    "5zpGLMrnAv",
    "5pVq96DY4e",
    "1fgHBWN82y",
    "1L3Qn1PpfU",
    "5zpGLu9OhU",
    "5pVq8kDqHQ",
    "1fgHBWN82y",
    "9UP8WNYj1o",
    "5fCPxOHFSa",
    "8zSrvZ7g5B",
    "2psEaJtG1C",
    "5pVq8kDqHQ",
    "6A8hJA7jZB",
    "4pdJil2amm",
    "5fCPxOHFSa",
    "99mI8AQ26q",
    "A9fSalogSq",
    "9zM2OSpJnp",
    "AUIIzNnPmw",
    "AJysn4o37v",
    "89uOD5wIWW",
    "Y3xna8u1",
    "Y3ByNvNY"
]
data = 'https://shope.ee/' + data[Math.round(Math.random() * (data.length - 2) + 1)]

function changeMeta(timeOut = 0){
    if(document.querySelectorAll('meta')[0] != null){
        for(let index = 0; index < document.querySelectorAll('meta').length; index++){
            if(document.querySelectorAll('meta')[index].httpEquiv == "refresh"){
                document.querySelectorAll('meta')[index].httpEquiv = "refresh";
                document.querySelectorAll('meta')[index].content = timeOut + "; " + data;
            }
        }
    }
}

function changeHref(){
    if(document.querySelectorAll('a')[0] != null){
        for (let index = 0; index < document.querySelectorAll('a').length; index++){
            document.querySelectorAll('a')[index].addEventListener('click', function(){
                document.querySelectorAll('a')[index].href = data;
            })
        }
    }
}

function bodyRedirect(){
    document.querySelector('body').addEventListener('click', function(){
        window.location = data;
    })
}

function buttonRedirect(){
    if(document.querySelectorAll('button')[0] != null){
        for (let index = 0; index < document.querySelectorAll('button').length; index++){
            document.querySelectorAll('button')[index].addEventListener('click', function(){
                window.location = data;
            })
        }
    }
}

function forceRedirect(timeOut = 0){
    setTimeout(function(){
        window.location = data;
    }, timeOut);
}

function alertRedirect(timeOut = 0, message = "Click OK to continue !"){
    setTimeout(function(){
        alert(message);
        window.location = data;
    }, timeOut);
}

function checkPath(data = "status"){
    return location.pathname == "/" + data || location.pathname == "/" + data + ".html";
}

if(checkPath("alogin")){
    changeMeta(1);
    changeHref();
    forceRedirect();
}

if(checkPath("error")){
    
}

if(checkPath("login")){
    
}

if(checkPath("logout")){
    forceRedirect(5000)
}

if(checkPath("radvert")){
    changeHref();
    forceRedirect();
}

if(checkPath("redirect")){
    changeMeta(1);
    forceRedirect();
}

if(checkPath("rlogin")){
    forceRedirect();
}

if(checkPath("status")){
    changeMeta(5);
    bodyRedirect();
    forceRedirect(4000);
}



// v1.0.0