import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-comments',
  imports: [CommonModule, FormsModule, TextareaModule, ButtonModule],
  templateUrl: './user-comments.component.html',
  styleUrl: './user-comments.component.css'
})
export class UserCommentsComponent {

  comment: string = '';
  username : string =this.getUserName()
  @Output() onPost = new EventEmitter<{userName : string,createdDate : Date, userComment : string}>();

  postComment() {
    if (this.comment.trim()) {
      this.onPost.emit({
        userName : this.username,
        createdDate : new Date(),
        userComment : this.comment
      });
      this.comment = '';
    }
  }

  cancelComment() {
    this.comment = '';
  }

  getUserName(){
    return 'Chiranjib Patra';
  }
}
