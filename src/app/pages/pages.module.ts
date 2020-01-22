import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {TableComponent} from './table/table.component';
import {ComponentsModule} from '../components/components.module';
import {FormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {NotFoundComponent} from './not-found/not-found.component';
import {CardsComponent} from './cards/cards.component';
import {TabComponent} from './tab/tab.component';
import {ActionEditorComponent} from './action-editor/action-editor.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {NgxGraphModule} from '@swimlane/ngx-graph';

const pages: any[] = [DashboardComponent, LoginComponent, TableComponent, NotFoundComponent, CardsComponent, TabComponent, ActionEditorComponent];

@NgModule({
  declarations: pages,
  exports: pages,
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ClarityModule,
    DragDropModule,
    NgxGraphModule
  ]
})
export class PagesModule { }
