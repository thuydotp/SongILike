import { AppCommonModule } from './../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [HomeComponent]
})

export class HomeModule { }
