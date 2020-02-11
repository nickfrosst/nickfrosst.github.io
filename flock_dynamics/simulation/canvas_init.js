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
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

function getHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
}

console.log('Width:  ' + getWidth());
console.log('Height: ' + getHeight());

function resizeCanvas(width, height) {
	console.log("YOLO")
	var canvas$ = $('canvas');

	if ('undefined' == typeof (height)) {
		height = getWidth();//$('.giphy-embed').width();
	}
	canvas$.attr('height', height);

	if ('undefined' == typeof (width)) {
		width = getWidth;//$('.giphy-embed').width();
	}
	canvas$.attr('width', width);

}
;
