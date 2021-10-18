window.addEventListener('load', () => {
  function genPDF() {
    var doc = new jsPDF('l');

    doc.lines([[2, 2], [-2, 2], [1, 1, 2, 2, 3, 3], [2, 1]], 212, 110, 10);
    doc.save('example.pdf');
  };

  const downloadBtn = document.querySelector('#download');
  downloadBtn.addEventListener('click', genPDF);
});