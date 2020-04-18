var btn = document.getElementById("btnPost").addEventListener("click", getPost)

function getPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = ``;
            data.forEach((post) => {
                const { userId, id, title, body} = post
                result +=
                    `
                         <tr>
                             <td>${userId}</td>
                             <td>${id} </td>
                             <td>${title}</td>
                             <td>${body}</td>
                         </tr>
                      `;
                document.getElementById('result').innerHTML = result;
            });
        })
}

