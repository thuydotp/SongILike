import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { AngularInstructionComponent } from './angular-instruction/angular-instruction.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'search', component: SearchComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'temp', component: AngularInstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
