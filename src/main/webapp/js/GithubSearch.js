;
(function(){
	brite.registerView("GithubSearch",{emptyParent:true},{
		create:function(data,config){
			return app.render("tmpl-GithubSearch");
		},
		events:{
			"click;.search":function(event){
				var query = $(":input[name='repoName']").val();
				if(query.length==0){
					alert("please enter the query value");
					return false;
				}
				app.githubApi.searchRepositories({query:query,startPage:1}).pipe(function(repositories){
					repositories = repositories.result;
					brite.display("GithubRepositories",$("#searchResult"),{repositories:repositories,showCreate:"none"});
				});
			}
		}
	});
})();