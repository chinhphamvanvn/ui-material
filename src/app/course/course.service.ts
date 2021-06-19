import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class CourseService {

  http: HttpClient;
  url: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.url = environment.url;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.url}/api/courses`);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.url}/api/courses`, course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.url}/api/courses/` + courseId);
  }

  updateCourse(courseId: string | number, course: Course): Observable<any> {
    return this.http.put(`${this.url}/api/courses/` + courseId, course);
  }
}
