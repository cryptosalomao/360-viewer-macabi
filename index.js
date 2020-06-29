const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/5-andar-dir.jpg',
  navbar: [
    'autorotate',
    'zoom',
    {
      id: 'right-view',
      title: 'Direita',
      content: 'Direita',
      className: 'view-btn',
      onClick: () => {
        $('#left-view').removeClass('active-gallery')
        $('#right-view').addClass('active-gallery')
      }
    },
    {
      id: 'left-view',
      title: 'Esquerda',
      content: 'Esquerda',
      className: 'view-btn',
      onClick: () => {
        $('#right-view').removeClass('active-gallery')
        $('#left-view').addClass('active-gallery')
      }
    }
  ],
  time_anim: false,
  latitude_range: [0, 245]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});