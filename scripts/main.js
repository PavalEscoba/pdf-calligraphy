window.addEventListener('load', () => {
  // function genPDF() {
  //   var doc = new jsPDF('l');

  //   doc.lines([[2, 2], [-2, 2], [1, 1, 2, 2, 3, 3], [2, 1]], 212, 110, 10);
  //   doc.save('example.pdf');
  // };

  // const downloadBtn = document.querySelector('#download');
  // downloadBtn.addEventListener('click', genPDF);

  const section = document.querySelector('#sheet');
  const downloadBtn = document.querySelector('#download');
  const styleSelect = document.querySelector('#writting');
  const nibSelect = document.querySelector('#nib');
  const opt = {
    margin: 1,
    filename: 'myfile.pdf',
    image: { type: 'jpeg' },
    jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
  };

  const downloadHandler = () => {
    html2pdf().from(section).save();
  };

  const canvasProps = {
    foundational: { base: 5, asceder: 3, descender: 3, interline: 1, nibAngle: 30, slope: 0 },
    fraktur: { base: 5.5, asceder: 2.5, descender: 2.5, interline: 1, nibAngle: 45, slope: 0 }
  }
  const PX_TO_MM_RATIO = 3.78;



  const drawGuidelines = (nibWidth, style) => {

  }

  const selectHandler = (e) => {
    console.log(nibSelect.value);
  }

  downloadBtn.addEventListener('click', downloadHandler);
  nibSelect.addEventListener('change', selectHandler);
  styleSelect.addEventListener('click', selectHandler);

});