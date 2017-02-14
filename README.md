# WhoIsWhere
##IoT Data Visualization using D3 and Pubnub - zone wise entity tracking based on streamed data

![whoiswhere](https://cloud.githubusercontent.com/assets/16579000/22926754/0172413c-f2d4-11e6-8b29-8110f0b38334.png)

### Description of Visual

	Each box is representing workstation - WS-1, WS-2, WS-3 ...
	Orange circles are worker named WK-1, WK-2, WK-3 ....
	Wearables could stream data to pubnub subscription via gateway.
	Pubnub listener gets notified on streamed data which would get 
	plotted using D3 to give a picture of workers moving around workstations at any point in time.
	
### SetUp

	In script.js in the code block below a pub-sub key set has to be given from the Pubnub subscription
	
	// pubnub registration
	var pubnub = new PubNub({
        publishKey : '<PUT_YOUR_PUB_KEY_HERE>',
        subscribeKey : '<PUT_YOUR_SUB_KEY_HERE>'
    });
	
	A set of dummy data would get published in 5 seconds interval to pubnub channel to simulate the visualization.

### Mobile version using React-Native is available here - [React-Native-WhoIsWhere](https://github.com/shasdas/React-Native-WhoIsWhere/tree/master)