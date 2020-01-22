import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.css']
})
export class TableActionsComponent implements OnInit {

  @Input() selected: any[] = [];
  isModalVisible = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickToEdit() {
    if (this.selected.length === 1) {
      this.router.navigate(['/tab/test']);
    }
  }

  clickToAdd() {
    this.router.navigate(['/tab']);
  }
}
