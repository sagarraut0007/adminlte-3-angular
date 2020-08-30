import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  canvas: any;
  ctx: any;

  constructor() {}

  ngOnInit(): void {
    this.canvas = document.getElementById('sales-chart');
    this.ctx = this.canvas.getContext('2d');

    const ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold',
    };

    const mode = 'index';
    const intersect = true;

    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            data: [1000, 2000, 3000, 2500, 2700, 2500, 3000],
          },
          {
            backgroundColor: '#ced4da',
            borderColor: '#ced4da',
            data: [700, 1700, 2700, 2000, 1800, 1500, 2000],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
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
                display: true,
                lineWidth: '4px',
                color: 'rgba(0, 0, 0, .2)',
                zeroLineColor: 'transparent',
              },
              ticks: $.extend(
                {
                  beginAtZero: true,

                  // Include a dollar sign in the ticks
                  callback(value, index, values) {
                    if (value >= 1000) {
                      value /= 1000;
                      value += 'k';
                    }
                    return '$' + value;
                  },
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
