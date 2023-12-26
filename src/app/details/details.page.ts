import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {
  countryDetails: any;
  latitud: any ;
  longitud: any ;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.countryDetails = params;
      console.log(params);
      this.latitud = params['coordenadas'].latitud;
      this.longitud = params['coordenadas'].longitud;
      console.log(params['coordenadas'].longitud);
      
    });
  }

}
