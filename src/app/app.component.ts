import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BulkuploadComponent } from './components/bulkupload/bulkupload.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BulkuploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
