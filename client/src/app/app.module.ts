import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';

import { MessagesService } from './services/messages.service';
import { HomeComponent } from './components/home/home.component';
// import { MessageComponent } from './components/message/message.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  // No PageNotFound Handling Yet
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
