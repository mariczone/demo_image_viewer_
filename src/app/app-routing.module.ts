import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenseaComponent } from './opensea/opensea.component';

const routes: Routes = [
  { path: 'opensea', component: OpenseaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
