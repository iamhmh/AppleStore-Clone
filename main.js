document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', 
    {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      padding: '5rem',
      gap: '1rem',
    }
  ).mount();
} );