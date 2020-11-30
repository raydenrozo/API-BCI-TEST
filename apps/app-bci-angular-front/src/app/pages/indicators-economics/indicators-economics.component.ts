import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IIndicatorsEconomics } from 'src/app/models/interfaces';
import { EconomicsIndicatorsService } from '../../services/economics-indicators.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { IIndicatorsDescription } from '../../models/interfaces/indicators-description.models';
@Component({
  selector: 'app-indicators-economics',
  templateUrl: './indicators-economics.component.html',
  styleUrls: ['./indicators-economics.component.scss']
})
export class IndicatorsEconomicsComponent implements OnInit {
  // Doughnut
  doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    //[250, 130, 70],
  ];
  doughnutChartType: ChartType = 'doughnut';
  indicatorsEconomics: any = {};

  constructor(private changeDetectorRef: ChangeDetectorRef,
            private economicsIndicatorsService: EconomicsIndicatorsService) { }

  ngOnInit(): void {
    this.economicsIndicatorsService.getGeneralInidcators().subscribe(
      (apiResponse: any) => {
        if (apiResponse.ok === true) {
          this.indicatorsEconomics = apiResponse?.indicators;
          const { cobre, dolar, euro, ipc, ivp, oro, plata, uf, utm, yen } = this.indicatorsEconomics;

          if (cobre && plata && oro) {
            this.doughnutChartLabels = [];
            this.doughnutChartLabels.push('Cobre');
            this.doughnutChartLabels.push('Plata');
            this.doughnutChartLabels.push('Oro');

            this.doughnutChartData = [
              [yen?.value, dolar?.value, euro?.value],
              [yen?.value, dolar?.value, euro?.value],
              [yen?.value, dolar?.value, euro?.value]
            ];
            console.log(this.indicatorsEconomics);
          }
        }
      }, (error: any) => {
        console.log('Error en la ejecucion del servicio', error);
      });
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    // this.economicsIndicatorsService?.unsubscribe();
}


  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
