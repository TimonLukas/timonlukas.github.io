(function(a){a.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:a.languages.javascript}},a.hooks.add("before-tokenize",function(e){var n=/<%(?!%)[\s\S]+?%>/g;a.languages["markup-templating"].buildPlaceholders(e,"ejs",n)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"ejs")}),a.languages.eta=a.languages.ejs})(Prism);