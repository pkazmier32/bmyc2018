import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClubinfoComponent } from './clubinfo/clubinfo.component';
import { JuniorsailingComponent } from './juniorsailing/juniorsailing.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SundayRacesComponent } from './gallery/sundayraces.component';
import { GalleryCaroselComponent } from './gallery/gallarycarosel.component';
import { BmyccalendarComponent } from './bmyccalendar/bmyccalendar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClubinfoComponent,
    JuniorsailingComponent,
    ContactsComponent,
    GalleryComponent,
    SundayRacesComponent,
    GalleryCaroselComponent,
    BmyccalendarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
