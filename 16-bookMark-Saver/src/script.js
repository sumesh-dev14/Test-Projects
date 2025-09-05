const addBookmarkBtn = document.getElementById("add-btn");
const bookmarkList = document.getElementById("list-of-bookmark");
const bookmarkName = document.getElementById("bookname");
const bookmarkURL = document.getElementById("bookURL");

bookmarkURL.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addBookmarkBtn.click();
  }
});

document.addEventListener("DOMContentLoaded", loadBookmark);

addBookmarkBtn.addEventListener("click", function () {
  const name = bookmarkName.value.trim();
  const url = bookmarkURL.value.trim();

  if (!name || !url) {
    alert("enter both name and url");
    return;
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Please enter a valid URL starting with https://");
      return;
    }

    addBookmark(name, url);
    saveBookmark(name, url);
    bookmarkName.value = "";
    bookmarkURL.value = "";
  }
});

function addBookmark(name, url) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  link.target = "_blank";
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });

  li.appendChild(link);
  li.appendChild(removeButton);

  bookmarkList.appendChild(li);
}

function getBookmarkFromStorage() {
  const bookmarks = localStorage.getItem("bookmarks");
  return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmark(name, url) {
  const bookmarks = getBookmarkFromStorage();
  const exists = bookmarks.some((bookmark) => bookmark.url === url);

  if (!exists) {
    bookmarks.push({ name, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    alert("This bookmark already exists!");
  }
}

function loadBookmark() {
  const bookmarks = getBookmarkFromStorage();
  bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
}

function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarkFromStorage();
  bookmarks = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url
  );
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
