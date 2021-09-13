import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutofocusDirective } from './shared/directives/autofocus.directive';
import { NodesComponent } from './features/nodes/nodes.component';
import { AddComponent } from './features/nodes/add/add.component';
import { EditMenuComponent } from './features/nodes/edit-menu/edit-menu.component';
import { TypeMenuComponent } from './features/nodes/type-menu/type-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AutofocusDirective,
    NodesComponent,
    TypeMenuComponent,
    EditMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
