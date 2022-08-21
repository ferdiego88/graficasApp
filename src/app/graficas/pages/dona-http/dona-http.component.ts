import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getDataSocialMedia()
      .subscribe(data => {
        this.doughnutChartData = {
          labels: Object.keys(data),
          datasets: [{data: Object.values(data)}]
        }

      });
  }

   // Doughnut
   public doughnutChartLabels: string[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Computer Sales'
  ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [
        //350, 450, 100, 140
       ],
         backgroundColor: ['#FAC374','#6f2fd3','#ba00ad','#FA1157'],
         hoverBackgroundColor: ['#FAC374','#6f2fd3','#ba00ad','#FA1157'],
         hoverBorderColor:['#FAC374','#6f2fd3','#ba00ad','#FA1157'], }
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';

}
