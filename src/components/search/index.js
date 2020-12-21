const mainInput = document.getElementById('search-input');
console.dir(mainInput);
// console.log('hello');

mainInput.addEventListener('input', e => {
  console.log(e.target.value);
});

// function onSearch(e) {
//   // const query = e.value;
//   //   preventDefault();

//   console.dir(e.target);
//   // console.log(query);
// }
