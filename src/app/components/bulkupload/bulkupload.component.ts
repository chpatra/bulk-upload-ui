import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { NgModule } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
import { BulkUploadService } from '../../services/bulk-upload.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-bulkupload',
  imports: [FileUploadModule, CommonModule],
  templateUrl: './bulkupload.component.html',
  styleUrl: './bulkupload.component.css'
})
export class BulkuploadComponent {
  constructor(private bulkUploadService: BulkUploadService){}

  onUpload(event: any) {
    debugger;
    const file = event.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.bulkUploadService.uploadFile(formData).subscribe(
      response => {
        console.log('File upload successful', response);
      },
      error => {
        console.error('File upload failed', error);
      }
    );
  }
}
