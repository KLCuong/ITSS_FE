export interface Faculty {
  id: number;
  name: string;
}

export interface Department {
  id: number;
  name: string;
  faculty_id: number;
  Faculty: Faculty;
}

export interface Course {
  id: number;
  name: string;
  department_id: number;
  Department: Department;
}

export interface Document {
  id: number;
  title: string;
  description: string;
  file_path: string;
  course_id: number;
  year_id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  Course: Course;
}
