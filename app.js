const $myPhoto = () => {
  let $resumeDiv = $('<div>').addClass('resume')
  let $img1 = $('<img src = "jihee.jpg">')

  $resumeDiv.append($img1)
  $('body').append($resumeDiv)
  $('#resume-page').append($resumeDiv)
}





$(() => {

  $myPhoto()

})
