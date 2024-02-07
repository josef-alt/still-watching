// look for button every 2.5 seconds until we find it to
// minimize delay the first time it appears.
const base_interval = 2500;

// once the button appears and has been pressed we should
// be able to press the button while invisible, allowing
// us to press it less often while never being interrupted.
const long_interval = 2700000;
var handle;

// TODO break into two functions
// once it switches long interval it acts like a setTimeout in a loop
// ideally only set two intervals
function stay_active() {
	elements = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m");
	length = elements.length;
	
	for(var i = 0; i < length; ++i)
		if(elements[i].ariaLabel === 'Yes') {
			elements[i].click();
			console.log(Date.now(), "Clicked 'Yes' on", document.title);
			
			// once the button appears we can increase the period
			clearInterval(handle);
			console.log('interval is', long_interval);
			handle = setInterval(stay_active, long_interval);
		}
}

console.log('interval is', base_interval);
handle = setInterval(stay_active, base_interval);

console.log("sapporo to new innocence");