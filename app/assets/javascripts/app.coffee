$(document).on "ajax:success", "#contacto",(e, data)->
  console.log data
  $('#contacto').html '<div class="exito"><p>Se ha enviado tu información, nos pondremos en contacto contigo lo más pronto posible.</p></div>'

$(document).on "ajax:error", "#contacto",(ev, data, status, xhr)->
  console.log data