const url = 'https://jsonplaceholder.typicode.com/posts';

//kiểm tra thông tin đầu vào 
function checkValidate() {
    let userId = document.querySelector("input[name=userId]");
    let title = document.querySelector("input[name=title]");
    let body = document.querySelector("input[name=body]");

    if (!userId.value || !title.value || !body.value) {

        alert("vui lòng không để trống thông tin")
    }
}

//lấy thông tin của các bài đăng
axios.get(url)
    .then(response => {
        document.getElementById("container-posts").innerHTML = '';
        var dataPost = response.data;
        let content = '';
        dataPost.forEach(element => {
            content += `
                <div class="post" id="post_${element.id}">
                <h3>${element.userId}</h3>
                <h4>${element.title}</h4>
                <p>${element.body}</p>
                <button class ="btn btn-update" onclick="updateFormPost(${element.id})">Update</button>
                <button class ="btn btn-delete" onclick="deleteFormPost(${element.id})">Delete</button>
                </div>   
                `
        });
        document.getElementById("container-posts").innerHTML = content;
    })
    .catch(error => alert(error));

// tạo mới 1 bài đăng
function createPost() {
    checkValidate();

    let formPosts = {
        userId: userId.value,
        title: title.value,
        body: body.value
    };
    axios.post(url, formPosts)
        .then(response => {
            console.log(response);
            document.getElementById("container-posts").innerHTML = '';
            let dataPost = response.data;
            let content = '';
            content += `
                    <div class="post" id="post_${dataPost.id}">
                    <h3>${dataPost.userId}</h3>
                    <h4>${dataPost.title}</h4>
                    <p>${dataPost.body}</p>
                    <button class ="btn btn-update" onclick="updateFormPost(${dataPost.id})">Update</button>
                    <button class ="btn btn-delete" onclick="deleteFormPost(${dataPost.id})">Delete</button>
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
        .then(() => {
            const indexPost = document.querySelector("#post_" + id);
            indexPost.parentNode.removeChild(indexPost);
        })
        .catch(error => alert(error))

}
//sửa
function updateFormPost(id) {
    const updateUrl = url + "/" + id;
    checkValidate();
    axios.get(updateUrl)
        .then(response => {
            userId.value = response.data.userId;
            title.value = response.data.title;
            body.value = response.data.body;

        })
        .then(() => createPost())
        .catch(error => alert(error))
}