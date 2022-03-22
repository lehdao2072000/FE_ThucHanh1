const url = 'https://jsonplaceholder.typicode.com/posts';


//lấy thông tin của các bài đăng
axios.get(url)
    .then(response => {
        document.getElementById("container-posts").innerHTML = '';
        let dataPost = response.data;
        let content = '';
        response.data.forEach(element => {
            content += `
                <div class="post" id="post_${element.id}">
                <h3>${element.userId}</h3>
                <h4>${element.title}</h4>
                <p>${element.body}</p>
                <button onclick="updateFormPost(${element.id})">Update</button>
                <button onclick="deleteFormPost(${element.id})">Delete</button>
                </div>   
                `
        });
        document.getElementById("container-posts").innerHTML = content;
    })
    .catch(error => alert(error));

// tạo mới 1 bài đăng
function createPost() {
    let userId = document.querySelector("input[name=userId]").value;
    let title = document.querySelector("input[name=title]").value;
    let body = document.querySelector("input[name=body]").value;

    let formPosts = {
        userId: userId,
        title: title,
        body: body
    };
    axios.post(url, formPosts)
        .then(response => {
            document.getElementById("container-posts").innerHTML = '';
            let dataPost = response.data;
            let content = '';
            content += `
                    <div class="post" id="post_${dataPost.id}">
                    <h3>${dataPost.userId}</h3>
                    <h4>${dataPost.title}</h4>
                    <p>${dataPost.body}</p>
                    <button onclick="updateFormPost(${dataPost.id})">Update</button>
                    <button onclick="deleteFormPost(${dataPost.id})">Delete</button>
                    </div>   
                    `
            document.getElementById("container-posts").innerHTML = content;
        })
        .catch(
            error => {
                alert(error);
            }
        )
}
//xoá 
function deleteFormPost(id) {
    const delUrl = url + "/" + id;
    axios.delete(delUrl)
        .then(response => console.log(response.data))
        .then(() => {
            const indexPost = document.querySelector("#post_" + id);
            indexPost.remove();
        })

}
//sửa
function updateFormPost(id) {
    const updateUrl = url + "/" + id;
    axios.post(updateUrl)
        .then(response => console.log(response.data))
        .catch(error => alert(error))
}