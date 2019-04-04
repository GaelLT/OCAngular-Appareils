import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Appareils';

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
