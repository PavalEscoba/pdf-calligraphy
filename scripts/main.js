$(function () {
  const letterBtnElements = $('.letter-btn');
  const letterImgElements = $('.letter-img');
  const downloadBtnElement = $('#download');
  const writingStyleSelectElement = $('#writting');
  const sheet = document.getElementById('sheet');
  let writingStyleValue = 'found';
  let letterValue = 'a';

  const chooseLetterBtns = $('.letters .btn');


  const foundLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const frakturLetters = ['a', 'h', 'i', 'o', 'p'];

  const displayActiveBtns = (writtingStyle) => {
    if (writtingStyle === 'found') {
      chooseLetterBtns.each((idx, item) => {
        const letterData = $(item).data('letter');
        if (foundLetters.includes(letterData)) {
          item.disabled = false;
        } else {
          item.disabled = true;
        }
      });
    };

    if (writtingStyle === 'fraktur') {
      chooseLetterBtns.each((idx, item) => {
        const letterData = $(item).data('letter');
        if (frakturLetters.includes(letterData)) {
          item.disabled = false;
        } else {
          item.disabled = true;
        }
      });
    };
  };

  displayActiveBtns('found');


  const downloadHandler = () => {
    const fileName = `${writingStyleValue}-letter-${letterValue}`
    html2pdf().from(sheet).save(fileName);
  };

  const selectWritingStyleHandler = function (e) {
    writingStyleValue = this.value;
    displayActiveBtns(writingStyleValue);
    $('.guideline').attr('class', `guideline guideline--${writingStyleValue}`)
  };

  const letterBtnClickHandler = function (e) {
    letterValue = $(this).data('letter');
    letterImgElements.removeClass('shown');
    const dataValue = `${writingStyleValue}-${letterValue}`;
    console.log(dataValue);
    $(`[data-letter="${dataValue}"]`).addClass('shown');

  };

  downloadBtnElement.on('click', downloadHandler);
  letterBtnElements.on('click', letterBtnClickHandler);
  writingStyleSelectElement.on('change', selectWritingStyleHandler);

})