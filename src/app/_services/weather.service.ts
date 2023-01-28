import { Injectable } from "@angular/core";
import { HttpParams, HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class WeatherService {
  apiUrl = "http://api.openweathermap.org/data/2.5/weather";
  apiKey = "df67642e748e76553f145f86aa4caaa4";
  constructor(private http: HttpClient) {}

  getWeather(lat, lon) {
    let params = new HttpParams()
      .set("lat", lat)
      .set("lon", lon)
      .set("units", "imperial")
      .set("appid", this.apiKey);

    return this.http.get(this.apiUrl, { params });
  }
  getWeatherDataByCityName(city:string){
    let params = new HttpParams()
    .set('q',city)
    .set('units',"imperial")
    .set("appid",this.apiKey)

    return this.http.get(this.apiUrl,{params})
  }
}
