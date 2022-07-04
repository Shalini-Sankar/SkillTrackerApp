import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from './../models/userdata';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public token: string;

  constructor(private _http: HttpClient, private _Route: Router) { }

  apiUrl: string = `http://localhost:9000/user/`;

  public validateLoginUser(loginmodel: UserData)
    {
        var getUrl = this.apiUrl + "authenticate";
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });        
        return this._http.post<any>(getUrl, loginmodel, { headers: headers })
            .pipe(tap(data =>
            {
                console.log(data);

                if (data.token != null)
                {
                
                    if (data.usertype == "employee") {
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('EmployeeUser', JSON.stringify({ username: data.userName, token: data.token }));
                    }
                    else if (data.usertype == "admin") {
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('AdminUser', JSON.stringify({ username: data.userName, token: data.token }));
                    }
                    // return true to indicate successful login
                    return data;
                } else {
                    // return false to indicate failed login
                    return null;
                }
            }),
                catchError(this.handleError)
            );
    }

    LogoutUser() {
        localStorage.removeItem('currentUser');
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };
}
