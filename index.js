const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/5-andar-dir.jpg',
  navbar: [
    'autorotate',
    'zoom',
    {
      id: 'left-view',
      title: 'Esquerda',
      content: 'Esquerda',
      className: 'view-btn left-view-btn active-btn',
      onClick: () => {
        $('#right-view').removeClass('active-gallery')
        $('#left-view').addClass('active-gallery')
        $('#first-left').click()
        $('.left-view-btn').addClass('active-btn')
        $('.right-view-btn').removeClass('active-btn')
      }
    },
    {
      id: 'right-view',
      title: 'Direita',
      content: 'Direita',
      className: 'view-btn right-view-btn',
      onClick: () => {
        $('#left-view').removeClass('active-gallery')
        $('#right-view').addClass('active-gallery')
        $('#first-right').click()
        $('.left-view-btn').removeClass('active-btn')
        $('.right-view-btn').addClass('active-btn')
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