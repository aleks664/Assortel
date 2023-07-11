(function(){
	let slideUp = (target, duration=500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout( () => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		//alert("!");
	}, duration);
}
	let slideDown = (target, duration=500) => {
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;

		if (display === 'none')
			display = 'block';

		target.style.display = display;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.boxSizing = 'border-box';
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout( () => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
		}, duration);
	}

	const $dropdownItm = document.querySelectorAll('.b-i-dropdown__itm');
	const $dropdownHeads = document.querySelectorAll('.b-i-dropdown__head');

	document.addEventListener('click', function (e){
		if (!e.target.closest('.b-i-dropdown')) {
			const $dropdowns = document.querySelectorAll('.b-i-dropdown.is-open');
			$dropdowns.forEach($dropdown => {
				$dropdown.classList.remove('is-open');
				slideUp($dropdown.querySelector('.b-i-dropdown__list'))
			});
		}
	});

	$dropdownHeads.forEach($item => {
		$item.addEventListener('click', (e) => {
			e.preventDefault();
			const $dropdown = $item.closest('.b-i-dropdown');
			if ($dropdown.classList.contains('is-open')) {
				$dropdown.classList.remove('is-open');
				slideUp($dropdown.querySelector('.b-i-dropdown__list'))
			} else {
				$dropdown.classList.add('is-open');
				slideDown($dropdown.querySelector('.b-i-dropdown__list'))
			}
		})
	});
	$dropdownItm.forEach($item => {
		$item.addEventListener('click', (e) => {
			e.preventDefault();
			const tabId = $item.dataset.tab.substr(1);
			if (document.getElementById(tabId)) {
				const $dropdown = $item.closest('.b-i-dropdown');
				$dropdown.querySelector('.b-i-dropdown__ttl').textContent = $item.textContent;
				$dropdown.querySelector('.is-selected').classList.remove('is-selected');
				$item.classList.add('is-selected');
				document.getElementById(tabId).closest('.b-i-tabs').querySelector('.b-i-tabs__tab.is-active').classList.remove('is-active');
				document.getElementById(tabId).classList.add('is-active');
				$dropdown.classList.remove('is-open');
				slideUp($dropdown.querySelector('.b-i-dropdown__list'))
			}
		})
	});
})();
