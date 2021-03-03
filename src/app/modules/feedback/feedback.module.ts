import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { CustomerFeedbackComponent } from './components/customer-feedback/customer-feedback.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerFeedbackComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    CustomerFeedbackComponent
  ]
})
export class FeedbackModule { }
