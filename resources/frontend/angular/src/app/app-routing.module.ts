import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobrarComponent } from './views/cobrar/cobrar/cobrar.component';
import { DashboardsComponent } from './views/dashboards/dashboards/dashboards.component';
import { SolicitarComponent } from './views/solicitar/solicitar/solicitar.component';
import { SolicitacoesComponent } from './views/solicitacoes/solicitacoes.component';

const routes: Routes = [
  { path: '', component: DashboardsComponent },
  { path: 'dashboards', component: DashboardsComponent },
  { path: 'solicitar', component: SolicitarComponent },
  { path: 'cobrar', component: CobrarComponent },
  { path: 'solicitacoes', component: SolicitacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
