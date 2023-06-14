import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentModeService } from './shared/current-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  modeSubscription: Subscription
  movieRenderMode:boolean
  constructor(private currentModeService:CurrentModeService){}

  ngOnInit(): void {
    this.movieRenderMode = this.currentModeService.movieRenderMode
    this.modeSubscription = this.currentModeService.modeSub.subscribe((response:boolean)=> {
      this.movieRenderMode = response
    })
  }

  ngOnDestroy(): void {
    this.modeSubscription.unsubscribe();
  }


  
}
