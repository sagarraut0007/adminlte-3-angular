import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-daily-sales',
  templateUrl: './app-daily-sales.component.html',
  styleUrls: ['./app-daily-sales.component.scss'],
})
export class AppDailySalesComponent implements OnInit {
  canvas: any;
  ctx: any;

  constructor() {}

  ngOnInit(): void {
    this.canvas = document.getElementById('amazon-daliy-pos');
    this.ctx = this.canvas.getContext('2d');

    const ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold',
    };

    const mode = 'index';
    const intersect = true;

    const myChart = new Chart(this.ctx, {
      type: 'horizontalBar',
      data: {
        labels: [
          '100 Cookies',
          'Goodnight, Goodnight, Construction Site bb',
          'Press Here',
          'Ultimate Bar Book',
          'From Crook to Cook',
          'This Is How We Do It',
          'Every Little Thing',
          'The Ivy & Bean Secret Tressure Box',
          'Men to Avoid in Art and Life',
          'One Love',
        ],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            // barThickness: 8,
            data: [3000, 2700, 2500, 2400, 2200, 2200, 2000, 1900, 1800, 1500],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,

        tooltips: {
          mode,
          intersect,
        },
        hover: {
          mode,
          intersect,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              // display: false,
              gridLines: {
                display: false,
              },
              ticks: $.extend(
                {
                  beginAtZero: true,
                },
                ticksStyle
              ),
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              ticks: ticksStyle,
            },
          ],
        },
      },
    });
  }
}
