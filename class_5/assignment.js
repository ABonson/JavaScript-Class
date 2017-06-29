<!DOCTYPE html>
<html lang="en-US">
<head>
 <meta charset="UTF-8">
 <title>A sample page</title>
 <script src="helper.js"></script>
</head>
<body>
 <div id="main">

 </div>
 <script>
 function Movie(title) {
    this.title = title;
	this.ratings = [];
	this.avgRating = 0; 
	this.addRating = function (star) {
		this.ratings.push(star);
		let sum = 0; 
		for (let i=0; i < this.ratings.length; i++) {
			sum += this.ratings[i];
		}
			
		this.avgRating = (sum /this.ratings.length);
	}
 }
 
// Assuming object is already defined above, one should be able to do the following:
let movie = new Movie("The Lego Movie"); // Create the object 
console.log(movie.title); // Output the movie title;
console.log(movie.avgRating); // Output the current average rating. Should be 0.
movie.addRating(10); // This movie is awesome, let's give it 10 stars.
console.log(movie.avgRating); // Output the current average rating.
movie.addRating(6); // Not everybody liked it :(
console.log(movie.avgRating); // Should be 8.
console.log(movie.ratings); // Should output Array [10, 6]

</script>
</body>
</html>