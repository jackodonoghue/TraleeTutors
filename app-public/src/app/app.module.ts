import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GrindListComponent } from './grind-list/grind-list.component';

@NgModule({
  declarations: [
    GrindListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [GrindListComponent]
})
export class AppModule { }
