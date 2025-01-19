import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulkUploadService {
  private apiUrl = 'http://localhost:5094/api/Upload/upload';

  constructor(private http : HttpClient) { }

  uploadFile(formData: FormData): Observable<any> { 
    return this.http.post<any>(this.apiUrl, formData); 
  }
}
