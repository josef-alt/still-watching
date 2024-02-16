// look for button every 2.5 seconds until we find it to
// minimize delay the first time it appears.
const base_interval = 2500;

// once the button appears and has been pressed we should
// be able to press the button while invisible, allowing
// us to press it less often while never being interrupted.
const long_interval = 1800000;

function stay_active() {
	elements = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m");
	
	for(const element of elements) {
		if(element.ariaLabel === 'Yes') {
			element.click();
			console.log(Date.now(), "Clicked 'Yes' on", document.title);
			
			// once the button appears we can increase the period
			if(active_interval === base_interval) {
				clearInterval(handle);
				active_interval = long_interval;
				
				console.log('interval is', active_interval);
				handle = setInterval(stay_active, active_interval);
			}
		}
	}
}

let active_interval = base_interval;
let handle = setInterval(stay_active, active_interval);
console.log('interval is', active_interval);

console.log("sapporo to new innocence");