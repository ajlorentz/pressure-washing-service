import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ReviewMainComponent } from '../review-main/review-main.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import { SchedulingComponent } from '../scheduling/scheduling.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule-cleaning', component: SchedulingComponent },
  { path: 'reviews', component: ReviewMainComponent },
  { path: 'reviews/add', component: AddReviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }