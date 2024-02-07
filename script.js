setInterval(function() {
	elements = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m");
	length = elements.length;
	
	for(var i = 0; i < length; ++i)
		if(elements[i].ariaLabel === 'Yes') {
			const style = window.getComputedStyle(elements[i]);
			if(!(style.display === 'none' || style.visibility === 'hidden'))
			{
				elements[i].click();
				console.log(Date.now(), "Clicked 'Yes' on", document.title);
			}
		}
	
}, 5000);

console.log("sapporo to new innocence");