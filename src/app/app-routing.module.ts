import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExportComponent} from './export/export.component';
import {LastMileComponent} from './last-mile/last-mile.component';
import {ImportComponent} from './import/import.component';

const routes: Routes = [
  {
    path: '',
    component: ExportComponent
  },
  {
    path: 'export',
    component: ExportComponent
  },
  {
    path: 'last-mile',
    component: LastMileComponent
  },
  {
    path: 'import',
    component: ImportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
