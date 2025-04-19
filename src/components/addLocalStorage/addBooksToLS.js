const findBookToLS = () => {
  let booksStr = localStorage.getItem("bookId");
  if (booksStr) {
    const storedBookData = JSON.parse(booksStr);
    return storedBookData;
  }
  {
    return [];
  }
};

const setBookToLS = (id) => {
  const booksData = findBookToLS();
  if (booksData.includes(id)) {
    alert("sorry eita ekbar add kora ache ");
  } else {
    booksData.push(id);
    const bookStr = JSON.stringify(booksData);
    localStorage.setItem("bookId", bookStr);
  }
};

export { setBookToLS, findBookToLS };
