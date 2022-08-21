import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Computer Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100, 140 ],
          backgroundColor: ['#FAC374','#6f2fd3','#ba00ad','#FA1157'],
          hoverBackgroundColor: ['#FAC374','#6f2fd3','#ba00ad','#FA1157'],
          hoverBorderColor:['#FAC374','#6f2fd3','#ba00ad','#FA1157'], }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

}
