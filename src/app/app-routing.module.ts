import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'azure',
    loadChildren: () => import('./azure/azure.module').then(m => m.AzureModule),
  },
  {
    path: '', redirectTo: '/azure/list-cosmos', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
