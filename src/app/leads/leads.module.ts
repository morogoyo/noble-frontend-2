import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { DeleteLeadsComponent } from './delete-leads/delete-leads.component';
import { ReadLeadsComponent } from './read-leads/read-leads.component';
import { UpdateLeadsComponent } from './update-leads/update-leads.component';



@NgModule({
  declarations: [
    AddLeadsComponent,
    DeleteLeadsComponent,
    ReadLeadsComponent,
    UpdateLeadsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }