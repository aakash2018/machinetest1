import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AddCompaniesComponent } from './add-companies/add-companies.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [BaseComponent, ListPageComponent, AddCompaniesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    BaseRoutingModule,
    MatDialogModule
  ]
})
export class BaseModule { }
