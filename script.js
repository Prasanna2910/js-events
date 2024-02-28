//Challenge1//

function Text() {
  document.getElementById('user').innerHTML = 'Pras';
}
window.addEventListener('load', Text);

//Challenge2//
function backgroundColor() {
  document.getElementById('btn-click').style.backgroundColor = 'yellow';
}
document.getElementById('btn-click').onclick = backgroundColor;

//Challenge3//
function makeSentence() {
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;
  const sum = a + ' ' + b + ' ' + c;
  const statement = (document.getElementById('statement').innerHTML = sum);
}
const btn = document.getElementById('build-button');
statement.addEventListener('click', makeSentence);

//Challenge4.1//
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
child.addEventListener('click', function () {
  console.log('Child clicked');
});
parent.addEventListener('click', function () {
  console.log('Parent clicked');
});
grandparent.addEventListener('click', function () {
  console.log('Grandparent clicked');
});

//Challenge4.2//
child.addEventListener(
  'click',
  function (onclick) {
    console.log('Child clicked');
  },
  true
);
parent.addEventListener(
  'click',
  function (onclick) {
    console.log('Parent clicked');
  },
  true
);
grandparent.addEventListener(
  'click',
  function (onclick) {
    console.log('Grandparent clicked');
  },
  true
);

//Challenge5//
var category = document.getElementById('category');

category.addEventListener('click', (e) => {
  console.log(e.target.id);
});
