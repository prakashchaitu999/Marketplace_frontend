import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './powerups/header/header.component';
import { SlackCardComponent } from './powerups/slack-card/slack-card.component';
import { PowerupsModule } from './powerups/powerups.module';
import { GithubCardComponent } from './powerups/github-card/github-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlackCardComponent,
    GithubCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PowerupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
