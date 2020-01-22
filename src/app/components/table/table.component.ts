import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() selected: any[] = [];
  @Input() fields: any;
  @Input() values: any;
  @Input() displayPagination: boolean;

  constructor() { }

  ngOnInit() {
  }
}
