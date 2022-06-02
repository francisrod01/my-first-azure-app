import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCosmosComponent } from './components/list-cosmos/list-cosmos.component';

const routes: Routes = [
  {
    path: 'list-cosmos',
    component: ListCosmosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AzureRoutingModule { }
