import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularInstructionComponent } from './angular-instruction/angular-instruction.component';
import { LayoutComponent } from './layout/layout.component';
import { NowPlayingBarComponent } from './layout/now-playing-bar/now-playing-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MainViewComponent } from './layout/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularInstructionComponent,
    LayoutComponent,
    NowPlayingBarComponent,
    SideBarComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
