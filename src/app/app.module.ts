import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { FormComponent } from './form/form.component';
import { MovieRenderComponent } from './movie-render/movie-render.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MovieRenderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
