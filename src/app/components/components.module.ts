import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubnavComponent} from './subnav/subnav.component';
import {HeaderComponent} from './header/header.component';
import {HeaderAlertComponent} from './header-alert/header-alert.component';
import {ClarityModule, ClrDropdownModule, ClrIconModule} from '@clr/angular';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {TableActionsComponent} from './table-actions/table-actions.component';
import {TableComponent} from './table/table.component';
import {AdBannerComponent} from './ad-banner/ad-banner.component';

export const components: any[] = [
  SubnavComponent,
  HeaderComponent,
  HeaderAlertComponent,
  SidebarComponent,
  TableActionsComponent,
  TableComponent,
  AdBannerComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ClrIconModule,
    RouterModule,
    ClrDropdownModule,
    ClarityModule
  ]
})
export class ComponentsModule {
}
