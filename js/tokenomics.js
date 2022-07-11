$(function () {
    $("dd").slideUp(1);
    $("dt, dt .faq-toggle").click(function () {
      var $this = $(this),$parent = $this.parent(),outer = true;
      if ($this.is('.faq-toggle')) {$parent = $parent.parent();outer = false;}
      if ($parent.hasClass('active')) {
        $parent.removeClass('active').find('dd').slideUp(500);
      } else {
        $parent.siblings().removeClass('active').find('dd').slideUp(500);
        $parent.addClass('active').find('dd').slideDown(500);
      }
      return outer;
    });
  });