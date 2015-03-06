$('body').on('click.zoom', '.enable-zoom:not(.zoomed)', function(e) {
  var that = $(this)
  that.addClass('zoomed')
  $('.widewrapper').addClass('zoom-backdrop')
  $('.panel').addClass('zoom-backdrop')
  $('body').one('click.zoom', function() {
    that.removeClass('zoomed')
    if ($('.zoomed').size() === 0) {
      $('.zoom-backdrop').removeClass('zoom-backdrop')
    }
  })
})
