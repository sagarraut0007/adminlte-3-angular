import { Component, OnInit, Input } from '@angular/core';
import { SmallBox } from 'src/app/core/models/small-box-models';

@Component({
  selector: 'widget-small-box',
  templateUrl: './widget-small-box.component.html',
  styleUrls: ['./widget-small-box.component.scss'],
})
export class WidgetSmallBoxComponent implements OnInit {
  @Input() data: SmallBox;

  ngOnInit(): void {}
}
