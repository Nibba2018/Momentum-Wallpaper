function getWallpaper()
{
    console.log("Inside Function");
    var image = document.getElementsByClassName("fadein");
    console.log(image);
    var style = image.currentStyle || window.getComputedStyle(img, false);
    console.log(style);
    var image_url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    console.log(image_url);
    window.location = image_url;
}