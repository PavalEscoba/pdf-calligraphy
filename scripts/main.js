window.addEventListener('load', () => {
  // function genPDF() {
  //   var doc = new jsPDF('l');

  //   doc.lines([[2, 2], [-2, 2], [1, 1, 2, 2, 3, 3], [2, 1]], 212, 110, 10);
  //   doc.save('example.pdf');
  // };

  // const downloadBtn = document.querySelector('#download');
  // downloadBtn.addEventListener('click', genPDF);

  const section = document.querySelector('#section');
  const downloadBtn = document.querySelector('#download');
  var opt = {
    margin: 1,
    filename: 'myfile.pdf',
    image: { type: 'jpeg' },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  const downloadHandler = () => {
    html2pdf().from(section).save();
  }

  downloadBtn.addEventListener('click', downloadHandler);

});