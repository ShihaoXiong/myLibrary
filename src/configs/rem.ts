(function(win) {
	const doc = win.document;
	const docEl = doc.documentElement;
	let tid: number;

	function refreshRem() {
		const width = docEl.getBoundingClientRect().width,
			height = docEl.getBoundingClientRect().height;
		const rem = width > height && width > 1024 ? 10 : width / 10.24; // 将屏幕宽度分成7.5份
		docEl.style.fontSize = rem + 'px';
	}

	win.addEventListener(
		'resize',
		function() {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		},
		false
	);
	win.addEventListener(
		'pageshow',
		function(e) {
			if (e.persisted) {
				clearTimeout(tid);
				tid = setTimeout(refreshRem, 300);
			}
		},
		false
	);
	refreshRem();
})(window);
