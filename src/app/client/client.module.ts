import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ClientAssetsComponent } from './client-assets/client-assets.component';
import {ClientRoutes} from './client-routes.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AddClientComponent,
    ViewClientComponent,
    ClientAssetsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutes,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
