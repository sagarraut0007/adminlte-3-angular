import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NonAuthGuard } from './core/guards/non-auth.guard';
import { AppDailySalesComponent } from './features/reports/app-daily-sales/app-daily-sales.component';
const accountModule = () =>
  import('./features/account/account.module').then((x) => x.AccountModule);

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dailysales',
        component: AppDailySalesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'account', loadChildren: accountModule },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
