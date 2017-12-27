import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './ui/product/product.component';
import { ConfigurationSetsComponent } from './ui/configuration/configuration-sets/configuration-sets.component';
import { SessionService } from './shared/service/session/session.service';
import { ConfigService } from './shared/service/data/config.service';
import { HelpComponent } from './ui/help/help.component';
import { ConfigFileComponent } from './ui/configuration/config-file/config-file.component';
import { ScheduleComponent } from './ui/configuration/schedule/schedule.component';
import { ProductService } from './shared/service/product/product.service';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { ConfigurationSetsDetailComponent } from './ui/configuration/configuration-sets-detail/configuration-sets-detail.component';
import { ConfigurationSetsNewComponent } from './ui/configuration/configuration-sets-new/configuration-sets-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ConfigurationSetsComponent,
    HelpComponent,
    ConfigFileComponent,
    ScheduleComponent,
    DashboardComponent,
    ConfigurationSetsDetailComponent,
    ConfigurationSetsNewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MaterialsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
  ],
  entryComponents: [ConfigurationSetsDetailComponent, ConfigurationSetsNewComponent],
  providers: [SessionService, ConfigService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
