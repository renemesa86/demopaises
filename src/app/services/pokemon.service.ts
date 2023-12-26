import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NewResult } from './interfaces';

const BASE_URL = "http://api.mediastack.com/";
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);
  public numeros:any = [
   
        {
          "nombre": "Estados Unidos",
          "descripcion": "Estados Unidos es una nación diversa con una rica historia. Es conocido por su influencia cultural global y sus paisajes variados.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",
          "capital": "Washington, D.C.",
          "coordenadas": {
            "latitud": 38.8951100,
            "longitud": -77.0363700
          }
        },
        {
          "nombre": "Brasil",
          "descripcion": "Brasil es el país más grande de América del Sur, famoso por su selva amazónica, playas impresionantes y festivales animados.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
          "capital": "Brasilia",
          "coordenadas": {
            "latitud": -15.7801480,
            "longitud": -47.9291690
          }
        },
        {
          "nombre": "China",
          "descripcion": "China, con una historia milenaria, es conocida por su cultura rica y diversa, así como por su rápido desarrollo económico.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png",
          "capital": "Pekín",
          "coordenadas": {
            "latitud": 39.9042,
            "longitud": 116.4074
          }
        },
        {
          "nombre": "India",
          "descripcion": "India es una nación colorida y diversa con una historia antigua. Es conocida por su cultura, religiones y monumentos impresionantes.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",
          "capital": "Nueva Delhi",
          "coordenadas": {
            "latitud": 28.6139,
            "longitud": 77.2090
          }
        },
        {
          "nombre": "Canadá",
          "descripcion": "Canadá es conocido por su impresionante belleza natural, desde las Montañas Rocosas hasta la tundra ártica.",
          "bandera": "https://cdn.countryflags.com/thumbs/canada/flag-800.png",
          "capital": "Ottawa",
          "coordenadas": {
            "latitud": 45.4215,
            "longitud": -75.6993
          }
        },
        {
          "nombre": "Australia",
          "descripcion": "Australia es famosa por su vida silvestre única, playas increíbles y ciudades modernas.",
          "bandera": "https://cdn.countryflags.com/thumbs/australia/flag-800.png",
          "capital": "Camberra",
          "coordenadas": {
            "latitud": -35.2820,
            "longitud": 149.1287
          }
        },
        {
          "nombre": "Japón",
          "descripcion": "Japón combina la tradición con la tecnología moderna, con hermosos templos y ciudades futuristas.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
          "capital": "Tokio",
          "coordenadas": {
            "latitud": 35.6895,
            "longitud": 139.6917
          }
        },
        {
          "nombre": "Reino Unido",
          "descripcion": "El Reino Unido tiene una rica historia y es hogar de ciudades icónicas como Londres y Edimburgo.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
          "capital": "Londres",
          "coordenadas": {
            "latitud": 51.5099,
            "longitud": -0.1180
          }
        },
        {
          "nombre": "Alemania",
          "descripcion": "Alemania es conocida por su ingeniería de calidad, historia cultural y hermosos paisajes.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
          "capital": "Berlín",
          "coordenadas": {
            "latitud": 52.5200,
            "longitud": 13.4050
          }
        },
        {
          "nombre": "México",
          "descripcion": "México es conocido por su rica cultura, playas hermosas y una cocina deliciosa y variada.",
          "bandera": "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png",
          "capital": "Ciudad de México",
          "coordenadas": {
            "latitud": 19.4326,
            "longitud": -99.1332
          }
        }
        // Puedes agregar más países según tus necesidades
      
   
    
    ];

  constructor() { 
    this.getNewsData();
  }

  getNewsData(){
    //return this.http.get<NewResult>(`${BASE_URL}/v1/news?access_key=${API_KEY}`);
    console.log(this.numeros);
    
    return this.numeros;
  }

  getNewDetails(id: string){
    console.log(5656);
  }
}
