import { Injectable } from '@angular/core';

import {SubnavComponent} from '../components/subnav/subnav.component';
import {HeaderComponent} from '../components/header/header.component';
import {HeaderAlertComponent} from '../components/header-alert/header-alert.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {TableActionsComponent} from '../components/table-actions/table-actions.component';
import {TableComponent} from '../components/table/table.component';
import {AdItem} from '../components/ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(TableActionsComponent, {}),
      new AdItem(TableComponent, {})
    ];
  }
}
