import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PhotosService } from "src/app/services/photos.service";
import { FavoritesService } from "src/app/services/favorites.service";

import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  slideOpts = {
    speed: 1000,
    autoHeight: true
  };

  // On récupère la route active pour le paramètre
  // On récupère aussi notre photoService
  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotosService, 
    private favoritesStorage: FavoritesService,
    private router: Router) { }

  // On définit l'index du tableau de photo à 0
  photoIndex = 0;
  photoDetails = this.photoService.data[this.photoIndex];

  // Le tableau des favoris est vide au départ
  favorites = [];

  photoList = [];

  addedToFav = false;

  movedSlide: boolean;

  activeIndex: any;

  async addToFavorite(){
    // console.log(this.favorites);
    
    const data = await this.favoritesStorage.getFavPhotos();
    this.favorites = data ? data : [];
    this.favorites.push(this.photoDetails);
    this.favoritesStorage.setFavPhotos(this.favorites);
    this.addedToFav = true;
    // console.log(this.storage.get('Favorite'));

  }

  async removeFromFavorite(id){
    const index = await this.favoritesStorage.getFavById(id);
    const data = await this.favoritesStorage.getFavPhotos();
    data.splice(index, 1);
    this.favoritesStorage.setFavPhotos(data);
    this.addedToFav = false;
    console.log("Removed from fav", data);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) =>  {

      // On recherche l'index du tableau de photo orrespondant à l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex(item => item.id == params.id );


      this.photoDetails = this.photoService.data[this.photoIndex];

      this.favoritesStorage.getFavById(params.id).then((index) =>{
        console.log('La photo est dans les favoris :?' + index);
        if (index !=-1){this.addedToFav = true;}
      });
    });

    this.photoList = this.photoService.data;
    console.log(this.photoList);
  }

  async ionSlideDidChange(){
    this.activeIndex = await this.slides.getActiveIndex();
    console.log(this.activeIndex);
  }

  // toObject(names, values) {
  //   var result = {};
  //   for (var i = 0; i < names.length; i++)
  //        result[names[i]] = values[i];
  //   return result;
  // }

  nextSlide(slide){
    if (this.movedSlide === true){
      // this.router.navigate(['/details/21']);
      // slide.slideTo(1);

    }
  } 

  previousSlide(slide){
    if (this.movedSlide === true){
      // this.router.navigate(['/details/12']);
      // slide.slideTo(1);
    }
  }

  toMoveSlide(){
    this.movedSlide = false;
  }

  tapSlide(){
    this.movedSlide = true;
    setTimeout(this.toMoveSlide, 500)

  }


}
