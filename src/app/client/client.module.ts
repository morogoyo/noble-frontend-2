import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ClientAssetsComponent } from './client-assets/client-assets.component';



@NgModule({
  declarations: [
    AddClientComponent,
    ViewClientComponent,
    ClientAssetsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
