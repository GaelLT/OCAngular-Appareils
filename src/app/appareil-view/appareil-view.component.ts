import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  /*
  lastUpdate = new Promise (
    (resolve, reject) => {
      const date = new Date();
    setTimeout(
      callback:() => {
        resolve(date);
      }, ms: 2000
    );
  }
  )
  */

  appareils;

  constructor(private appareilService : AppareilService) {
   /* 
   setTimeout(
      callback: () => {
        this.isAuth = true;
      }, ms: 2000
    );
    */
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }
}
