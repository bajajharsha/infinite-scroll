// Array of background colors for posts
let bgColors = ['red', 'green', 'yellow', 'pink', 'brown', 'grey', 'blue', 'orange', 'violet', 'indigo'];

// Counter for unique post IDs
let itemNum = 0;

// Flag to track if posts are currently being loaded
let isLoading = false;

// Initial loading of posts
loadPosts();

// Function to create and append 10 posts to the scroll container
function loadPosts() {
    for (let i = 0; i < 10; i++) {
        let post = $("<div></div>")
        post.attr("id", itemNum)
        post.addClass("post")
        post.text(itemNum)
        post.css("background-color", bgColors[i])
        $("#scroll-pan").append(post)
        itemNum++;
    }
}

// Initiates the loading process if not already loading
function getPosts() {
    if (!isLoading) {
        isLoading = true;   // Set the flag to indicate that loading is in progress
        $("#loading-symbol").css("display", "block");
        setTimeout(() => {
            loadPosts();
            isLoading = false;
            $("#loading-symbol").css("display", "none"); // Hide the loading symbol directly
        }, 1000);
    }
}

// Event listener for scrolling
$(document).scroll(function () {
    let sh = $(document).height(); // Scroll Height - Total scrollable height
    let ch = $(window).height();    // Client height - Viewport height
    let st = $(window).scrollTop(); // scroll top - Scroll position from the top

    // Check if user has scrolled near the bottom and posts are not currently loading
    // 300px for buffer
    if (sh <= ch + st + 300 && !isLoading) {
        $("#loading-symbol").css("display", "block");
        getPosts();
    }
});



// for go to top btn
let btn = $("#myBtn");
$(window).scroll(() => {
    if ($(document).scrollTop() > 50) {
        $(btn).css("display", "block")
    } else {
        $(btn).css("display", "none")

    }
});

// when btn is clicked
function topScroll() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
}