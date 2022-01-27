const $myResumePhoto = () => {
  let $resumeDiv = $('<div>').addClass('resume')
  let $img1 = $('<img src = "jihee.jpg">').addClass('myself').css('width', '340px').css('margin', '15px')

  $resumeDiv.append($img1)
  $('body').append($resumeDiv)
  $('#resume-page').append($resumeDiv)
}

const $myResume = () => {
  let $resumeTextBox = $('<div>').addClass('resume-text')
  let $resumeHeading = $('<h3>').text('My Experience').css('color', 'white')
  let $resumeText = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.').css('color', 'white')

  $('body').append($resumeTextBox)
  $('.resume-text').append($resumeHeading)
  $('#resume-page').append($resumeTextBox)
  $resumeTextBox.append($resumeText)
}


const $biography = () => {
  let currentTextIndex = 0;
  let currentTextBox = $('.bio-text-box').children().length - 1

  $('.next').on('click', () => {
    $('.bio-text-box').children().eq(currentTextIndex).css('display', 'none')

    if (currentTextIndex < currentTextBox) {
        currentTextIndex ++
    } else {
      currentTextIndex = 0
    }
  $('.bio-text-box').children().eq(currentTextIndex).css('display', 'block')
  })
  $('.previous').on('click',() => {
    $('.bio-text-box').children().eq(currentTextIndex).css('display', 'none')

    if (currentTextIndex > 0) {
      currentTextIndex --
    } else {
      currentTextIndex = currentTextBox
    }
    $('.bio-text-box').children().eq(currentTextIndex).css('display', 'block')
  })

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



$(() => {

  $myResumePhoto()
  $myResume()
  $biography()
  $fun()

})
