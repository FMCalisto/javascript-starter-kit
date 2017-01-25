var initialValue = 0;

const albums = [
  {
    title: 'Title 1',
    images: ['01.jpg', '02.jpg']
  },
  {
    title: 'Title 2',
    images: ['03.jpg', '04.jpg', '05.jpg']
  }
];

const numImages = albums.reduce((prev, album) => {
  return prev + album.images.length;
}, initialValue);

console.log(numImages);
