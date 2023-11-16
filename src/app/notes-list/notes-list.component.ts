import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  notesList = NOTES;

  show(title: string){
    alert(title);
  }
}
