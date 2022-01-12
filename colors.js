var Links = {
  setColor: function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i++;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  setColor: function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },

  setBackgroundColor: function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

var ArticleLinks = {
  setColor: function (color){
    $('["a"][id="article"]').css('color', color);
  }
}


function darkLightHandler(self){
  var target = document.querySelector('body');

  if(self.value === 'to LIGHT MODE') {
    Body.setBackgroundColor('rgb(200,200,200)');
    Body.setColor('black');
    self.value = 'to DARK MODE';

    Links.setColor('black');
    ArticleLinks.setColor('rgb(28, 56, 219)');
  }

  else {
    Body.setBackgroundColor('rgb(15,15,15)');
    Body.setColor('white');
    self.value = 'to LIGHT MODE';

    Links.setColor('white');
    ArticleLinks.setColor('rgb(96, 181, 248)');

  }
}
