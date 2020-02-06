import { LayoutComponent } from './layout/layout.component';
import { AngularInstructionComponent } from './angular-instruction/angular-instruction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LayoutComponent },  
  { path: 'temp', component: AngularInstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
