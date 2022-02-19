import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './menus/top_menu/top-menu/top-menu.component';
import { SidebarComponent } from './menus/sidebar/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './icons/angular-material.module';
import { PageComponent } from './generic/page/page/page.component';
import { CobrarComponent } from './views/cobrar/cobrar/cobrar.component';
import { DashboardsComponent } from './views/dashboards/dashboards/dashboards.component';
import { SolicitarComponent } from './views/solicitar/solicitar/solicitar.component';
import { FormsModule } from '@angular/forms';
import { GraphicCardComponent } from './pieces/graphic-card/graphic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SidebarComponent,
    PageComponent,
    CobrarComponent,
    DashboardsComponent,
    SolicitarComponent,
    GraphicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
