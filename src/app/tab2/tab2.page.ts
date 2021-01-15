import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  photoList = [];

  constructor(private photoService: PhotosService) {}

  ngOnInit(){
    console.log(this.photoService.data);
    this.photoList = this.photoService.data;
  }
}
