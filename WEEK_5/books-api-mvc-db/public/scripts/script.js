async function fetchBooks() {
    const response = await fetch("/books"); // Replace with your API endpoint
    const data = await response.json();
  
    const bookList = document.getElementById("book-list");
  
    data.forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book"); // Add a CSS class for styling
  
      // Create elements for title, author, etc. and populate with book data
      const titleElement = document.createElement("h2");
      titleElement.textContent = book.title;
  
      const authorElement = document.createElement("p");
      authorElement.textContent = `By: ${book.author}`;
  
      // ... add more elements for other book data (optional)
  
      bookItem.appendChild(titleElement);
      bookItem.appendChild(authorElement);
      // ... append other elements
  
      bookList.appendChild(bookItem);
    });
  }
  
  // async function createBook(event) {
  //   event.preventDefault();
    
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData.entries());
  
  //   const response = await fetch("/books", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   });
  
  //   if (response.ok) {
  //     fetchBooks();
  //     event.target.reset(); // Clear the form
  //   } else {
  //     console.error("Failed to create book");
  //   }
  // }
  
  // async function updateBook(event) {
  //   event.preventDefault();
  
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData.entries());
  //   const bookId = data.id;
  //   delete data.id;
  
  //   const response = await fetch(`/books/${bookId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   });
  
  //   if (response.ok) {
  //     fetchBooks();
  //     event.target.reset(); // Clear the form
  //     document.getElementById("update-book").style.display = "none"; // Hide update form
  //   } else {
  //     console.error("Failed to update book");
  //   }
  // }
  
  // async function deleteBook(id) {
  //   const response = await fetch(`/books/${id}`, {
  //     method: "DELETE"
  //   });
  
  //   if (response.ok) {
  //     fetchBooks();
  //   } else {
  //     console.error("Failed to delete book");
  //   }
  // }
  
  // function populateUpdateForm(book) {
  //   document.getElementById("update-id").value = book.id;
  //   document.getElementById("update-title").value = book.title;
  //   document.getElementById("update-author").value = book.author;
  //   document.getElementById("update-book").style.display = "block"; // Show update form
  // }
  
  // document.getElementById("create-book-form").addEventListener("submit", createBook);
  // document.getElementById("update-book-form").addEventListener("submit", updateBook);
  


  fetchBooks(); // Call the function to fetch and display book data