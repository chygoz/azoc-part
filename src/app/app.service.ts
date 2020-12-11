import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from './app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) { }

  login(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(`${api.api_url}login`, data, { headers });
  }

  register(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(`${api.api_url}register`, data, { headers });
  }
  
  getSubscriptions(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    //headers = headers.append('token', localStorage.getItem('token'))
    return this.http.post(`${api.api_url}getSubscriptions`, data, { headers });
  }

  getUserdata(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', localStorage.getItem('token'))
    return this.http.post(`${api.api_url}getUserData`, data, { headers });
  }

  updateUserdata(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', localStorage.getItem('token'))
    return this.http.post(`${api.api_url}updateUserdata`, data, { headers });
  }

  getMonthlyCommitment(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', localStorage.getItem('token'))
    return this.http.post(`${api.api_url}getMonthlyCommitment`, data, { headers });
  }

  registerSubscription(data): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', localStorage.getItem('token'))
    return this.http.post(`${api.api_url}registerSubscription`, data, { headers });
  }
}
