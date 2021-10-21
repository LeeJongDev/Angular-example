import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ChildComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ChildComponent],
})
export class AppModule {}
