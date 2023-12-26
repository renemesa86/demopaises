import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonList,
IonItem, IonBadge, IonLabel,IonAvatar, IonButton, IonMenu, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { PokemonService } from '../services/pokemon.service';
import { NewResult } from '../services/interfaces';
import { AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent,
  IonList,IonItem,IonBadge,IonLabel, IonAvatar, IonButton, IonMenu,IonButtons, IonMenuButton],
})
export class HomePage {

  private newsService = inject(PokemonService);
  paises: any[] = [];
  paisConCoordenadas: any[] = [];

  constructor(private alertController: AlertController, private router: Router) {    
     var t: any = this.loadNews();           
  }

  loadNews(){

    this.paises = this.newsService.getNewsData();    
  };

  showDetails(pais:any){

    const paisConCoordenadas = {
      ...pais,
      latitud: pais.coordenadas.latitud,
      longitud: pais.coordenadas.longitud
    }
    this.router.navigate(['/details'], {queryParams: paisConCoordenadas});
  }

  // async mostrarDetalles(pais: any){
  //   const alert = await this.alertController.create({
  //     header: 'Detalles del Pais',
  //     subHeader: pais.name,
  //     message: pais.descripcion,
  //     buttons:['OK'],
  //   });
  //   await alert.present();
  // }

  //loadMore(event:)

}
