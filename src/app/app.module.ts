import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from '../app/core/interceptor/jwt.interceptor';
import { ErrorInterceptor } from '../app/core/interceptor/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/main.component';
import { HeaderComponent } from './features/main/header/header.component';
import { FooterComponent } from './features/main/footer/footer.component';
import { MenuSidebarComponent } from './features/main/menu-sidebar/menu-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './features/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './features/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './core/components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './features/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { WidgetSmallBoxComponent } from './core/components/widgets/widget-small-box/widget-small-box.component';
import { MonthlyRecapReportComponent } from './features/dashboard/monthly-recap-report/monthly-recap-report.component';
import { OnlineStoreVisitorsComponent } from './features/dashboard/online-store-visitors/online-store-visitors.component';
import { SalesComponent } from './features/dashboard/sales/sales.component';
import { AppDailySalesComponent } from './features/reports/app-daily-sales/app-daily-sales.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    WidgetSmallBoxComponent,
    MonthlyRecapReportComponent,
    OnlineStoreVisitorsComponent,
    SalesComponent,
    AppDailySalesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml: true,
      closeButton: true,
    }),
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
