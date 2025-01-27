import { Component, Input  } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-comments-list',
  imports: [DataViewModule, CommonModule],
  templateUrl: './user-comments-list.component.html',
  styleUrl: './user-comments-list.component.css'
})
export class UserCommentsListComponent {
  @Input() comments: {userName : string, createdDate : Date, userComment : string}[] = [];
}
