import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { StudentComponent } from './student/student.component';

export const routes: Routes = 
[
    {
         // { path: 'students', component: StudentComponent }
    path: 'student',
    loadComponent: ()=>import('./student/student.component'),
    },
    {
        path: ' ',
        redirectTo: '/student',
        pathMatch:'full'
    }
   
];
