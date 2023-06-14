import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { apicallModel } from './apicall.model';
import { apicallResponse } from './apicallResponse.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  apiRespose = new Subject<apicallResponse>();
  url2 = 'http://www.omdbapi.com'
  constructor(private http: HttpClient) { }

  onMovieSearch(data:apicallModel){
    console.log(data);
    this.http.get(this.url2,{params: new HttpParams()
      .set('apikey',environment.MovieApiKey)
      .append('t',data.movieTitle)
      .append('type',data.type)
      .append('y',data.yearOfRelease)
      .append('plot','short')
      }).subscribe((responseData:apicallResponse)=>{
        console.log(responseData)
        this.apiRespose.next({
          Title:responseData.Title,
          Plot:responseData.Plot,
          Poster:responseData.Poster,
          Type:responseData.Type,
          Year:responseData.Year,
          Released:responseData.Released,
          Director:responseData.Director,
          Error:responseData.Error
    
        })
      })
  }
  

}
