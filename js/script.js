let songs =["boo'd up"]

songs.forEach(function(song){
$('.songs').append(song);
})

let artists =["ella mai"]

artists.forEach(function(artist){
$('.artists').append(artist);
})

let length =["333"]

length.forEach(function(length){
$('.length').append(length);
})

let image =["https://i.ytimg.com/vi/krMG7Xct4Wc/maxresdefault.jpg"]

image.forEach(function(image){
  $('.image').append(`<img src="${image}">`);
})
let link =["https://www.youtube.com/watch?v=6YNZlXfW6Ho"]

link.forEach(function(link){
  $('.link').append(`<a href="${link} ">song link </a>`);
})

const count = ["boo'd up"];
const artist =songs.push();
console.log(count)
console.log(artist)