function saveNote(){ //funciona
    const newNoteTitle = document.getElementById('notetitle');
    const newNoteDesc = document.getElementById('notedesc');

    if(newNoteTitle.value != '' && newNoteDesc.value != ''){
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

function search() {
    const searchTerm = document.getElementById("searchbar").value.toLowerCase();
    const noteElements = document.querySelectorAll('#notegallery .note');
  
    noteElements.forEach((noteElement, index) => {
      const title = noteElement.querySelector('#title').textContent.toLowerCase();
      const desc = noteElement.querySelector('#desc').textContent.toLowerCase();

      if (title.includes(searchTerm) || desc.includes(searchTerm)) {
        noteElement.style.display = 'block';
      } else {
        noteElement.style.display = 'none';
      }
    });
  }