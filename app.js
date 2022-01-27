const $myPhoto = () => {
  let $resumeDiv = $('<div>').addClass('resume')
  let $img1 = $('<img src = "imgs/jihee.jpg">')

  $resumeDiv.append($img1)
  $('#resume-page').append($resumeDiv)
  $('body').append('resume')
}





$(() => {

  $myPhoto()

})
