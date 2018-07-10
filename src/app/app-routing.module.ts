import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClubinfoComponent } from './clubinfo/clubinfo.component';
import { JuniorsailingComponent } from './juniorsailing/juniorsailing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clubinfo', component: ClubinfoComponent },
  { path: 'juniorsailing', component: JuniorsailingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}