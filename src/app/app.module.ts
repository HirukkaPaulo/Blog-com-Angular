import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SmallCardComponent } from './Components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MainTitleComponent } from './Components/main-title/main-title.component';
import { BigCardComponent } from './Components/big-card/big-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SmallCardComponent,
    HomeComponent,
    MainTitleComponent,
    BigCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
