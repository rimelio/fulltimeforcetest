import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable } from "rxjs";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        mode: 'cors'
        //Authorization: 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})


export class AppService{
    constructor(private http: HttpClient) { }

    getCommits(): Observable<any>{
        return this.http.get<any>('http://localhost:3000/git', httpOptions)
    }
}