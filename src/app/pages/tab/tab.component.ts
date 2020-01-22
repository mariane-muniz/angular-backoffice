import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs: any[] = [];

  variavel = false;

  constructor() { }

  ngOnInit() {
    this.tabs.push({
      title: 'Main',
    });
    this.tabs.push({
      title: 'Second'
    });
  }

}
