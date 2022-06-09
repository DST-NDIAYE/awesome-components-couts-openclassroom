import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule ,
    SharedModule ,
    HttpClientModule
  ]
  ,

  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
