import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AzureRoutingModule } from './azure-routing.module';
import { ListCosmosComponent } from './components/list-cosmos/list-cosmos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ListCosmosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AzureRoutingModule
  ]
})
export class AzureModule { }
