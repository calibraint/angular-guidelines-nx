import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, ApiResponse } from '@angular-guidelines-nx/calibraint';
import { tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
const credentialsKey: string = 'currentUser';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(loginData: Login): Observable<any> {
    return this.http.post<ApiResponse>('Login', loginData).pipe(
        tap(
            function (data: ApiResponse): ApiResponse {
                if (data.Status === 'success') {
                    const storage: any = loginData.remember ? localStorage : sessionStorage;
                    storage.setItem(credentialsKey, JSON.stringify(data));
                }
                return data;
            }
        )
    );
  }

  logout(): Observable<boolean> {
    sessionStorage.removeItem(credentialsKey);
    localStorage.removeItem(credentialsKey);
    return observableOf(true);
  }

  isLogin(): boolean {
    if (localStorage.getItem(credentialsKey) || sessionStorage.getItem(credentialsKey)) {
        return true;
    }
    return false;
  }

  private getUser(): object {
    const savedCredentials: string = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
     return JSON.parse( savedCredentials );
}

}
