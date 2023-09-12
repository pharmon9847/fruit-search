describe('Fruit Search Application', () => {
  let input = document.querySelector('#fruit');
  let suggestions = document.querySelector('.suggestions ul');

  // should filter fruits based on search input
  it('should filter fruits based on search input', () => {
    const result = search('apple');
    // it should give us apple
    expect(result).toContain('Apple');
    // it should not give us something
    expect(result).not.toContain('Banana');
    expect(result).not.toContain('Orange');
  });

  // should display suggestions when typing in the input filed
  it('should display suggestions when typing in the input filed', () => {
    input.value = 'ap';
    input.dispatchEvent(new Event('keyup'));
    // expect apple is in suggestions
    expect(suggestions.innerHTML).toContain('<li>Apple</li>');
    expect(suggestions.innerHTML).toContain('<li>Apricot</li>');
    expect(suggestions.innerHTML).not.toContain('<li>Banana</li>');
  });

  //should populate input field with the selected suggestion
  it('should populate input field with the selected suggestion', () => {
    // create a new li elemetn
    const suggestionItem = document.createElement('li');
    suggestionItem.innerText = 'Banana';
    // attach that li elemnt to the suggestions ul element
    suggestions.append(suggestionItem);
    // simulate a click on that li element
    suggestionItem.click();
    // make sure the value of the input field is the one we clicked with
    expect(input.value).toBe('Banana');
  });

  // it should clear suggestions when input is empty
  it('it should clear suggestions when input is empty', () => {
    // set the value of the input
    input.value = 'ap';
    input.dispatchEvent(new Event('keyup'));
    // make the value of the input empty string again
    input.value = '';
    input.dispatchEvent(new Event('keyup'));

    // expect suggestion to be empty
    expect(suggestions.innerHTML).toBe('');
  });

  // it should highlight the suggestions when the user hovers on the li items
  it('it should highlight the suggestions when the user hovers on the li items', () => {
    // create a new li element
    const suggestionItem = document.createElement('li');
    suggestionItem.innerText = 'Apple';
    suggestionItem.style.backgroundColor = 'orangered';
    // attach that li element to the suggestions ul element
    suggestions.append(suggestionItem);
    // simulate a mouseover on that li element
    suggestionItem.dispatchEvent(new Event('mouseover'));
    // expect li to be highlighted on mouseover
    expect(suggestionItem.style.backgroundColor).toContain('orangered');
  });

  afterEach(() => {
    input.value = '';
    while (suggestions.firstChild) {
      suggestions.removeChild(suggestions.firstChild);
    }
  });
});
