import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { AccountModule } from './account/account.module';
import { CollectionModule } from './collection/collection.module';

import { AngularInstructionComponent } from './angular-instruction/angular-instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularInstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    SearchModule,
    AccountModule,
    CollectionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
