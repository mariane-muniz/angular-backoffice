import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {TableComponent} from './pages/table/table.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {CardsComponent} from './pages/cards/cards.component';
import {TabComponent} from './pages/tab/tab.component';
import {ActionEditorComponent} from './pages/action-editor/action-editor.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'table/:entity', component: TableComponent},
  {path: 'card/:entity', component: CardsComponent},
  {path: 'tab/:entity', component: TabComponent},
  {path: 'tab', component: TabComponent},
  {path: 'login', component: LoginComponent},
  {path: 'accordion', component: ActionEditorComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

