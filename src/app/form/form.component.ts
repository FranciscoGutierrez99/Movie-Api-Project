import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ApicallService } from '../shared/apicall.service';
import { apicallModel } from '../shared/apicall.model';
import { CurrentModeService } from '../shared/current-mode.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   
  @ViewChild('form') forms:NgForm;


  constructor(private apicallService:ApicallService, private currentMode:CurrentModeService){

  }

  onSubmit(){ 
    const formsValues:apicallModel = {
      movieTitle:this.forms.value.title,
      type:this.forms.value.options,
      yearOfRelease:this.forms.value.year
    }
    this.apicallService.onMovieSearch(formsValues)
    this.currentMode.onChangeMode()
  }
  
}
