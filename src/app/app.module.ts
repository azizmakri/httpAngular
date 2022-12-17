import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInvoicesComponent } from './core/add-invoices/add-invoices.component';
import { UpdateInvoicesComponent } from './core/update-invoices/update-invoices.component';
import { FetchInvoicesComponent } from './core/fetch-invoices/fetch-invoices.component';
import { DeleteInvoicesComponent } from './core/delete-invoices/delete-invoices.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddInvoicesComponent,
    UpdateInvoicesComponent,
    FetchInvoicesComponent,
    DeleteInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
