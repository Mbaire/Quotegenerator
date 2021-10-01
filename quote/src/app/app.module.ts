import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { quoteAppComponent } from './quote-app.component';
import { CommentsComponent } from './comments/comments.component';
import { NavComponent } from './nav/nav.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule }  from '@angular/material/icon'


@NgModule({
  declarations: [
    QuoteAppComponent,
    CommentsComponent,
    NavComponent,
    AddQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    QuoteAppComponent,
    CommentsComponent,
    NavComponent,
    AddQuoteComponent,
   
  ],
})
export class AppModule {}

  
  

