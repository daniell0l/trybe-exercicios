function descriptionText() {
  const centerContent = document.getElementsByTagName('p')[1];
  centerContent.textContent = 'Daqui 2 anos quero me torna desenvolverdor pleno a senior';
}

descriptionText();

function changeColorYellow() {
  const changeColor = document.getElementsByClassName('main-content')[0];
  changeColor.style.backgroundColor = 'rgb(76, 164, 109)';
}

changeColorYellow();

function changeColorRed() {
  const changeColor = document.getElementsByClassName('center-content')[0];
  changeColor.style.backgroundColor = 'white';
}

changeColorRed();

function changeTitle() {
  const titleH1 = document.getElementsByTagName('h1')[0];
  titleH1.innerText = 'Desafio - JavaScript';
}

changeTitle();

function changeText() {
  const changefristText = document.getElementsByTagName('p')[0];
  changefristText.textContent = changefristText.textContent.toUpperCase();
}

changeText();

function displayTags() {
  const centerContent = document.querySelector('.center-content');
  const paragraphs = centerContent.querySelectorAll('p');

  let content = '';
  paragraphs.forEach((paragraph, index) => {
    content += paragraph.textContent;
    if (index !== paragraphs.length - 1) {
      content += ' ';
    }
  });

  const footer = document.querySelector('footer p');
  footer.textContent = content;
}

displayTags();
