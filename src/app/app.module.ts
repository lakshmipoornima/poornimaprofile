import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PhotoComponent } from './photo/photo.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';




@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    ProjectsComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
