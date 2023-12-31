import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { AddNoteComponent } from './app/add-note/add-note.component';

const routes: Routes = [
  {path: '', component: NotesListComponent},
  {path: 'new', component: AddNoteComponent},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
