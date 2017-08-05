var app = function(){
  randomComic();
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var heroes = JSON.parse(jsonString);
};

var randomComic = function(){
  var PRIV_KEY = "0823f7d5b0592cc5ffc18f7e052fe4b93fe5a71c";
  var API_KEY = "2331b1ccc2a9411ca23da8c89a441eb2";
  var ts = new Date().getTime();
  var randomNumber = getRandomInt(1, 50000);
      console.log(randomNumber);
  var url = "http://gateway.marvel.com:80/v1/public/comics/" + randomNumber + "?apikey=2331b1ccc2a9411ca23da8c89a441eb2";
  var hash = md5(ts + PRIV_KEY + API_KEY);
  url += "&ts="+ts+"&hash="+hash;
};

