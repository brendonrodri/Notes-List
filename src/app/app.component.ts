import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { InputFormComponent } from "./input-form/input-form.component";
import { AddNoteComponent } from "./add-note/add-note.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, NotesListComponent, FormsModule, InputFormComponent, AddNoteComponent]
})
export class AppComponent {
  title = "ToDo"
}
