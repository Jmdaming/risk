import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { DashboardTotalComponent } from './dashboard-total/dashboard-total.component';
import { CbCountGraphComponent } from './cb-count-graph/cb-count-graph.component';
import { ProductCountGraphComponent } from './product-count-graph/product-count-graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ApplicationInformationComponent} from './application/application-information/application-information.component';
import {ApplicationListComponent} from './application/application-list/application-list.component';
import {ApplicationListItemComponent} from './application/application-list-item/application-list-item.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'application', component: ApplicationInformationComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    DashboardTotalComponent,
    CbCountGraphComponent,
    ProductCountGraphComponent,
    DashboardComponent,
    ApplicationInformationComponent,
    ApplicationListComponent,
    ApplicationListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
