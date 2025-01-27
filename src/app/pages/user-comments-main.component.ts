import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { UserCommentsComponent } from '../components/user-comments/user-comments.component';
import { UserCommentsListComponent } from '../components/user-comments-list/user-comments-list.component';
@Component({
  selector: 'app-user-comments-main',
  imports: [CommonModule, UserCommentsComponent,UserCommentsListComponent],
  templateUrl: './user-comments-main.component.html',
  styleUrl: './user-comments-main.component.css'
})
export class UserCommentsMainComponent {
  comments: {userName : string, createdDate : Date, userComment : string}[] = [];

  handlePost(comment: {userName : string,createdDate : Date, userComment : string}) {
     this.comments = [...this.comments, comment]
  }
}
