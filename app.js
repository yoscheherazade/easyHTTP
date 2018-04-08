const http = new easyHTTP();

//Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// POST
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
//URL should be /:id you want to update
//Expected output - Post with ID 1 (instead of 101)should contain data in object above now
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
