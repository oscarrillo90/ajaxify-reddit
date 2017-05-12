/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';





$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  callReddit();

});

function callReddit(){
$.ajax({
  method: 'GET',
  url: frontPage,
  dataType: 'json',
  success: onSuccess,
  error: onError
});
}

function onSuccess(json) {
  console.log(json);
  var title = json.data.children["0"].data.title;
  var img = json.data.children["0"].data.preview.images["0"].resolutions["0"].url;
  var timeStamp = json.data.children["0"].data.created;
  var user = json.data.children["0"].data.author;
  var url = json.data.children["0"].data.url;
  $('#main').append(`<img src="${img}">`);
  $('#main').append(`<p>${title}</p>`);
  $('#main').append(`<p>${timeStamp}`);
  $('#main').append(`<p>${user}`);
  $('#main').append(`<a href="${url}">Link</a>`);
  


}

function onError(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}

/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
