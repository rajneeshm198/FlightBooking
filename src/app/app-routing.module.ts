import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {
      hideMenus: true
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      hideMenus: true,
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'search-flight/normal-booking',
        component: FlightDetailsComponent,
        data: {
          isBusiness: false,
        }
      },
      {
        path: 'search-flight/business-booking',
        component: FlightDetailsComponent,
        data: {
          isBusiness: true,
        }
      }
    ]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'booking-confirmed',
    component: BookingConfirmedComponent
  },
  {
    path: 'sales-analytics',
    component: PieChartComponent
  },
  {path: 'feedback', loadChildren: () => import('./modules/feedback/feedback.module').then(m => m.FeedbackModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
