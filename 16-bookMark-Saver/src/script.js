const addBookmarkBtn = document.getElementById("add-btn");
const bookmarkList = document.getElementById("lits-of-bookmark");
const bookmarkName = document.getElementById("bookname");
const bookmarkURL = document.getElementById("bookURL");


document.addEventListener("DOMContentLoaded" , loadBookmark)

addBookmarkBtn.addEventListener("clicl", function (){
    const name = bookmarkName.ariaValueMax.trim()
    const url= bookmarkURL.ariaValueMax.trim()

    if(!name||!url){
        alert("enter both name and url")
        return
    }else {
        if(!url.startsWith("http://") && !url.startsWith("https://")){
            alert("Please enter a valid URL starting with https://")
            return
        }

        addBookmark(name , url)
        saveBookmark(name,url)
        bookmarkName.value = ""
        bookmarkURL.value = ""
        
    }
})



function addBookmark(name , url){
    const li = document.createElement("li")
    const link = document.createElement("a")
    link.href = url
    link.textContent = name
    link.target = "_blank"
    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.addEventListener("click" , function (){
    bookmarkList.removeChild(li)
    removeBookmarkFromStorage(name,url)
    })

    li.appendChild(link)
    li.appendChild(removeButton)

    bookmarkList.appendChild(li)

}

function getBookmarkFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks")
    return bookmarks ? JSON.parse(bookmarks) : []
}


function saveBookmark(name , url){
    const bookmarks = getBookmarkFromStorage()
    bookmarks.push(name,url)
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarks))
}

function loadBookmark(){

}