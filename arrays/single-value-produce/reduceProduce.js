var initialValue = [];

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

const images = albums.reduce((prev, album) => {
  return prev.concat(album.images);
}, initialValue);

console.log(images);
