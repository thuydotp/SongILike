import { AppCommonModule } from './../common/common.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingBarComponent } from './now-playing-bar/now-playing-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CollectionService } from '../common/services/collection.service';


@NgModule({
  declarations: [
    LayoutComponent,
    NowPlayingBarComponent,
    SideBarComponent,
    MainViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppCommonModule
  ],
  exports: [
    LayoutComponent,
    NowPlayingBarComponent,
    SideBarComponent,
    MainViewComponent
  ],
  providers: [
    CollectionService
  ]
})
export class LayoutModule { }
