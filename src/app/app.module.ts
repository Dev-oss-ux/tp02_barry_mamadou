import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from  '@angular/forms';

import { AppComponent } from './app.component';
import { pageRendu } from './pageRendu/component-summary.component';
import { pageFooter } from './pagefooter/component-footer.component';
import { pageFormulaire } from './pageFormulaire/component-form.component';
import { pageHeader } from './pageHeader/component-header.component';

@NgModule({
  declarations: [
    AppComponent,
    pageHeader,
    pageFooter,
    pageFormulaire,
    pageRendu
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
