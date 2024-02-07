base_interval = 2500;
long_interval = 2700000;
active_interval = base_interval;

setInterval(function() {
	elements = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m");
	length = elements.length;
	
	for(var i = 0; i < length; ++i)
		if(elements[i].ariaLabel === 'Yes') {
			elements[i].click();
			console.log(Date.now(), "Clicked 'Yes' on", document.title);
			
			active_interval = long_interval;
		}
}, active_interval);

console.log("sapporo to new innocence");