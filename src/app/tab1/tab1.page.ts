import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  segmentModel = "accueil";

  favs = [];

  accueil = {
    title: 'Fire',
    author: 'Robert D. Johnson',
    url:'../../assets/photos/fire-4892711_1920.jpg',
    description:''
  }

  constructor(private favoritesStorage: FavoritesService) {}


  

  // async deleteStorage(){
  //   const data = await this.storage.set('Favorite', null);
  //   this.favs = [];
  // }

  ngOnInit(){
    this.favoritesStorage.getFavPhotos().then( (data) =>{
      console.log("Favorite " + data);
    });
  }

  ionViewWillEnter(){
    this.favoritesStorage.getFavPhotos().then( (data) =>{
      this.favs = data;
      console.log("ionViewWillEnter " + data);
    });
  }

}
