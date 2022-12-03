import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PortafolioComponent } from './portafolio/portafolio.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PortafolioComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
