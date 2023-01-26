import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from 'src/pipes/shorten.pipe';
import { FilterServersPipe } from 'src/pipes/filter-servers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterServersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
