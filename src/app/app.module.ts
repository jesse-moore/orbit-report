import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './components/orbit-list/orbit-list.component';
import { OrbitCountsComponent } from './components/orbit-counts/orbit-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    OrbitCountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
