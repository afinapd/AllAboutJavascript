var btn = document.getElementById("btnComment").addEventListener("click", getComment);

function getComment() {
  fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = ``;
            data.forEach((comment) => {
                const { postId, id, name, email, body} = comment
                result +=
                    `
                         <tr>
                             <td>${postId}</td>
                             <td>${id} </td>
                             <td>${name}</td>
                             <td>${email}</td>
                             <td>${body}</td>
                         </tr>
                      `;
                document.getElementById('result').innerHTML = result;
            });
        })
}
