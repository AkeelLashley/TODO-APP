let allTodos = [];
let isLoading = false;

function filterByUserId() {
  // Get the search term and filter the todos based on the title
  const searchTerm = document.getElementById("searchField").value;
  Number(searchTerm)
  const filteredTodos = allTodos.filter(
    (todo) => todo.userId === Number(searchTerm)
  );
  renderTodos(filteredTodos);
}

// function fetchTodos() {
//   // The endpoint for fetching sample data (in this case, a list of todos)
//   const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";

//   fetch(apiEndpoint)
//     .then((response) => {
//       // Check if the fetch was successful
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Process and display the fetched data
//       console.log(data);
// allTodos = data
//       renderTodos(allTodos);
//     })
//     .catch((error) => {
//       console.error(
//         "There was a problem with the fetch operation:",
//         error.message
//       );
//     });
// }

async function fetchTodos() {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    allTodos = await response.json();
    console.log(allTodos);
    renderTodos(allTodos);
    isLoading = true;
    console.log("FETCHING DATA...");
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  } finally {
    isLoading = false;
    renderTodos(allTodos);
    console.log("END OF FETCHING DATA...");
  }
}

function renderTodos(todos) {
  const dataContainer = document.getElementById("todoDataDisplay");

  // if (isLoading) {
  //   dataContainer.innerHTML = "<p>Loading data...</p>";
  //   return;
  // }

  // if (!todos.length) {
  //   dataContainer.innerHTML = "<p>No todos found or no data available.</p>";
  //   return;
  // }

  // for(let i=0; i < allTodos.length; i++ ) {
  //   dataContainer.innerHTML += `<h2> ${allTodos[i].title} </h2>`
  // }

  // allTodos.map((todo) => {
  //   let status = "Unknown"

  //   status = todo.completed ? "✅ Completed" : "❌ Not Completed";
  //   let errorMsg = !todo.completed && "GET TO WORK!!!"

  //   // if (todo.completed) {
  //   //   status = "To Do Completed"
  //   // } else {
  //   //   status = "Not Completed"
  //   // }

  //   dataContainer.innerHTML += `<h2> ${todo.title} - ${status} - ${errorMsg} </h2>`;
  // })

  // Map through the todos to display them
  const todoCards = isLoading
    ? "<p>Loading data...</p>"
    : !todos.length
    ? "<p>No users found or no data available.</p>"
    : todos
        .map((todo) => {
          const status = todo.completed ? "✅ Completed" : "❌ Not Completed";
          return `
            <div class="todo-card">
                <p>User ID: ${todo.userId} </p>
                <h2>${todo.title}</h2>
                <p>Status: ${status}</p>
            </div>
    `;
        })
        .join("");

  dataContainer.innerHTML = todoCards;
}

// const Greetings = () => {
//   return `
//         <div class="todo-card">
//             <p>User ID: ${todo.userId} </p>
//             <h2>${todo.title}</h2>
//             <p>Status: ${status}</p>
//         </div>
//     `;
// };

// // Global variables
// let allTodos = [];
// let isLoading = false; // to track the loading state

// async function loadTodoData() {
//   const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos';
//   const dataContainer = document.getElementById('todoDataDisplay');

//   // Set loading to true and render the state
//   isLoading = true;
//   renderTodos([]);

//   try {
//     const response = await fetch(apiEndpoint);

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     allTodos = await response.json();
//     renderTodos(allTodos);
//   } catch (error) {
//     console.error(
//       'There was a problem with the fetch operation:',
//       error.message
//     );
//     dataContainer.innerHTML =
//       '<p>Error fetching data. Please try again later.</p>';
//   } finally {
//     isLoading = false;
//     renderTodos(allTodos);
//   }
// }

// function filterTodos() {
//   // Get the search term and filter the todos based on the title
//   const searchTerm = document.getElementById('searchField').value.toLowerCase();
//   const filteredTodos = allTodos.filter((todo) =>
//     todo.title.toLowerCase().includes(searchTerm)
//   );
//   renderTodos(filteredTodos);
// }
