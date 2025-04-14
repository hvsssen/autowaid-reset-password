import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { ResetPasswordComponent } from './app/reset-password/reset-password.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: '', redirectTo: '/reset-password', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient()
    ]
}).catch(err => console.error(err));