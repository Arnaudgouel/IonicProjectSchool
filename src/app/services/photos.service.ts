import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public data = [
    {
      id: 12,
      url: 'https://cdn.pixabay.com/photo/2020/10/03/08/53/lighthouse-5622924_960_720.jpg',
      title: 'Voyage',
      author: 'Dekpo',
      description:'Magnifique voyage en thailande'
    },
    {
      id: 13,
      url: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550__340.jpg',
      title: 'Voyage',
      author: 'Dekpo',
      description:'Magnifique voyage en thailande'
    },
    {
      id: 14,
      url: 'https://cdn.pixabay.com/photo/2020/04/06/16/21/oranges-5010270__340.jpg',
      title: 'Voyage',
      author: 'Dekpo',
      description:'Magnifique voyage en thailande'
    },
    // {
    //   id: 14,
    //   url: '../../assets/photos/url',
    //   title: 'Voyage',
    //   author: 'Dekpo',
    //   description:'Magnifique voyage en thailande'
    // },
  ]

  constructor() { }
}
