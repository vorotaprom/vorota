import { Injectable } from '@angular/core';

import { Photo } from './photo';

const gallery: Photo[] = [
  new Photo('assets/img/gallery/001.jpg', null),
  new Photo('assets/img/gallery/002.jpg', null),
  new Photo('assets/img/gallery/003.jpg', null),
  new Photo('assets/img/gallery/004.jpg', null),
  new Photo('assets/img/gallery/005.jpg', null),
  new Photo('assets/img/gallery/006.jpg', null),
  new Photo('assets/img/gallery/007.jpg', null),
  new Photo('assets/img/gallery/008.jpg', null),
  new Photo('assets/img/gallery/009.jpg', null),
  new Photo('assets/img/gallery/010.jpg', null),
  new Photo('assets/img/gallery/011.jpg', null),
  new Photo('assets/img/gallery/012.jpg', null),
];

const galleryPromise = Promise.resolve(gallery);

@Injectable()
export class GalleryService {
  public getGallery(): Promise<Photo[]> {
    return galleryPromise;
  }
}
