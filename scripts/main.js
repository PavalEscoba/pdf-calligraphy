$(function () {
  const letterBtnElements = $('.letter-btn');
  const letterImgElements = $('.letter-img');
  const downloadBtnElement = $('#download');
  const writingStyleSelectElement = $('#writting');
  const sheet = document.getElementById('sheet');
  let writingStyleValue = 'found';
  let letterValue = 'a';

  const downloadHandler = () => {
    const fileName = `${writingStyleValue}-letter-${letterValue}`
    html2pdf().from(sheet).save(fileName);
  };

  const selectWritingStyleHandler = function (e) {
    writingStyleValue = this.value;
    $('.guideline').attr('class', `guideline guideline--${writingStyleValue}`)
  };

  const letterBtnClickHandler = function (e) {
    letterValue = $(this).data('letter');
    letterImgElements.removeClass('shown');
    const dataValue = `${writingStyleValue}-${letterValue}`;
    $(`[data-letter="${dataValue}"]`).addClass('shown');

  };

  downloadBtnElement.on('click', downloadHandler);
  letterBtnElements.on('click', letterBtnClickHandler);
  writingStyleSelectElement.on('change', selectWritingStyleHandler);

})