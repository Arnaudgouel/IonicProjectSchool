import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private storage: Storage) { }

  async getFavPhotos(){
    const fav = await this.storage.get('Favorite');
    return fav;
  }

  setFavPhotos(array: any){
    this.storage.set('Favorite', array);
  }

  async getFavById(id){
    const fav = await this.getFavPhotos()
    const index = fav ? fav.findIndex( item => item.id == id): -1;
    return index;
  }

}
