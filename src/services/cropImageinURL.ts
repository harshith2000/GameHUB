import noImage from '../assets/game-noimage.jpeg';

const croppedImageURL = (url: string) => {
  if(!url) return noImage;

  const index = url.indexOf('media/') + 'media/'.length;
  return url.slice(0,index) + 'crop/600/400/' + url.slice(index);
}

export default croppedImageURL;