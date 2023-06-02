// We are distinguishing selectable cells as 'isStandardCell' (not 'given-number')
// The <td> classList,'selected' has an onClick listener for 1 cell at a time
document.querySelectorAll('td').forEach(cell => {
    const isStandardCell = !cell.classList.contains('given-number');
    if (isStandardCell) {
      cell.addEventListener('click', onClickStandardCell);
    }
  });
  
  document
    .querySelectorAll('.number-control')
    .forEach(numberControl => {
      numberControl.addEventListener('click', onClickNumberControl);
    });
  
  function onClickStandardCell(){
    document.querySelector('.selected')?.classList?.remove('selected');
    this.classList.add('selected');
  }
  
  function onClickNumberControl(){
    const selectedCell = document.querySelector('.selected');
    if (selectedCell == null){
      return;
    }
    const clickedNumber = this.textContent;
    const isCandidateMove = document.getElementbyId('candidate-switch').checked;
    if(isCandidateMove) {
      const candidatesNode = selectedCell.queryselector('.candidates');
      //split every number and add them to candidates array 
      const candidates = candidatesNode.textContent.split('');
      const numberIndex =  candidates.indexOf(clickedNumber);
  
      if (numberIndex === -1){
        candidates.push(clickedNumber);
      } else {
        //From the numberIndex remove 1 number  
        candidates.splice(numberIndex, 1);
      }
      
        candidatesNode.textContent = candidates.sort().join('');
      } else {
        selectedCell.querySelector('.value').textContent = clickedNumber;
      }
  }
  