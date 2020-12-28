import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDPSLl5GeE-0oeShKU8GMVXRTOg0SJPwVI",
      authDomain: "backendaas.firebaseapp.com",
      projectId: "backendaas",
      storageBucket: "backendaas.appspot.com",
      messagingSenderId: "773584877793",
      appId: "1:773584877793:web:9c689880fd0cdbe226dfa0"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
