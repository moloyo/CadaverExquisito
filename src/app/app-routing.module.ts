import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadaverComponent } from './cadaver/cadaver.component';

const routes: Routes = [
  { path: 'cadaver', component: CadaverComponent },
  { path: '', redirectTo: '/cadaver', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
