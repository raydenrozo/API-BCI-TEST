import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicatorsEconomicsComponent } from './pages/indicators-economics/indicators-economics.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsEconomicsComponent,
    DashboardComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    ProgressComponent,
    Graphics1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
