async function fetchData(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }


  async function renderUsers(users) {
    const userData = document.getElementById('userData');
    for (const user of users) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = user.name;
      const usernameCell = document.createElement('td');
      usernameCell.textContent = user.username;
      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;

      row.appendChild(nameCell);
      row.appendChild(usernameCell);
      row.appendChild(emailCell);

      userData.appendChild(row);
    }
  }
  async function renderPosts(posts) {
    const postData = document.getElementById('postData');
    const Posts = posts.slice(0, 10); 
    for(let post of Posts) {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      titleCell.textContent = post.title;
      const bodyCell = document.createElement('td');
      bodyCell.textContent = post.body;

      row.appendChild(titleCell);
      row.appendChild(bodyCell);

      postData.appendChild(row);
    };
  }

  async function renderTodos(todos) {
    const todoData = document.getElementById('todoData');
    const Todos = todos.slice(0, 10);
    for( let todo of Todos) {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      titleCell.textContent = todo.title;
      const completedCell = document.createElement('td');
      completedCell.textContent = todo.completed ? 'Yes' : 'No';

      row.appendChild(titleCell);
      row.appendChild(completedCell);

      todoData.appendChild(row);
    };
  }


  async function renderData() {
    const users = await fetchData('https://jsonplaceholder.typicode.com/users');
    renderUsers(users);
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    renderPosts(posts);
    const todos = await fetchData('https://jsonplaceholder.typicode.com/todos');
    renderTodos(todos);
  }

  renderData();