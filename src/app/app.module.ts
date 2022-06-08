import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostModule } from './post/post.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppHttpInterceptor} from './post/interceptor/intercept.error';
import { ReadmeComponent } from './readme/readme.component'

@NgModule({
  declarations: [
    AppComponent,
    ReadmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers:    [{
    provide: HTTP_INTERCEPTORS,
    useClass:
    AppHttpInterceptor,
    multi: true
 }]
})
export class AppModule { };
