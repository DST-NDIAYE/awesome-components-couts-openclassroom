import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CommentsComponent } from './components/comments/comments.component';
import { ShortenPipe } from './pipes/shorten.pipe';



@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule ,
    MatCardModule ,
    MaterialModule ,
    ReactiveFormsModule

  ] ,
  exports:[
    CommentsComponent ,
    MaterialModule ,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
