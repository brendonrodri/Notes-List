import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { NOTES } from '../../notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  router = inject(Router);

  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('')
  });

  addNote(){

    //instancia o valor do input title
    let inputTitle = this.addNoteForm.value.title ?? '';
    //isntancia o valor do input text
    let inputText = this.addNoteForm.value.text ?? '';

    //verifica se o formulário é válido antes de criar um novo item
    if(this.addNoteForm.valid){
      //itera as ids da lista original
      let ids = NOTES.map(e => e.id);
      //id que será adicionado ao novo item
      let maxId = 0;
      if(ids.length > 0){
        maxId = Math.max(...ids);
      }
      //novo item da lista
      let newNote = {
        id: maxId + 1,
        title: inputTitle,
        text: inputText,
      };
      //adiciona o novo item no início da array
      NOTES.unshift(newNote);
      //reseta o formulário
      this.addNoteForm.reset();

      //navega de volta para a home após adicionar uma nota
      this.router.navigateByUrl('/')
    };
  }
}
