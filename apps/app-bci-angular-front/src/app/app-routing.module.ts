import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { IndicatorsEconomicsComponent } from './pages/indicators-economics/indicators-economics.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'indicatorEconomics', component: IndicatorsEconomicsComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'graphics1', component: Graphics1Component },
  { path: '', redirectTo: '/indicatorEconomics', pathMatch: 'full' },
  { path: '**', component: IndicatorsEconomicsComponent  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
