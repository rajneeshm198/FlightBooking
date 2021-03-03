import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { FeedbackModule } from './modules/feedback/feedback.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    BookFlightComponent,
    FlightDetailsComponent,
    ContactUsComponent,
    AboutUsComponent,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // FeedbackModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
