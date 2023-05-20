import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'characters/:id', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
