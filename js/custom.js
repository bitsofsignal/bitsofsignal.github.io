$('body').on('click.zoom', '.enable-zoom:not(.zoomed)', function(e) {
  var that = $(this)
  var src = $(this).attr('src')
  var zoomedSrc = $(this).attr('zoomed-src')

  that.addClass('zoomed')

  if (zoomedSrc) {
    that.attr('src', zoomedSrc)
  }

  $('.widewrapper').addClass('zoom-backdrop')
  $('.panel').addClass('zoom-backdrop')

  $('body').one('click.zoom', function() {
    that.removeClass('zoomed')

    if ($('.zoomed').size() === 0) {
      $('.zoom-backdrop').removeClass('zoom-backdrop')

      if (zoomedSrc) {
        that.attr('src', src)
      }
    }
  })
})
