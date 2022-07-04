import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component'
import { SearchService } from './services/search.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchProfileComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    //startegy pattern - Deciding service depends on environment at runtime.
    provide: SearchService, useClass: SearchService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
