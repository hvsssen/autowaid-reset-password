import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    token: string = '';
    newPassword: string = '';
    message: string = '';
    error: boolean = false;

    private apiUrl = 'https://pfaautowaidbackend.onrender.com/api/users';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        // Extract the token from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            this.token = token;
        } else {
            this.message = 'No token provided in the URL.';
            this.error = true;
        }
    }

    resetPassword(): void {
        if (!this.token || !this.newPassword) {
            this.message = 'Token and new password are required.';
            this.error = true;
            return;
        }

        const request = { token: this.token, password: this.newPassword };
        this.http.post(`${this.apiUrl}/reset-password`, request, { responseType: 'text' })
            .subscribe({
                next: (response) => {
                    this.message = response; // e.g., "Password updated successfully."
                    this.error = false;
                },
                error: (err) => {
                    this.message = err.error || 'An error occurred while resetting the password.';
                    this.error = true;
                }
            });
    }
}