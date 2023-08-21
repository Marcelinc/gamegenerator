import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RandomizerComponent } from './pages/randomizer/randomizer.component';
import { GeneratorFieldComponent } from './components/generator-field/generator-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RandomizerComponent,
    GeneratorFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
