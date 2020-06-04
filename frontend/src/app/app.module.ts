import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommandsComponent } from './components/commands/commands.component';
import { HeaderComponent } from './components/header/header.component';
import { CenterContainerComponent } from './components/center-container/center-container.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { AddCommandComponent } from './components/add-command/add-command.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandsComponent,
    HeaderComponent,
    CenterContainerComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    DetailsCardComponent,
    AddCommandComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
