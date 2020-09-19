import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPageLayoutComponent } from './components/menu-page-layout/menu-page-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePT from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';
import { ImovelPageComponent } from './components/imovel-page/imovel-page.component';
import { HellocompComponent } from './components/hellocomp/hellocomp.component';


registerLocaleData(localePT, 'pt-br');

@NgModule({
  declarations: [
    AppComponent,
    MenuPageLayoutComponent,
    ImovelCardComponent,
    ImovelPageComponent,
    HellocompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
