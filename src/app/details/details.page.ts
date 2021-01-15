import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PhotosService } from "src/app/services/photos.service"
import { FavoritesService } from "src/app/services/favorites.service"

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // On récupère la route active pour le paramètre
  // On récupère aussi notre photoService
  constructor(
    private activatedRoute: ActivatedRoute, 
    private photoService: PhotosService, 
    private favoritesStorage: FavoritesService) { }

  // On définit l'index du tableau de photo à 0
  photoIndex = 0;
  photoDetails = this.photoService.data[this.photoIndex];

  // Le tableau des favoris est vide au départ
  favorites = [];

  async addToFavorite(){
    // console.log(this.favorites);
    
    const data = await this.favoritesStorage.getFavPhotos();
    this.favorites = data ? data : [];
    this.favorites.push(this.photoDetails);
    this.favoritesStorage.setFavPhotos(this.favorites);
    // console.log(this.storage.get('Favorite'));

  }

  // getFavorite(){
  //   this.favorites=(this.storage.get('Favorite'));
  // }

  ngOnInit() {
    // this.getFavorite();
    this.activatedRoute.params.subscribe( (params) =>  {

      // On recherche l'index du tableau de photo orrespondant à l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex(item => item.id == params.id );


      this.photoDetails = this.photoService.data[this.photoIndex];

      this.favoritesStorage.getFavById(params.id).then((index) =>{
        console.log('La photo est dans les favoris :?' + index)
      });
    });
  }

}
