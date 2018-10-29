		$( document ).ready(function() {
    		console.log( "ready!" );

    		/*Styling the button - part 1 - start*/

		 	var defaulttext = $('.default-text').text();
			$('.selectDefault').text(defaulttext);

			/*Styling the button - part 1 - end*/

			$('select').on('change', function() {

				/*Styling the button - part 2 - start*/

				var defaulttext2 = $('.selectBox').find(":selected").text(); 
			    $('.selectDefault').text(defaulttext2);

			    /*Styling the button - part 2 - end*/



				/*console.log(this.value);*/

				$( "header" ).removeClass( "beforeSelecting" ).addClass( "afterSelecting" );

				$(".loading").append("<img src='assets/images/ajax-loader.gif'>");

				$(".articles").remove();

				/*Get the json files from here: https://developer.nytimes.com/top_stories_v2.json#/Console/GET/%7Bsection%7D.%7Bformat%7D*/

				var urlArray = ["https://api.nytimes.com/svc/topstories/v2/home.json", "https://api.nytimes.com/svc/topstories/v2/opinion.json", "https://api.nytimes.com/svc/topstories/v2/world.json", "https://api.nytimes.com/svc/topstories/v2/national.json", "https://api.nytimes.com/svc/topstories/v2/politics.json", "https://api.nytimes.com/svc/topstories/v2/upshot.json", "https://api.nytimes.com/svc/topstories/v2/nyregion.json", "https://api.nytimes.com/svc/topstories/v2/business.json", "https://api.nytimes.com/svc/topstories/v2/technology.json", "https://api.nytimes.com/svc/topstories/v2/science.json", "https://api.nytimes.com/svc/topstories/v2/health.json", "https://api.nytimes.com/svc/topstories/v2/sports.json", "https://api.nytimes.com/svc/topstories/v2/arts.json", "https://api.nytimes.com/svc/topstories/v2/books.json", "https://api.nytimes.com/svc/topstories/v2/movies.json", "https://api.nytimes.com/svc/topstories/v2/theater.json", "https://api.nytimes.com/svc/topstories/v2/sundayreview.json", "https://api.nytimes.com/svc/topstories/v2/fashion.json", "https://api.nytimes.com/svc/topstories/v2/tmagazine.json", "https://api.nytimes.com/svc/topstories/v2/food.json", "https://api.nytimes.com/svc/topstories/v2/travel.json", "https://api.nytimes.com/svc/topstories/v2/magazine.json", "https://api.nytimes.com/svc/topstories/v2/realestate.json", "https://api.nytimes.com/svc/topstories/v2/automobiles.json", "https://api.nytimes.com/svc/topstories/v2/obituaries.json", "https://api.nytimes.com/svc/topstories/v2/insider.json"];

			 	

			 	var url = urlArray[this.value];

			 	/*alert(url);*/

			 	url += '?' + $.param({
	  				'api-key': "06fdcea1918b4df0a6b42c700e85da6b"
					});


				$.ajax({
		 			method: "GET",
		 			url: url,
		 		})
		 		.done(function(data) {				
		 				
		 			var maxArticle = 11;

					for (i=0; i<= maxArticle; i++) {
						console.log(data.results[i].section);

						var mediaArray = data.results[i].multimedia;

						if (mediaArray.length > 0) {

							$("main").append("<div class='articles'><a href='" + data.results[i].url + "'><img src='" + mediaArray[mediaArray.length-1].url + "'><p class='abstract'>" + data.results[i].abstract + "</p></a></div>");
						}
						else {
							maxArticle += 1;
						}		
					}	
					
			 	})
			 	.fail(function() {
			 		$(".repo-list").append("Sorry, there was a problem, please try again.")
			 	})
				.always(function() {
		 			$(".loading").remove()
		 		});
		 	});


		
		}); 
		
