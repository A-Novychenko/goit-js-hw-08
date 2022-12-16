import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
});

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
//   .then(function (seconds) {
//     console.log('player ARBITTEN!');
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration

//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
