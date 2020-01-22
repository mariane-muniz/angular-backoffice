import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  values: any[] = [];
  selected: any[] = [];
  fields: string[] = ['id', 'code', 'name', 'status'];
  title: string = 'title';

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10 ; i++) {
      this.values.push([i, 999 + i, 'Product name ' + i, 'Active']);
    }
  }
}
