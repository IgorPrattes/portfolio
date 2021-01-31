let reqGit = new XMLHttpRequest()

reqGit.open("GET", `https://api.github.com/users/IgorPrattes/repos`, false)

reqGit.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const repositories = JSON.parse(this.responseText)
        for (let i = 0; i < repositories.length; i++) {
            document.getElementById("table").innerHTML += "<div class='container'><tr><td> Name: " + repositories[i].full_name + "</td> <td> Language: " +
                repositories[i].language + "</td><td>" + repositories[i].html_url + "<td><a target='_blank' href='./perfilfil.html' onclick = 'funcao(" + JSON.stringify(repositories[i]) + ")'><img src='https://cdn.pixabay.com/photo/2014/09/25/19/36/question-mark-460864_960_720.png' width = 40px height = 40px </a></td><br>" + "<td><img src='./Assets/" + repositories[i].language + ".PNG' width ='60px' height='60px'></img></td></tr></div>"
        }
    }
}
reqGit.send()

function funcao(repositories) {
    localStorage["repositories"] = JSON.stringify(repositories)
    console.log(repositories)
}