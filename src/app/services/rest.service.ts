import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class RestService<T> {
	baseURL: string = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getOne(url: string): Observable<T> {
		return this.http.get<T>(`${this.baseURL}/${url}`);
	}

	getAll(url: string): Observable<T[]> {
		return this.http.get<T[]>(`${this.baseURL}/${url}`);
	}

	post(url: string, data: any): Observable<T> {
		return this.http.post<T>(`${this.baseURL}/${url}`, data);
	}

	delete(url: string) {
		return this.http.delete(`${this.baseURL}/${url}`);
	}
}
