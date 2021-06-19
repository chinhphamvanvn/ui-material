import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course.routing.module';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,

    MatTableModule
  ]
})
export class CourseModule { }
