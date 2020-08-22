import { Component, OnInit } from '@angular/core';
import { SmallBox } from 'src/app/core/models/small-box-models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public newOrdersWidget: SmallBox;
  public revenueWidget: SmallBox;
  public salesWidget: SmallBox;
  public visitorsWidget: SmallBox;
  constructor() {
    this.newOrdersWidget = new SmallBox(
      '150',
      'New Orders',
      'ion ion-bag',
      true,
      'More Info',
      '#',
      'bg-info'
    );
    this.revenueWidget = new SmallBox(
      '31,050,000',
      'Revenue',
      'ion ion-stats-bars',
      true,
      'More Info',
      '#',
      'bg-success'
    );
    this.salesWidget = new SmallBox(
      '11,050,000',
      'Sales',
      'ion ion-pie-graph',
      true,
      'More Info',
      '#',
      'bg-warning'
    );
    this.visitorsWidget = new SmallBox(
      '150',
      'Visitors',
      'ion ion-person-add',
      true,
      'More Info',
      '#',
      'bg-danger'
    );
  }

  ngOnInit() {}
}
