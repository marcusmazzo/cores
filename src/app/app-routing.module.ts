import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorComponent } from './cor/cor.component';

const routes: Routes = [
  { path: '', component: CorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
