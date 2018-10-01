import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClubinfoComponent } from './clubinfo/clubinfo.component';
import { JuniorsailingComponent } from './juniorsailing/juniorsailing.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SundayRacesComponent } from './gallery/sundayraces.component';
import { GalleryCaroselComponent } from './gallery/gallarycarosel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClubinfoComponent,
    JuniorsailingComponent,
    ContactsComponent,
    GalleryComponent,
    SundayRacesComponent,
    GalleryCaroselComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
