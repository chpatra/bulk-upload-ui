import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BulkuploadComponent } from './components/bulkupload/bulkupload.component';
import { UserCommentsMainComponent } from './pages/user-comments-main.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BulkuploadComponent, UserCommentsMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
