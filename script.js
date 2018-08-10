$(document).ready(function() {

//   var funk = "PL_Q15fKxrBb6OSWMKFwiXZiixMVBYf6Ee";
//   var brega = "PL_Q15fKxrBb7QSBJQrC4IT3nSJhbe90lz";
//   var sertanejo = "PLGO45ljTu48aakpfftyt1soc7PJczK_5H";
//   var nerd = "PLiD0AJRjuGoyiRv0qjrQ30XHPEp5V078w";
//   var romance = "PLK657Yl_gMAjlW7wqXpT14A7QdXBclXdZ";
//   var seAchani = "PLfEzFejLNo7ULOukyBgGIQ48A7ystbJep";
//   var arrPlaylists = [funk, brega, sertanejo, nerd, romance, seAchani];
// // PERCORRER PLAYLISTS
//   arrPlaylists.forEach(function(playlistId) {
//     fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistId + "&key=AIzaSyDUl3yxb4mMk34Mv7r0RH9OOrJ53U1ODQU&maxResults=5")
//     .then(response => response.json())
//     .then(data => accessVideoId(data.items));
//   });
// // ACESSAR VÍDEOS DE CADA PLAYLIST
//   function accessVideoId(items) {
//     items.forEach(item => {
//       var videoId = item.snippet.resourceId.videoId;
//       createVideo(videoId);
//     });
//   }
// // MOSTRAR VÍDEO
//   function createVideo(id) {
//     $('.play-video').append(`<iframe width='560' height='315' src='https://www.youtube.com/embed/${id}' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
//   }

  $('.funk-button').click(function() {
    var funk = "PL_Q15fKxrBb6OSWMKFwiXZiixMVBYf6Ee";
    accessPlaylist(funk);
  });

  $('.brega-button').click(function() {
    var brega = "PL_Q15fKxrBb7QSBJQrC4IT3nSJhbe90lz";
    accessPlaylist(brega);
  });

  $('.sertanejo-button').click(function() {
    var sertanejo = "PLGO45ljTu48aakpfftyt1soc7PJczK_5H";
    accessPlaylist(sertanejo);
  });

  $('.nerd-button').click(function() {
    var nerd = "PLiD0AJRjuGoyiRv0qjrQ30XHPEp5V078w";
    accessPlaylist(nerd);
  });

  $('.romance-button').click(function() {
    var romance = "PLK657Yl_gMAjlW7wqXpT14A7QdXBclXdZ";
    accessPlaylist(romance);
  });

  $('.se-achani-button').click(function() {
    var seAchani = "PLfEzFejLNo7ULOukyBgGIQ48A7ystbJep";
    accessPlaylist(seAchani);
  });

// ACESSAR PLAYLIST GÊNERO
  function accessPlaylist(playlistId) {
      fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + playlistId + "&key=AIzaSyDUl3yxb4mMk34Mv7r0RH9OOrJ53U1ODQU&maxResults=8")
      .then(response => response.json())
      .then(data => accessVideoId(data.items));
    };
// ESCOLHER VÍDEO ALEATORIAMENTE
  function accessVideoId(items) {
    arr = [];
    items.forEach(item => {
      var videoId = item.snippet.resourceId.videoId;
      arr.push(videoId);
    });
    createVideo(arr[Math.floor(Math.random() * arr.length)]);
  }
// MOSTRAR VÍDEO
  function createVideo(id) {
    $('.play-video').empty();
    $('.play-video').append(`<iframe width='560' height='315' src='https://www.youtube.com/embed/${id}' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
  }






// INICIAR QUIZ E CONFERIR RESPOSTAS
  $('.question-1').html("Quer tc?");
  $('.question-2').html("Nomidade?");
  $('.question-3').html("Como vc é?");

  var userAnswers = [];

  window.onload = question1(), question2(), question3();

  function question1() {
    var answer1 = $('.answer-1').val();
    select(answer1);
  }

    function question2() {
    var answer2 = $('.answer-2').val();
    select(answer2);
  }

    function question3() {
    var answer3 = $('.answer-3').val();
    select(answer3);
  }

  function select(answer) {
    var countA = 0;
    var countB = 0;
    var countC = 0;
    if (answer === "A") {
      userAnswers.push("A");
      countA += 1;
    } else if (answer === "B") {
      userAnswers.push("B");
      countB += 1;
    } else if (answer === "C") {
      userAnswers.push("C");
      countC += 1;
    }
  }

  countA = 0;
  countB = 0;
  countC = 0;
  userAnswers.forEach(answer => {
    if (answer === "A") {
      countA +=1;
    }
  })
  console.log(countA, countB, countC);


  var rightAnswers = ["A", "A", "A"];

  // for(var answer of userAnswers) {
  //   if (answer === "A")
  // }




});
