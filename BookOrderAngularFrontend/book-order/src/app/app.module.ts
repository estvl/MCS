import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkyServiceComponent } from './sky-service/sky-service.component';
import { SkyComponent } from './sky/sky.component';

@NgModule({
  declarations: [		
    AppComponent,
      SkyServiceComponent,
      SkyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
