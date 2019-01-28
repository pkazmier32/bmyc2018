import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClubinfoComponent } from './clubinfo/clubinfo.component';
import { JuniorsailingComponent } from './juniorsailing/juniorsailing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SundayRacesComponent } from './gallery/sundayraces.component';
import { GalleryCaroselComponent } from './gallery/gallarycarosel.component';
import { BmyccalendarComponent } from './bmyccalendar/bmyccalendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clubinfo', component: ClubinfoComponent },
  { path: 'juniorsailing', component: JuniorsailingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'sundayraces', component: SundayRacesComponent },
  { path: 'imagecarosel', component: GalleryCaroselComponent},
  { path: 'bmyccalendar', component: BmyccalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}