function getData(params) {
   fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=' + params + '&key=AIzaSyCQrY7pQqjoseseiJTVrUf9NnDORPtxypI')
      .then((response) => response.json())
      .then(function(data){
         let tag = '';
         for(let index = 0; index < data.items.length; index++){
            tag += '<div class="d-flex my-2 align-items-center"><div class="flex-shrink-0"><img class="rounded-2" src="'+ data.items[index].snippet.thumbnails.default.url +'" alt="'+ data.items[index].snippet.title +'"></div><div class="flex-grow-1 ms-0"><a class="nav-link" href="https://www.youtube.com/watch?v='+ data.items[index].id.videoId +'">'+ data.items[index].snippet.title +'</a></div></div>';
            
         }
         document.getElementById('root').innerHTML = tag;
      })
}

getData('wpu')


