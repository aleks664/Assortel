const headerScroll = () => {
	const $header = document.querySelector('.s-header');
	const $body = document.querySelector('body');
	const onScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const headerHeight = $header.offsetHeight;

		if (scrollTop > headerHeight) {
			$body.style.paddingTop = `${headerHeight}px`;
			$header.classList.add('is-fixed');
		} else {
			$body.style.paddingTop = 0;
			$header.classList.remove('is-fixed');
		}
	}
	window.addEventListener('scroll', () => onScroll());
	window.addEventListener('resize', () => onScroll());
};
headerScroll()
