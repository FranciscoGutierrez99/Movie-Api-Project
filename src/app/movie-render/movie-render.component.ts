import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
import { apicallResponse } from '../shared/apicallResponse.model';
import { Subscription} from 'rxjs'
import { CurrentModeService } from '../shared/current-mode.service';

@Component({
  selector: 'app-movie-render',
  templateUrl: './movie-render.component.html',
  styleUrls: ['./movie-render.component.css']
})
export class MovieRenderComponent implements OnInit, OnDestroy{
  apiResponseSub: Subscription
  apiResponse: apicallResponse = {
    Title:'',
    Plot: '',
    Poster: '',
    Type: '',
    Year: null,
    Released:'',
    Director:''
  }
 constructor( private apicallService:ApicallService, private currentModeService:CurrentModeService){}

  ngOnInit(): void {
    this.apiResponseSub = this.apicallService.apiRespose.subscribe((ResponseData:apicallResponse)=>{
    this.apiResponse = ResponseData;
    })
  }

  ngOnDestroy(): void {
   this.apiResponseSub.unsubscribe();
  } 

  onClick(){
    this.currentModeService.onChangeMode();
  }
}
