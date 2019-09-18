import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthenticationService } from '@angular-guidelines-nx/core';
import { Login, ApiResponse } from '@angular-guidelines-nx/calibraint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.dialog.html',
  styleUrls: ['./login.dialog.scss']
})
export class LoginDialog implements OnInit {

  loading: boolean = false;
  constructor(public dialogRef: MatDialogRef<LoginDialog>,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loading = true;
    const user: Login = {
      username: 'karthik',
      password: '12345678',
      remember: false
    };
    this.authenticationService.login(user).subscribe((res: ApiResponse) => {
      // Success
      console.log(res);
      this.dialogRef.close('Success');
      this.router.navigate(['/home']);
    }, () => {
      // Error
    }, () => {
      // Complete
      this.loading = false;
    });
  }

  onCancel(): void {
    this.dialogRef.close('Cancel');
  }

}
