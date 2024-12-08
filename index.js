const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        heart:"images/icon-heart.png",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        heart:"images/icon-heart.png",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        heart:"images/icon-heart.png",
        likes: 152
    }
]

const parent = document.getElementById("wrapper")
parent.classList.add("wrapper")

for (let i = 0; i < posts.length; i++) {
        // console.log (posts[i].name)
        const postOld = document.createElement("div")
        postOld.classList.add("post-it")
        console.log (postOld)

        postOld.innerHTML = ` 
        
              <main>
                <section class="post">
                    <header>
                        <img class="user-icon"  src="${posts[i].avatar}" alt="vangogh's profile picture">
                        <div>
                            <h1>${posts[i].name}h</h1>
                            <p>${posts[i].location}</p>
                        </div>
                    </header>
                    <picture>
                        <img class="post-img" src="${posts[i].post}" alt="">
                    </picture>
                </section>

            <footer>
                <div class="controls">
                    <img onclick="tap()" id="like-icon" src="${posts[i].heart}" alt="Like a post"><img src="/images/icon-comment.png" alt="comment on a post"><img src="/images/icon-dm.png" alt="">
                </div>
                <h1 id="like-count">${posts[i].likes} likes</h1>
                <h1>vincey1853 <span>${posts[i].comment} </span></h1>
            </footer>

            </main>
        
        
        `

        let likes = document.getElementById("like-icon")
        let likeText = document.getElementById("like-count")
        // let count = 0

 function tap(){
    posts[i].likes++
    likeText.innerHTML = posts[i].likes + " likes"
}
        parent.appendChild(postOld);

}







 