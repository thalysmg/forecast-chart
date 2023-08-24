import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  cityCode = '';

  constructor(private route: ActivatedRoute, private service: ForecastService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cityCode = params['cityCode'];
      this.service.getForecast(this.cityCode).subscribe(res => {
        const temperatures = res.properties.periods.map((period: any) => period.temperature);
        const periods = res.properties.periods.map((period: any) => period.name);
        this.buildChart(temperatures, periods);
      })
    })
  }

  private buildChart(data: number[], labels: string[]): void {
    new Chart("myChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature (Fº)',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  get cityName(): string {
    const cityName: any = {
      LWX: 'District of Columbia',
      TOP: 'Kansas'
    }
    return cityName[this.cityCode];
  }
}
