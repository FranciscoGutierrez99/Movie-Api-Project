import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentModeService {
  modeSub = new Subject<boolean>();
  movieRenderMode = false;
  constructor() { }

  onChangeMode() {
    this.movieRenderMode = !this.movieRenderMode;
    console.log(this.movieRenderMode);
    this.modeSub.next(this.movieRenderMode);
  }
}
