import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

export interface GroupBy {
  label: string;
  isGroupBy: boolean;
  value: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(
    private courseService: CourseService
  ) { }

  displayedColumns: string[] = ['id', 'name', 'description'];
  displayedGroupFooter: string[] = ['label', 'value'];
  dataSource: Course[] | GroupBy = [];

  ngOnInit(): void {
    this.courseService.getAllCourses().pipe(
      map(
        courses => {
          const listCourse = [];
          courses.forEach((course, index) => {
            listCourse.push(course);
            if (index === 2) {
              const row: GroupBy = {
                label: 'AUD',
                isGroupBy: true,
                value: 123
              };
              listCourse.push(row);
            }
            if (index === courses.length - 1) {
              const row: GroupBy = {
                label: 'VND',
                isGroupBy: true,
                value: 456
              };
              listCourse.push(row);
            }
          });
          this.dataSource = listCourse;
        }
      )
    ).subscribe();
  }

  isGroup(index, item): boolean {
    return item.isGroupBy;
  }

}
