$(document).ready(function() {

// ACESSAR PLAYLIST GÊNERO
  function accessPlaylist(playlistId) {
    fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistId + "&key=AIzaSyDUl3yxb4mMk34Mv7r0RH9OOrJ53U1ODQU&maxResults=8")
    .then(response => response.json())
    .then(data => accessVideoId(data.items));
  }

// ESCOLHER VÍDEO ALEATORIAMENTE
  function accessVideoId(items) {
    var arr = [];
    items.forEach(item => {
      var videoId = item.snippet.resourceId.videoId;
      arr.push(videoId);
    });
    createVideo(arr[Math.floor(Math.random() * arr.length)]);
  }

// MOSTRAR VÍDEO
  function createVideo(id) {
    $('.main').empty();
    $('.main').html(`<div class="show-video"><h1>Que beleza!</h1><iframe width='80%' height='315' allow="autoplay; encrypted-media" src='https://www.youtube.com/embed/${id}/?autoplay=1' frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`);
  }

// INICIAR QUIZ
  var userAnswers = [];

  $('.question-1').html("Hoje é dia de maldade?");
  $('.question-2').html("É hoje que você vai usar aquele shortinho?");
  $('.question-3').html("Posso jogar água pra você passar o rodo?");

  window.onload = question1(), question2(), question3();


  function question1() {
    var answer1 = $('.answer-1').val();
    select(answer1);
    $('.answer-1').val("");
    $('.answer-1').val("Escolha uma opção");
  }

    function question2() {
    var answer2 = $('.answer-2').val();
    select(answer2);
    $('.answer-2').val("");
    $('.answer-2').val("Escolha uma opção");
  }

    function question3() {
    var answer3 = $('.answer-3').val();
    select(answer3);
    $('.answer-3').val("");
    $('.answer-3').val("Escolha uma opção");
  }

// CONFERIR RESULTADO
  var countA = 0;
  var countB = 0;
  var countC = 0;
  function select(answer) {
    if (answer === "SIM") {
      userAnswers.push("A");
      countA += 1;
    } else if (answer === "NÃO") {
      userAnswers.push("B");
      countB += 1;
    } else if (answer === "TALVEZ") {
      userAnswers.push("C");
      countC += 1;
    }
  }

  userAnswers.forEach(answer => {
    if (answer === "A") {
      countA += 1;
    } else if (answer === "B") {
      countB += 1;
    } else if (answer === "C") {
      countC += 1;
    }
  })
  console.log(countA, countB, countC);


// PLAYLISTS ID'S
  var funk = "PL_Q15fKxrBb6OSWMKFwiXZiixMVBYf6Ee";
  var brega = "PL_Q15fKxrBb7QSBJQrC4IT3nSJhbe90lz";
  var sertanejo = "PLGO45ljTu48aakpfftyt1soc7PJczK_5H";
  var nerd = "PLiD0AJRjuGoyiRv0qjrQ30XHPEp5V078w";
  var romance = "PLK657Yl_gMAjlW7wqXpT14A7QdXBclXdZ";
  var seAchani = "PLfEzFejLNo7ULOukyBgGIQ48A7ystbJep";

// DEFINIR RESULTADO
  $('.result-button').click(function() {


    if (countA > countB & countA > countC) {
      accessPlaylist(funk);
      console.log(countA);
    } else if (countB > countA & countB > countC) {
      accessPlaylist(brega);
      console.log(countB);
    } else {
      accessPlaylist(sertanejo);
      console.log(countC);
    }
  });

});
