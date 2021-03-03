import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerFeedbackComponent } from './components/customer-feedback/customer-feedback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer-feedback',
    pathMatch: 'full',
  },
  {
    path: 'customer-feedback',
    component: CustomerFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
