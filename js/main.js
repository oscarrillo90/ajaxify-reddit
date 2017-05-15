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
for(i = 0; i < json.data.children.length; i++) {

var title = json.data.children[i].data.title;
var img = json.data.children[i].data.thumbnail;
var timeStamp = json.data.children[i].data.created;
var user = json.data.children[i].data.author;
var url = json.data.children[i].data.url;
$('.block').append(`<img src="${img}">`);
$('.block').append(`<h3>${title}</h3>`);
$('.block').append(`On:<p>${timeStamp}`);
$('.block').append(`By:<p>${user}`);
$('.block').append(`<a href="${url}">Link</a>`);
}
};

function onError(a, b, c){
  console.log(a);
  console.log(b);
  console.log(c);
}

/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
