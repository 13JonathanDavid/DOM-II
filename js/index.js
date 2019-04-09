// Your code goes here

let sampleButton = document.querySelectorAll('.nav-link');
console.log(sampleButton);
sampleButton.forEach(function (e){ 
	e.addEventListener('click', (event) => {
		event.preventDefault();
  alert('You Clicked the link, now since this browser is using javascript we can just stopProgation() so that nothing ever happens. For AJAX!')
});
});
let resizeTimer =0;
	window.addEventListener('resize', (event) => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			let slg =100;
			let color =0;
			let r,g,b = 0;
			while(slg > 40 && slg < 150) {
				color = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
				r = parseInt(color.substring(0, 2), 16); // hexToR
				g = parseInt(color.substring(2, 4), 16); // hexToG
				b = parseInt(color.substring(4, 6), 16); // hexToB
				slg = (r*0.299 + g*0.587 + b*0.114);
			}
			document.body.style.backgroundColor = "#"+color;
			document.querySelector('.main-navigation').style.backgroundColor = "#"+('000000' + (('0xffffff' ^ ('0x'+color)).toString(16))).slice(-6);
			
			
			
			if ((r*0.299 + g*0.587 + b*0.114) > 186)
				document.body.style.color = "#000000"
			else
				document.body.style.color = "#ffffff";
		},500);
});