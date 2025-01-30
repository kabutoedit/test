// Slider

// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	loop: true,

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// })

// Accordion

// function toggleAccordion(header) {
// 	const content = header.nextElementSibling

// 	if (content.style.display === 'none' || content.style.display === '') {
// 		content.style.display = 'block'
// 	} else {
// 		content.style.display = 'none'
// 	}
// }

// Micromodal

MicroModal.init({
	openTrigger: 'data-micromodal-trigger', // атрибут для открытия
	closeTrigger: 'data-micromodal-close', // атрибут для закрытия
})
