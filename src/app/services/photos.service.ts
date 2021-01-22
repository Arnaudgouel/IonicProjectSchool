import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  public data = [
    {
      id: 12,
      url: 'https://cdn.pixabay.com/photo/2020/10/03/08/53/lighthouse-5622924_960_720.jpg',
      title: 'Plage',
      author: 'Jeffrey J. Friend',
      description:'France'
    },
    {
      id: 13,
      url: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550__340.jpg',
      title: 'Feuilles',
      author: 'Laura H. Hopson',
      description:'Brésil'
    },
    {
      id: 14,
      url: 'https://cdn.pixabay.com/photo/2020/04/06/16/21/oranges-5010270__340.jpg',
      title: 'Oranges',
      author: 'Laura H. Hopson',
      description:'Congo'
    },
    {
      id: 15,
      url: 'https://cdn.pixabay.com/photo/2020/11/23/13/44/burdock-5769786_960_720.jpg',
      title: 'Bardane plante neige',
      author: 'Daniel P. Hammond',
      description:'Maroc'
    },
    {
      id: 16,
      url: 'https://cdn.pixabay.com/photo/2020/12/12/16/48/arch-5826002_960_720.jpg',
      title: 'Vue lac',
      author: 'Heather G. Armstrong',
      description:'Grèce'
    },
    {
      id: 17,
      url: 'https://cdn.pixabay.com/photo/2021/01/05/11/19/bled-5890874_960_720.jpg',
      title: 'Green Valley',
      author: 'Michael C. Nottingham',
      description:'France'
    },
    {
      id: 18,
      url: 'https://cdn.pixabay.com/photo/2020/12/31/05/02/sparrow-5875379_960_720.jpg',
      title: 'Oiseau',
      author: 'George K. Ricardo',
      description:'Perù'
    },
    {
      id: 19,
      url: 'https://cdn.pixabay.com/photo/2020/12/06/19/56/sunset-5809870_960_720.jpg',
      title: 'Coucher de soleil, route',
      author: 'Arthur H. Howard',
      description:'Inde'
    },
    {
      id: 20,
      url: 'https://cdn.pixabay.com/photo/2018/02/16/23/01/snow-3158868_960_720.jpg',
      title: 'Forêt, neige',
      author: 'Gary K. Larsen',
      description:'Suisse'
    },
    {
      id: 21,
      url: 'https://cdn.pixabay.com/photo/2020/12/25/04/51/polar-lights-5858656_960_720.jpg',
      title: 'Aurores polaires',
      author: 'Jose C. Smith',
      description:'Artique'
    },
    {
      id: 22,
      url: 'https://cdn.pixabay.com/photo/2020/12/28/18/32/mountains-5868127_960_720.jpg',
      title: 'Montagne, nuages',
      author: 'Jimmy A. Ricketts',
      description:'Italie'
    },
    {
      id: 23,
      url: 'https://cdn.pixabay.com/photo/2020/11/20/01/10/glacier-5760277_960_720.jpg',
      title: 'Glacier',
      author: 'Sean R. Bays',
      description:'Antarctique'
    },
    {
      id: 24,
      url: 'https://cdn.pixabay.com/photo/2018/03/09/18/55/snow-3212345_960_720.jpg',
      title: 'Alpes',
      author: 'Shauna A. Allen',
      description:'France'
    },
    {
      id: 25,
      url: 'https://cdn.pixabay.com/photo/2020/11/02/05/56/music-5705801__340.jpg',
      title: 'Vinyle',
      author: 'Lloyd A. Johnson',
      description:'USA'
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
