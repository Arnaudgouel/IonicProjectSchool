import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http :HttpClient) {}
  
  meme :any;
  
  ionViewWillEnter(){

    
  }

  addMeme(){
    const URL = "https://api.imgflip.com/get_memes";

    this.http.get(URL).subscribe((datas) => {
      console.log(datas.data.memes[0]);
      this.meme=datas.data.memes[0];
    });
  }

}
