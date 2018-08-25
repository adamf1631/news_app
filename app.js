//api key:   22e602bfc009405295872196b0924fff
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=22e602bfc009405295872196b0924fff';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
