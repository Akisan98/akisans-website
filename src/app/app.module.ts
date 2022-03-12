import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturedProjectComponent } from './projects/featured-project/featured-project.component';
import { OtherProjectComponent } from './projects/other-project/other-project.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedProjectComponent,
    OtherProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
