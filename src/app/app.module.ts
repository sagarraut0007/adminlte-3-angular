import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
