import { PublishComponent } from './ui/publish/publish.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { ProductComponent } from './ui/product/product.component';
import { ConfigurationSetsComponent } from './ui/configuration/configuration-sets/configuration-sets.component';
import { HelpComponent } from './ui/help/help.component';
import { ScheduleComponent } from './ui/configuration/schedule/schedule.component';
import { ConfigFileComponent } from './ui/configuration/config-file/config-file.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'configset', component: ConfigurationSetsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'help', component: HelpComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'configfile', component: ConfigFileComponent },
  { path: 'event', component: ConfigFileComponent },
  { path: 'publish', component: PublishComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
