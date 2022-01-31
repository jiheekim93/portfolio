const $myResumePhoto = () => {
  let $resumeDiv = $('<div>').addClass('resume')
  let $img1 = $('<img src = "jihee.jpg">').addClass('myself').css('width', '340px').css('margin', '15px')

  $resumeDiv.append($img1)
  $('body').append($resumeDiv)
  $('#resume-page').append($resumeDiv)
}

const $myResume = () => {
  let $resumeTextBox = $('<div>').addClass('resume-text')
  // let $resumeHeading = $('<h3>').text('My Experience').css('color', 'white')
  let $resumeText = $('<img src= "jihee-resume.png">')



  $('body').append($resumeTextBox)
  // $('.resume-text').append($resumeHeading)
  $('#resume-page').append($resumeTextBox)
  $resumeTextBox.append($resumeText)
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
  $projectDiv = $('<div>').addClass('project-div').appendTo('body')
  $projectCon1 = $('<div>').addClass('project-contaier1').appendTo('.project-div')
  $projectCon2 = $('<div>').addClass('project-contaier2').appendTo('.project-div')
  $projectCon3 = $('<div>').addClass('project-contaier3').appendTo('.project-div')

  $project1 = $('<img src = "color-picker.jpg">').addClass('color-picker').appendTo('.project-contaier1')
  $project2 = $('<img src = "users-data-base.jpg">').addClass('data-base').appendTo('.project-contaier2')
  $project3 = $('<img src = "field-lights-theme.jpg">').addClass('field-lights').appendTo('.project-contaier3')

  $projectText1 = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').appendTo('.project-contaier1')
  $projectText2 = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').appendTo('.project-contaier2')
  $projectText3 = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').appendTo('.project-contaier3')

  $('#project-page').append($projectDiv)


}



$(() => {
  $myResumePhoto()
  $myResume()
  $project()
  $fun()
  $funText()
  $bio()
})
