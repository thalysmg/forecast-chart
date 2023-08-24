import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) {}

  public getForecast(cityCode: string): Observable<any> {
    return this.http.get(`https://api.weather.gov/gridpoints/${cityCode}/31,80/forecast`)
  }
}
