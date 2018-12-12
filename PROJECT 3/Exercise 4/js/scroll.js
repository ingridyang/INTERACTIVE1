$(document).ready(function() {

  var s = $("body");
  var winheight = $(window).height();

  $(window).scroll(function() {

    var windowpos = $(window).scrollTop();
    if (windowpos <= 600) {
      s.addClass("bg1");

      s.removeClass("bg2");
      s.removeClass("bg3");
      s.removeClass("bg4");
      s.removeClass("bg5");
    }



    if (windowpos >= winheight) {
      $('.chatwindow').addClass('showchats');
      $('.blocker').addClass('showblocker');
    } else if (windowpos < winheight + 200) {
      $('.chatwindow').removeClass('showchats');
      $('.blocker').addClass('showblocker');
    }

    if (windowpos >= 1100) {
      $('.alert1').addClass('showalert');
    } else if (windowpos < 1100) {
      $('.alert1').removeClass('showalert');
    }

    if (windowpos >= 1200) {
      $('.alert2').addClass('showalert');
    } else if (windowpos < 1200) {
      $('.alert2').removeClass('showalert');
    }

    if (windowpos >= 1200) {
      $('.alert3').addClass('showalert');
    } else if (windowpos < 1200) {
      $('.alert3').removeClass('showalert');
    }

    if (windowpos >= 1300) {
      $('.alert4').addClass('showalert');
    } else if (windowpos < 1300) {
      $('.alert4').removeClass('showalert');
    }

    if (windowpos >= 1400) {
      $('.alert5').addClass('showalert');
    } else if (windowpos < 1400) {
      $('.alert5').removeClass('showalert');
    }

    if (windowpos >= 1500) {
      $('.alert6').addClass('showalert');
    } else if (windowpos < 1500) {
      $('.alert6').removeClass('showalert');
    }

    if (windowpos >= 1700) {
      $('.alert7').addClass('showalert');
    } else if (windowpos < 1700) {
      $('.alert7').removeClass('showalert');
    }

    if (windowpos >= 1900) {
      $('.alert8').addClass('showalert');
    } else if (windowpos < 1900) {
      $('.alert8').removeClass('showalert');
    }

    if (windowpos >= 2100) {
      $('.alert7').addClass('showalert');
    } else if (windowpos < 2100) {
      $('.alert7').removeClass('showalert');
    }

    if (windowpos >= 2300) {
      $('.alert9').addClass('showalert');
    } else if (windowpos < 2300) {
      $('.alert9').removeClass('showalert');
    }

    if (windowpos >= 2500) {
      $('.alert10').addClass('showalert');
    } else if (windowpos < 2500) {
      $('.alert10').removeClass('showalert');
    }

    if (windowpos >= 2700) {
      $('.alert11').addClass('showalert');
    } else if (windowpos < 2700) {
      $('.alert11').removeClass('showalert');
    }

    if (windowpos >= 2900) {
      $('.alert12').addClass('showalert');
    } else if (windowpos < 2900) {
      $('.alert12').removeClass('showalert');
    }

    if (windowpos >= 3100) {
      $('.alert13').addClass('showalert');
    } else if (windowpos < 3100) {
      $('.alert13').removeClass('showalert');
    }

    if (windowpos >= 3300) {
      $('.alert14').addClass('showalert');
    } else if (windowpos < 3300) {
      $('.alert14').removeClass('showalert');
    }

    if (windowpos >= 3500) {
      $('.alert15').addClass('showalert');
    } else if (windowpos < 3500) {
      $('.alert15').removeClass('showalert');
    }

    if (windowpos >= 3700) {
      $('.alert16').addClass('showalert');
    } else if (windowpos < 3700) {
      $('.alert16').removeClass('showalert');
    }

    if (windowpos >= 3800) {
      $('.alert17').addClass('showalert');
    } else if (windowpos < 3800) {
      $('.alert17').removeClass('showalert');
    }

    if (windowpos >= 3900) {
      $('.alert18').addClass('showalert');
    } else if (windowpos < 3900) {
      $('.alert18').removeClass('showalert');
    }

    if (windowpos >= 4000) {
      $('.alert19').addClass('showalert');
    } else if (windowpos < 4000) {
      $('.alert19').removeClass('showalert');
    }

    if (windowpos >= 4200) {
      $('.alert20').addClass('showalert');
    } else if (windowpos < 4200) {
      $('.alert20').removeClass('showalert');
    }

    if (windowpos >= 4400) {
      $('.alert21').addClass('showalert');
    } else if (windowpos < 4400) {
      $('.alert21').removeClass('showalert');
    }

    if (windowpos >= 4600) {
      $('.alert22').addClass('showalert');
    } else if (windowpos < 4600) {
      $('.alert22').removeClass('showalert');
    }

    if (windowpos >= 4800) {
      $('.alert23').addClass('showalert');
    } else if (windowpos < 4800) {
      $('.alert23').removeClass('showalert');
    }

    if (windowpos >= 4900) {
      $('.alert24').addClass('showalert');
    } else if (windowpos < 4900) {
      $('.alert24').removeClass('showalert');
    }

    if (windowpos >= 5000) {
      $('.alert25').addClass('showalert');
    } else if (windowpos < 5000) {
      $('.alert25').removeClass('showalert');
    }

    if (windowpos >= 5100) {
      $('.alert26').addClass('showalert');
    } else if (windowpos < 5100) {
      $('.alert26').removeClass('showalert');
    }

    if (windowpos >= 5200) {
      $('.alert27').addClass('showalert');
    } else if (windowpos < 5200) {
      $('.alert27').removeClass('showalert');
    }

    if (windowpos >= 5300) {
      $('.alert28').addClass('showalert');
    } else if (windowpos < 5300) {
      $('.alert28').removeClass('showalert');
    }

    if (windowpos >= 5500) {
      $('.alert29').addClass('showalert');
    } else if (windowpos < 5500) {
      $('.alert29').removeClass('showalert');
    }

    if (windowpos >= 3300) {
      $('.alert30').addClass('showalert');
    } else if (windowpos < 3300) {
      $('.alert30').removeClass('showalert');
    }
  console.log(windowpos)

  });

});
