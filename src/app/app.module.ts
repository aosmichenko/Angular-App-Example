import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';
import { LastMileComponent } from './last-mile/last-mile.component';
import {ApiService} from './shared/service/api.service';



@NgModule({
  declarations: [
    AppComponent,
    ExportComponent,
    ImportComponent,
    LastMileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
