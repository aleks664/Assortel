import { Fancybox } from '@fancyapps/ui'

export let slideUp = (target, duration = 500, callback) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = `${duration}ms`
	target.style.boxSizing = 'border-box'
	target.style.height = `${target.offsetHeight}px`
	// eslint-disable-next-line no-unused-expressions
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		if (callback) {
			callback()
		}
	}, duration)
}

export let slideDown = (target, duration = 500, callback) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display

	if (display === 'none') {
		display = 'block'
	}
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	// eslint-disable-next-line no-unused-expressions
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = `${duration}ms`
	target.style.height = `${height}px`
	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		if (callback) {
			callback()
		}
	}, duration)
}

export let slideToggle = (target, duration = 500, callback) => {
	let display = window.getComputedStyle(target).display
	if (display === 'none') {
		slideDown(target, duration, callback)
	} else {
		slideUp(target, duration, callback)
	}
}

const lang = () => {
	const $lang = document.querySelector('.languages')
	const $btn = $lang.querySelector('.head')
	const $dropdown = $lang.querySelector('.dropdown')
	$btn.addEventListener('click', () => {
		$lang.classList.toggle('is-open')
		slideToggle($dropdown)
	})
}
lang()
const anchors = document.querySelectorAll('.js-anchore')
anchors.forEach($button => {
	$button.addEventListener('click', (e) => {
		e.preventDefault()
		const $el = document.getElementById($button.getAttribute('href').substring(1))
		if ($el) {
			let display = window.getComputedStyle($el).display
			if (display === 'none') {
				$el.style.display = 'block'
			}
			const elPosition = $el.getBoundingClientRect().top
			if (display === 'none') {
				$el.style.display = 'none'
			}
			window.scrollBy({
				top: elPosition,
				behavior: 'smooth'
			})
		}
	})
})
Fancybox.bind('[data-fancybox]')
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
burger.addEventListener('click', () => {
	burger.classList.toggle('is-active')
	slideToggle(menu)
})
// document.addEventListener('click', (e) => {
// 	if (!e.target.closest('.burger') && !e.target.closest('.menu')) {
// 		burger.classList.remove('is-active')
// 		slideUp(menu)
// 	}
// });
function handleMarquee() {
	const marquee = document.querySelectorAll('.js-marquee')
	let speed = 2
	marquee.forEach((el) => {
		const container = el.querySelector('.inner')
		const content = el.querySelector('.inner ul')
		// Get total width
		const elWidth = content.offsetWidth
		let clone = content.cloneNode(true)
		container.appendChild(clone)

		let progress = 1
		function loop() {
			progress -= speed
			if (progress <= elWidth * -1) {
				progress = 0
			}
			container.style.transform = `translateX(${progress}px)`
			container.style.transform += `skewX(${speed * 0.4}deg)`

			window.requestAnimationFrame(loop)
		}
		loop()
	})
}
handleMarquee()
import Swiper, { Navigation, Pagination } from 'swiper'
const arrProductCarousel = document.querySelectorAll('.catalog')
arrProductCarousel.forEach($sCarousel => {
	const $prev = $sCarousel.querySelector('.swiper-button-prev')
	const $next = $sCarousel.querySelector('.swiper-button-next')
	const $carousel = $sCarousel.querySelector('.swiper')
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper($carousel, {
		modules: [Navigation, Pagination],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			375: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			}
		},
		navigation: {
			nextEl: $next,
			prevEl: $prev
		}
	})
})
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(document.querySelector('.bottom-carousel  .swiper'), {
	modules: [Navigation, Pagination],
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 5
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 21
		}
	}
})

const parallax = () => {
	const arrSection = document.querySelectorAll('.section-parallax')

	const move = (item, scroll) => {
		let speed = item.dataset.speed || 1
		let movementSize = scroll / 20 * speed
		if (item.classList.contains('top')) {
			item.style.marginTop = `-${movementSize}px`;
		}
		if (item.classList.contains('bottom')) {
			item.style.marginTop = `${movementSize}px`;
		}
		if (item.classList.contains('left')) {
			item.style.marginLeft = `-${movementSize}px`;
		}
		if (item.classList.contains('right')) {
			item.style.marginLeft = `${movementSize}px`;
		}
		// item.style[`margin${direction}`] = `${movementSize}px`;
	}
	window.addEventListener('scroll', () => {
		arrSection.forEach($section => {
			const arrEls = $section.querySelectorAll('.parallax')
			// eslint-disable-next-line no-unused-vars
			let top = (window.pageYOffset || $section.scrollTop) - ($section.clientTop || 0)
			for (const item of arrEls) {
				move(item, top)
			}
		})
	})
}
parallax()
