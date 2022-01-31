const $myResumePhoto = () => {
  let $resumeDiv = $('<div>').addClass('resume')
  let $img1 = $('<img src = "jihee.jpg">').addClass('myself').css('width', '340px').css('margin', '15px')

  $resumeDiv.append($img1)
  $('body').append($resumeDiv)
  $('#resume-page').append($resumeDiv)
}

const $myResume = () => {
  // $('<div>').addClass('resume-text')
  $('<a href = "https://www.google.com" target="_blank">').addClass('link').appendTo('#resume-page')
  $('<img src= "jihee-resume.png">').addClass('resume-img').appendTo('.link')

  $('body').append('#resume-page')
  // $('#resume-page').append('.resume-text')
  // $resumeTextBox.append('.link')
}

const $fun = () => {
  let currentImgIndex = 0;
  let currentImgBox = $('.fun-img-box').children().length - 1

  $('.next').on('click', () => {
    $('.fun-img-box').children().eq(currentImgIndex).css('display', 'none')

    if (currentImgIndex < currentImgBox) {
        currentImgIndex ++
    } else {
      currentImgIndex = 0
    }
  $('.fun-img-box').children().eq(currentImgIndex).css('display', 'block')
  })
  $('.previous').on('click',() => {
    $('.fun-img-box').children().eq(currentImgIndex).css('display', 'none')

    if (currentImgIndex > 0) {
      currentImgIndex --
    } else {
      currentImgIndex = currentImgBox
    }
    $('.fun-img-box').children().eq(currentImgIndex).css('display', 'block')
  })
}

const $funText =() => {
  $funTextDiv = $('<div>').addClass('fun-text')
  $funTextBox = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

  $funTextDiv.append($funTextBox)
  $('#fun-page').append($funTextDiv)
  $('body').append($funTextDiv)
}

const $bio = () => {
  let $bioDiv = $('<div>').addClass('bio-div')
  let $bioText = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ').css('color', 'white')
  let $bioPhoto = $('<img src = "jihee1.jpg">').addClass('jihee-one')

  let $bioDiv2 = $('<div>').addClass('bio-div2')
  let $bioText1 = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ').css('color', 'white')
  let $bioPhoto1 = $('<img src = "jihee2.jpg">').addClass('jihee-one')

  $bioDiv.append($bioPhoto)
  $bioDiv.append($bioText)
  $('#bio-page').append($bioDiv)
  $bioDiv2.append($bioText1)
  $bioDiv2.append($bioPhoto1)
  $('#bio-page').append($bioDiv2)

}

const $project = () => {
  $('<a href = "#">').addClass('project-one').appendTo('#project-page')
  $('<img src= "color-picker.jpg">').addClass('color-picker').appendTo('.project-one')

  $('<a href = "#">').addClass('project-two').appendTo('#project-page')
  $('<img src= "field-lights-theme.jpg">').addClass('field-lights').appendTo('.project-two')
  $('.field-lights').hover().text('click')

  $('<a href = "#">').addClass('project-three').appendTo('#project-page')
  $('<img src= "users-data-base.jpg">').addClass('users-data').appendTo('.project-three')

  $('<p>').text('1st project - COLOR PICKER (RGB) (click to view)').appendTo('.project-one')
  $('<p>').text('2nd project - Field Lights Theme (click to view)').appendTo('.project-two')
  $('<p>').text('3rd project - Users Data Base (click to view)').appendTo('.project-three')
  //


}



$(() => {
  $myResumePhoto()
  $myResume()
  $project()
  $fun()
  $funText()
  $bio()
})
