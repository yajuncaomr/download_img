function downloadImage(url){
  var a = $("<a>")
    .attr("href", url)
    .attr("download", "img.png")
    .appendTo("body");

    a[0].click();

    a.remove();
}
