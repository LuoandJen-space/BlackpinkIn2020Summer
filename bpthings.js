<!DOCTYPE html>
<html lang="en">
<head>
<title>
    BLACKPINK IN YOUR AREA
</title>
<meta charset="UTF-8" />
    <!--New Perspectives on HTML and CSS
      Assignment 1

      Music tour of a band
      Author: Xinyue Luo
      Student ID: 18036258
      Date: 10/12/2020

      Filename: bpthings.js
    -->
</head>
<body>
  <script>
  var cparent = document.getElementById("container");

  window.onload = function(){//Determine whether the page content and style are loaded
    imglocation("container","box");
    var imgData = {"data":[{"src":"BW.jpg"},{"src":"chang.jpg"},{"src":"game.jpg"},{"src":"how_u_like_that.jpg"},{"src":"how_u_like_that1.jpg"},{"src":"ice_cream.jpg"},{"src":"ice_cream1.jpg"},{"src":"in_your_area.jpg"},{"src":"kill_this_love.jpg"},{"src":"kill_this_love1.png"},{"src":"lovesick_girls.jpg"},{"src":"merry_christmas.jpg"},{"src":"solo.jpg"},{"src":"solo1.jpg"},{"src":"the_album_Jennie.jpg"},{"src":"the_album_Jisoo.jpg"},{"src":"the_album_Lisa.jpg"},{"src":"the_album_rose.jpg"},{"src":"the_revolution.jpg"},]};
    
    window.onscroll = function(){//Monitor Mouse wheel
      if(checkFlag()){//check display of the last picture ture or false
        for(var i = 0;i<imgData.data.length;i++) {//create node&setting
          var ccontent = document.createElement("div");
          ccontent.className = "box";
          cparent.appendChild(ccontent);
          var boximg = document.createElement("div");
          boximg.className = "box_img";
          ccontent.appendChild(boximg);
          var Img = document.createElement("img");
          Img.src = "img/" + imgData.data[i].src;
          boximg.appendChild(Img);
        }
      }
      imglocation("container","box");//Typesetting function
    }

    window.onresize = function() {//call the fuction if change the window
      imglocation("container","box");
    }
  }

  function checkFlag() {
    var ccontent = getChildElement(parent,"box");
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(lastContentHeight < scrollTop + pageHeight) {
       return true;
    }  
  }

  function imglocation(parent,content) {
    //get all picture
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].clientWidth;//pic width set
    var OWidth = document.documentElement.clientWidth;//widnow setting
    var num = Math.floor(OWidth/imgWidth);//count a row picture
    cparent.style.cssText = "width:" + imgWidth * num + "px;margin: 0 auto;";//set css style
    var BoxheightArr = [];
    for(var i = 0;i<ccontent.length;i++){
      if(i<num){
        BoxheightArr[i] = ccontent[i].offsetHeight;
        ccontent[i].style = "";
      } else {
        var minHeight = Math.min.apply(null,BoxheightArr);
        var minIndex = getminheightLocation(BoxheightArr,minHeight);
        ccontent[i].style.position = "absolute";
        ccontent[i].style.top = minHeight + "px";
        ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
        BoxheightArr[minIndex] = BoxheightArr[minIndex] + ccontent[i].offsetHeight;
      }
    }
  }

  function getminheightLocation(BoxheightArr,minHeight) {
    for(var i in BoxheightArr){
      if(BoxheightArr[i] == minHeight) {
        return i;
      }
    }
  }

  function getChildElement(parent,content){
    var contentArr = [];
    var allcontent = document.getElementsByTagName("*");
    for(var i = 0; i<allcontent.length;i++) {
      if(allcontent[i].className == content) {
        contentArr.push(allcontent[i]);
      }
    }
    return contentArr;
  }
  </script>
</body>
</html>