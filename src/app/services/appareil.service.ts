import { Subject } from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice())
      }

      getAppareilById(id: number){
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          }
        );
        return appareil;
      }

      switchOnAll(){
          for(let appareil of this.appareils) {
              appareil.status = 'allumé';
          }
          this.emitAppareilSubject();
      }

      switchOffAll(){
        for(let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number){
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

     switchOffOne(index: number){
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }

}