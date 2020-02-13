function isCanvasSupported() {
	var elem = document.createElement('canvas');
	return ! !(elem.getContext && elem.getContext('2d'));
}

function checkForCanvasSupport() {
	if (!isCanvasSupported()) {
		$('div#container').hide();

		var canvasNotice$ = jQuery('<div id="canvas_notice">Please update your browser to view this experiment.</div>');
		canvasNotice$.insertAfter($('div#header_wrapper'));

		return false;
	} else {
		return true;
	}
}
function getWidth() {
	return Math.max(
		document.documentElement.scrollWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

function getHeight() {
	return Math.max(
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
}


function resizeCanvas(width, height) {
	console.log(window.innerWidth, window.innerHeight)
	var canvas$ = $('canvas');
	canvas$.attr('width', window.innerWidth);
	canvas$.attr('height', window.innerHeight);
};
