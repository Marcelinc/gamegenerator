import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RandomizerComponent } from './pages/randomizer/randomizer.component';
import { GeneratorFieldComponent } from './components/generator-field/generator-field.component';
import { HomeComponent } from './pages/home/home.component';
import { GameBannerComponent } from './components/game-banner/game-banner.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wot', component: RandomizerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RandomizerComponent,
    GeneratorFieldComponent,
    HomeComponent,
    GameBannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
