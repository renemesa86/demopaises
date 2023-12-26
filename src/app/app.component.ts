import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonList,
  IonItem, IonBadge, IonLabel,IonAvatar, IonButton, IonMenu, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent,
    IonList,IonItem,IonBadge,IonLabel, IonAvatar, IonButton, IonMenu, IonButtons, IonMenuButton],
})
export class AppComponent {
  constructor(private router: Router) {}

  openPage(page:string){
    this.router.navigate([page.toLowerCase()]);
  }

}
