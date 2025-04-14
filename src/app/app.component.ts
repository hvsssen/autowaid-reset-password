import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: '', redirectTo: '/reset-password', pathMatch: 'full' }
];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterModule
    ],
    template: `
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {}