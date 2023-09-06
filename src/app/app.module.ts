import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RandomizerComponent } from './pages/randomizer/randomizer.component';
import { GeneratorFieldComponent } from './components/generator-field/generator-field.component';
import { HomeComponent } from './pages/home/home.component';
import { GameBannerComponent } from './components/game-banner/game-banner.component';
import { LolRandomizerComponent } from './pages/lol-randomizer/lol-randomizer.component';
import { LolgeneratorFieldComponent } from './components/lolgenerator-field/lolgenerator-field.component';
import { FormsModule } from '@angular/forms';
import { ChampionsListComponent } from './components/champions-list/champions-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wot', component: RandomizerComponent},
  { path: 'lol', component: LolRandomizerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RandomizerComponent,
    GeneratorFieldComponent,
    HomeComponent,
    GameBannerComponent,
    LolRandomizerComponent,
    LolgeneratorFieldComponent,
    ChampionsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
