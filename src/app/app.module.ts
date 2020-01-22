import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ServicesModule} from './services/services.module';
import {HttpClientModule} from '@angular/common/http';
import {ComponentsModule} from './components/components.module';
import {PagesModule} from './pages/pages.module';
import { AdDirectiveDirective } from './directives/ad-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdDirectiveDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ServicesModule,
    PagesModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
