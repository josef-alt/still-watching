# still-watching
When I am on my PC I usually just stream music for simplicity, but I find it the constant "Are you still watching?" prompts disrupt my concentration. This is an attempt at abating these prompts.
# Issues
After perusing the HTML, it would appear that the pop-up containing the button does not exist until the first time the user is prompted. As such, I resorted to running a short interval to look for the button before clicking it. 
### Button Differentiation
It then turned out that I could not differentiate between the button when it pops up and the button once it has been clicked and has disappeared. In attempting to determine whether the button was visible or not, I experimented with ``hidden``, ``display: none``, and even the dreaded ``getComputedStyle``, but to no avail. None of these approaches worked to determine when to press the button (after the first time).
### Timing
Unable to determine whether the button was a fresh prompt or a stale, already clicked popup that was hiding, I decided to just use an interval. Allegedly the prompt appears every hour, so once the button has been found and pressed (following the short interval loop) I then just continued the loop with a period of approximately 45 minutes. I chose 45 minutes semi-arbitrarily because the button still exists in the page, so if I click it before the (supposed) hour is up it should prevent any subsequent interruption.
# Testing
I have not tested this, so you should probably avoid using it.
# Artwork
I drew the icons myself; however, unfortunately, I am unavailable for hire as a graphic designer.
