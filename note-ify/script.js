let notes = [];
let style;

function saveNote(){ //funciona
    const newNoteTitle = document.getElementById('notetitle');
    const newNoteDesc = document.getElementById('notedesc');

    if(newNoteTitle.value != '' && newNoteDesc.value != ''){
        const note = new Note(newNoteTitle.value, newNoteDesc.value);
        notes.push(note);
        
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.id = 'note';

        const noteTitle = document.createElement('div');
        noteTitle.className = 'noteTitle';
        noteTitle.id = 'noteTitle';
        const p = document.createElement('p');
        p.id = 'title';
        p.textContent = newNoteTitle.value;
        noteTitle.appendChild(p);

        const noteDesc = document.createElement('div');
        noteDesc.className = 'noteDesc';
        noteDesc.id = 'noteDesc';
        const p2 = document.createElement('p');
        p2.textContent = newNoteDesc.value;
        p2.id = 'desc';
        noteDesc.appendChild(p2);

        noteDiv.appendChild(noteTitle);
        noteDiv.appendChild(noteDesc);

        document.getElementById('notegallery').appendChild(noteDiv);
    }
    newNoteTitle.value = '';
    newNoteDesc.value = '';
}

class Note {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

function search(){ //ainda não funciona
    const searchTerm = document.getElementById('searchbar').value;
    notes.forEach(note => {
        if(note.title.contains(searchTerm) || note.description.contains(searchTerm)){

        }else{

        }
    });
}