// const cars = [
// 	{
// 		id: 1,
// 		brand: 'Toyota',
// 		model: 'Camry',
// 		year: 2019,
// 		price: 25000,
// 		image:
// 			'https://scene7.toyota.eu/is/image/toyotaeurope/CAM0001a_24_WEB:Large-Landscape?ts=1730967765830&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha',
// 	},
// 	{
// 		id: 2,
// 		brand: 'Honda',
// 		model: 'Civic',
// 		year: 2020,
// 		price: 22000,
// 		image:
// 			'https://upload.wikimedia.org/wikipedia/commons/1/1a/Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg',
// 	},
// 	{
// 		id: 3,
// 		brand: 'BMW',
// 		model: '3 Series',
// 		year: 2018,
// 		price: 35000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2025-bmw-3-series-109-66562dcbe3d2b.jpg?crop=0.777xw:0.582xh;0.0902xw,0.227xh&resize=1200:*',
// 	},
// 	{
// 		id: 4,
// 		brand: 'Audi',
// 		model: 'A4',
// 		year: 2021,
// 		price: 40000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2021-audi-a4-45-tfsi-quattro-104-1607927016.jpg?crop=0.450xw:0.380xh;0.226xw,0.399xh&resize=2048:*',
// 	},
// 	{
// 		id: 5,
// 		brand: 'Toyota',
// 		model: 'Corolla',
// 		year: 2020,
// 		price: 18000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-gr-corolla-114-6716726ea18f7.jpg',
// 	},
// 	{
// 		id: 6,
// 		brand: 'Honda',
// 		model: 'Accord',
// 		year: 2019,
// 		price: 27000,
// 		image:
// 			'https://www.cnet.com/a/img/resize/bfa75d75231dc8d14857ab41ed58c7fed7c75236/hub/2021/01/07/a9cb3648-5bc3-49ed-8bad-4c88b231a4ec/2021-honda-accord-008.jpg?auto=webp&fit=crop&height=900&width=1200',
// 	},
// 	{
// 		id: 7,
// 		brand: 'Ford',
// 		model: 'Focus',
// 		year: 2017,
// 		price: 15000,
// 		image:
// 			'https://www.topgear.com/sites/default/files/cars-car/image/2024/10/1-Ford-Focus-ST-Edition-review-2024.jpg',
// 	},
// 	{
// 		id: 8,
// 		brand: 'Chevrolet',
// 		model: 'Malibu',
// 		year: 2018,
// 		price: 19000,
// 		image:
// 			'https://s.auto.drom.ru/img4/catalog/photos/fullsize/chevrolet/malibu/chevrolet_malibu_56076.jpg',
// 	},
// 	{
// 		id: 9,
// 		brand: 'Mercedes-Benz',
// 		model: 'C-Class',
// 		year: 2019,
// 		price: 42000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWUNS5nBMVAPhqm03uqfP4IYk8AVCYZimdw&s',
// 	},
// 	{
// 		id: 10,
// 		brand: 'Nissan',
// 		model: 'Altima',
// 		year: 2020,
// 		price: 23000,
// 		image:
// 			'https://media.ed.edmunds-media.com/nissan/altima/2025/oem/2025_nissan_altima_sedan_25-sv_fq_oem_1_1280.jpg',
// 	},
// 	{
// 		id: 11,
// 		brand: 'Volkswagen',
// 		model: 'Passat',
// 		year: 2018,
// 		price: 21000,
// 		image:
// 			'https://uploads.vw-mms.de/system/production/images/vwn/029/415/images/869424d4159b91be4431c309c1e63f53ea727f0f/DB2019AU00902_web_1600.jpg?1649155074',
// 	},
// 	{
// 		id: 12,
// 		brand: 'Subaru',
// 		model: 'Impreza',
// 		year: 2021,
// 		price: 26000,
// 		image:
// 			'https://top-tuning.ru/upload/images/news/103568/subaru_impreza_8.jpg',
// 	},
// 	{
// 		id: 13,
// 		brand: 'Kia',
// 		model: 'Optima',
// 		year: 2019,
// 		price: 20000,
// 		image:
// 			'https://avatars.mds.yandex.net/get-verba/3587101/2a00000190ba68c2897352ed1cf630e657bc/cattouchret',
// 	},
// 	{
// 		id: 14,
// 		brand: 'Hyundai',
// 		model: 'Elantra',
// 		year: 2020,
// 		price: 19000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/57363-2024elantran-655d31bed5de5.jpg?crop=0.694xw:0.587xh;0.170xw,0.313xh&resize=2048:*',
// 	},
// 	{
// 		id: 15,
// 		brand: 'Mazda',
// 		model: 'Mazda3',
// 		year: 2018,
// 		price: 18000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2025-mazda-mazda-3-101-669a8e26c3d86.jpg',
// 	},
// 	{
// 		id: 16,
// 		brand: 'Lexus',
// 		model: 'ES',
// 		year: 2021,
// 		price: 38000,
// 		image:
// 			'https://upload.wikimedia.org/wikipedia/commons/7/76/0Lexus_ES_300h2.jpg',
// 	},
// 	{
// 		id: 17,
// 		brand: 'Infiniti',
// 		model: 'Q50',
// 		year: 2019,
// 		price: 35000,
// 		image:
// 			'https://vehicle-images.dealerinspire.com/3341-18003168/JN1FV7DR6RM680492/79effabfe0c598922cae6356a654c3f6.jpg',
// 	},
// 	{
// 		id: 18,
// 		brand: 'Acura',
// 		model: 'TLX',
// 		year: 2020,
// 		price: 34000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2024-acura-tlx-132-65a15c814ada9.jpg?crop=0.566xw:0.637xh;0.133xw,0.276xh&resize=768:*',
// 	},
// 	{
// 		id: 19,
// 		brand: 'Volvo',
// 		model: 'S60',
// 		year: 2018,
// 		price: 33000,
// 		image:
// 			'https://www.motortrend.com/uploads/2023/11/10-2024-Volvo-S60-Recharge-AWD-Black-Edition-front-view.jpg?w=768&width=768&q=75&format=webp',
// 	},
// 	{
// 		id: 20,
// 		brand: 'Jaguar',
// 		model: 'XE',
// 		year: 2021,
// 		price: 41000,
// 		image:
// 			'https://avatars.mds.yandex.net/get-verba/937147/2a00000169348a168e895b7cc13279db3ace/cattouchret',
// 	},
// 	{
// 		id: 21,
// 		brand: 'Chevrolet',
// 		model: 'Impala',
// 		year: 2019,
// 		price: 28000,
// 		image:
// 			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2014_Chevrolet_Impala_LTZ_3.6L_with_courtesy_plates%2C_front_6.1.19.jpg/800px-2014_Chevrolet_Impala_LTZ_3.6L_with_courtesy_plates%2C_front_6.1.19.jpg',
// 	},
// 	{
// 		id: 22,
// 		brand: 'Ford',
// 		model: 'Fusion',
// 		year: 2020,
// 		price: 25000,
// 		image:
// 			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg/640px-2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg',
// 	},
// 	{
// 		id: 23,
// 		brand: 'Nissan',
// 		model: 'Sentra',
// 		year: 2018,
// 		price: 17000,
// 		image:
// 			'https://avatars.mds.yandex.net/get-verba/1604130/2a000001932aa8bc2926d5120b0781eba6f2/cattouchretcr',
// 	},
// 	{
// 		id: 24,
// 		brand: 'Honda',
// 		model: 'Fit',
// 		year: 2017,
// 		price: 15000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2020-honda-fit-mmp-1-1574789897.jpg',
// 	},
// 	{
// 		id: 25,
// 		brand: 'Toyota',
// 		model: 'Prius',
// 		year: 2021,
// 		price: 30000,
// 		image:
// 			'https://autoreview.ru/images/Article/1749/Article_174929_860_575.jpg',
// 	},
// 	{
// 		id: 26,
// 		brand: 'Kia',
// 		model: 'Soul',
// 		year: 2019,
// 		price: 16000,
// 		image:
// 			'https://avatars.mds.yandex.net/get-verba/937147/2a00000160940b983176c35bc8ddeef23722/cattouchret',
// 	},
// 	{
// 		id: 27,
// 		brand: 'Hyundai',
// 		model: 'Santa Fe',
// 		year: 2020,
// 		price: 32000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-santa-fe-155-65fb0b128f413.jpg?crop=0.670xw:0.565xh;0.167xw,0.257xh&resize=2048:*',
// 	},
// 	{
// 		id: 28,
// 		brand: 'Jeep',
// 		model: 'Wrangler',
// 		year: 2018,
// 		price: 35000,
// 		image:
// 			'https://media.ed.edmunds-media.com/jeep/wrangler/2025/oem/2025_jeep_wrangler_convertible-suv_rubicon-x_fq_oem_1_1600.jpg',
// 	},
// 	{
// 		id: 29,
// 		brand: 'Subaru',
// 		model: 'Forester',
// 		year: 2021,
// 		price: 28000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIbovCTQcMCRHLXCig78eeeg1D422ckfKzg&s',
// 	},
// 	{
// 		id: 30,
// 		brand: 'Mitsubishi',
// 		model: 'Outlander',
// 		year: 2019,
// 		price: 24000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdX4XZI07Y7-_JopdOmMs9PxlewhK0KE0s1w&s',
// 	},
// 	{
// 		id: 31,
// 		brand: 'Volkswagen',
// 		model: 'Jetta',
// 		year: 2020,
// 		price: 21000,
// 		image:
// 			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2019_Volkswagen_Jetta_1.4T_R-Line_in_Haba%C3%B1ero_Orange_Metallic%2C_front_right.jpg/800px-2019_Volkswagen_Jetta_1.4T_R-Line_in_Haba%C3%B1ero_Orange_Metallic%2C_front_right.jpg',
// 	},
// 	{
// 		id: 32,
// 		brand: 'BMW',
// 		model: '5 Series',
// 		year: 2021,
// 		price: 50000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEIRvVEsJHUtIBpllI84aXQMZGY0xzrPVLw&s',
// 	},
// 	{
// 		id: 33,
// 		brand: 'Mercedes-Benz',
// 		model: 'E-Class',
// 		year: 2020,
// 		price: 48000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KAKJKe5gg85_9fO2wtciaV2-SXBpSlcrKQ&s',
// 	},
// 	{
// 		id: 34,
// 		brand: 'Audi',
// 		model: 'A6',
// 		year: 2019,
// 		price: 45000,
// 		image:
// 			'https://rucars.ru/image/catalog/cars/news/Audi/A6e-tron/audi-a6-sportback-e-tron-01.jpg',
// 	},
// 	{
// 		id: 35,
// 		brand: 'Lexus',
// 		model: 'RX',
// 		year: 2021,
// 		price: 42000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2025-lexus-rx350-premium-101-66f2dbe526c80.jpg?crop=0.788xw:0.666xh;0.0224xw,0.329xh&resize=1200:*',
// 	},
// 	{
// 		id: 36,
// 		brand: 'Acura',
// 		model: 'MDX',
// 		year: 2020,
// 		price: 41000,
// 		image:
// 			'https://www.usnews.com/object/image/00000191-70f9-d62e-a599-f3f906cc0000/01-usnpx-2025acuramdx-angularfront-jmv.JPG?update-time=1724177346327&size=responsive640',
// 	},
// 	{
// 		id: 37,
// 		brand: 'Infiniti',
// 		model: 'QX50',
// 		year: 2019,
// 		price: 38000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HMxg305oF8c18Dnd1AeQ4XzZ4Hnl1H6YmQ&s',
// 	},
// 	{
// 		id: 38,
// 		brand: 'Jaguar',
// 		model: 'F-Pace',
// 		year: 2021,
// 		price: 46000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2021-jaguar-f-pace-s-p400-131-1630522612.jpg?crop=0.654xw:0.549xh;0.0785xw,0.451xh&resize=1200:*',
// 	},
// 	{
// 		id: 39,
// 		brand: 'Volvo',
// 		model: 'XC60',
// 		year: 2020,
// 		price: 40000,
// 		image:
// 			'https://www.topgear.com/sites/default/files/cars-car/image/2024/12/325541_Volvo_XC60_Recharge_Plug-in_Hybrid_T8_Ultimate_Black_Edition.jpg?w=1280&h=720',
// 	},
// 	{
// 		id: 40,
// 		brand: 'Mazda',
// 		model: 'CX-5',
// 		year: 2018,
// 		price: 27000,
// 		image: 'https://www.major-mazda.ru/files/resources/newsthree.jpg',
// 	},
// 	{
// 		id: 41,
// 		brand: 'Toyota',
// 		model: 'RAV4',
// 		year: 2019,
// 		price: 26000,
// 		image:
// 			'https://media.ed.edmunds-media.com/toyota/rav4-hybrid/2025/oem/2025_toyota_rav4-hybrid_4dr-suv_se_fq_oem_1_1600.jpg',
// 	},
// 	{
// 		id: 42,
// 		brand: 'Honda',
// 		model: 'CR-V',
// 		year: 2020,
// 		price: 29000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLEExusLHfzf8oVTsMqgr4aq2QFiD6go45g&s',
// 	},
// 	{
// 		id: 43,
// 		brand: 'Ford',
// 		model: 'Escape',
// 		year: 2018,
// 		price: 23000,
// 		image:
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTUDyjGVuxoaaZnYcxrqscJOOrXWyJIcKeg&s',
// 	},
// 	{
// 		id: 44,
// 		brand: 'Chevrolet',
// 		model: 'Equinox',
// 		year: 2021,
// 		price: 31000,
// 		image:
// 			'https://avatars.mds.yandex.net/get-verba/1535139/2a000001905d9ed75b4fa3d2fe7d5ec6d728/456x342',
// 	},
// 	{
// 		id: 45,
// 		brand: 'Nissan',
// 		model: 'Rogue',
// 		year: 2019,
// 		price: 25000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2025-nissan-rogue-rock-creek-117-668c00900c71d.jpg?crop=0.588xw:0.676xh;0.0369xw,0.295xh&resize=768:*',
// 	},
// 	{
// 		id: 46,
// 		brand: 'Subaru',
// 		model: 'Outback',
// 		year: 2020,
// 		price: 28000,
// 		image: 'https://rg.ru/uploads/images/168/04/34/12.jpg',
// 	},
// 	{
// 		id: 47,
// 		brand: 'Kia',
// 		model: 'Sportage',
// 		year: 2018,
// 		price: 22000,
// 		image:
// 			'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-pr-114-673f7ae56c057.jpg?crop=0.753xw:0.564xh;0.109xw,0.215xh&resize=1200:*',
// 	},
// 	{
// 		id: 48,
// 		brand: 'Hyundai',
// 		model: 'Tucson',
// 		year: 2021,
// 		price: 24000,
// 		image:
// 			'https://avatars.mds.yandex.net/get-verba/216201/2a0000018cfcb8524f306a51ecf60fff22c3/cattouchretcr',
// 	},
// 	{
// 		id: 49,
// 		brand: 'Mitsubishi',
// 		model: 'Lancer',
// 		year: 2017,
// 		price: 17000,
// 		image:
// 			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mitsubishi_Lancer_EVO_X.jpg/1200px-Mitsubishi_Lancer_EVO_X.jpg',
// 	},
// 	{
// 		id: 50,
// 		brand: 'Volkswagen',
// 		model: 'Tiguan',
// 		year: 2020,
// 		price: 29000,
// 		image: 'https://rg.ru/uploads/images/199/99/84/Volkswagen_Tiguan_(1).jpg',
// 	},
// ]
// let exchangeRate = 1

// async function getExchangeRate() {
// 	const response = await fetch(
// 		'https://v6.exchangerate-api.com/v6/5ec85521cabee78f16fc37b2/latest/USD'
// 	)
// 	const data = await response.json()

// 	console.log(data)

// 	exchangeRate = data.conversion_rates.KGS

// 	renderCars(cars)
// }

// function renderCars(cars) {
// 	const carCards = document.querySelector('.carCards')
// 	carCards.innerHTML = cars
// 		.map(
// 			car =>
// 				`
// 				<div class="carCard">
//           <img src="${car.image}" alt="${car.brand} ${car.model}">
//           <h2>${car.brand} ${car.model}</h2>
//           <p>Год: ${car.year}</p>
//           <p>Цена: $${car.price}</p>
//           <p>Цена в сомах: ${Math.round(car.price * exchangeRate)} СОМ</p>
//       	</div>
// 			`
// 		)
// 		.join('')
// }

// function applyFilters() {
// 	const minPrice = document.querySelector('#minPrice').value
// 	const maxPrice = document.querySelector('#maxPrice').value
// 	const yearFilter = document.querySelector('#yearFilter').value

// 	const filteredCarsPriceAndYear = cars.filter(car => {
// 		return (
// 			(minPrice === '' || car.price >= +minPrice) &&
// 			(maxPrice === '' || car.price <= +maxPrice) &&
// 			(yearFilter === '' || car.year <= +yearFilter)
// 		)
// 	})

// 	renderCars(filteredCarsPriceAndYear)
// }

// function onModelSelect(brand, model) {
// 	const filteredCarsOnModel = cars.filter(
// 		car => car.brand === brand && car.model === model
// 	)

// 	renderCars(filteredCarsOnModel)
// }

// let currentBrand = ''

// function onBrandSelect(brand) {
// 	const modelFilter = document.querySelector(
// 		'#modelsAccordion .accordion-content'
// 	)
// 	const modelsAccordionButton = document.querySelector(
// 		'#modelsAccordion .accordion-button'
// 	)

// 	modelsAccordionButton.disabled = false
// 	if (brand !== currentBrand) {
// 		currentBrand = brand

// 		modelsAccordionButton.textContent = `Выберите модель для ${brand}`
// 		modelFilter.innerHTML = ''
// 	} else {
// 		currentBrand = ''
// 		modelFilter.innerHTML = ''
// 	}

// 	const models = cars.filter(car => car.brand === brand).map(car => car.model)

// 	models.forEach(model => {
// 		const button = document.createElement('button')
// 		button.textContent = model
// 		button.onclick = () => onModelSelect(brand, model)
// 		modelFilter.appendChild(button)
// 	})

// 	toggleAccordion('#modelsAccordion')
// }

// function createBrandButtons() {
// 	const brandFilter = document.querySelector(
// 		'#brandsAccordion .accordion-content'
// 	)
// 	const brands = [...new Set(cars.map(car => car.brand))]

// 	brands.forEach(brand => {
// 		const button = document.createElement('button')
// 		button.textContent = brand
// 		button.onclick = () => {
// 			onBrandSelect(brand), this.classList.add('active')
// 		}
// 		brandFilter.appendChild(button)
// 	})
// }

// function toggleAccordion(selector) {
// 	const accordion = document.querySelector(selector)
// 	const content = accordion.querySelector('.accordion-content')

// 	content.classList.add('block')
// }

// document.querySelectorAll('.accordion-button').forEach(button => {
// 	button.addEventListener('click', function () {
// 		const accordion = this.parentElement
// 		toggleAccordion(`#${accordion.id}`)
// 	})
// })

// getExchangeRate()
// createBrandButtons()

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const promise = new Promise((resolve, reject) => {
// 	resolve('Успех!')
// 	reject('Error!')
// })

// promise
// 	.then(result => console.log('✅', result))
// 	.catch(error => console.log('❌', error))
// 	.finally(() => console.log('⏳ Завершено'))

// new Promise(resolve => resolve(4))
// 	.then(num => num * 2)
// 	.then(num => num * 3)
// 	.then(num => console.log(num)
// )

//
//
//
//
//
//
//
//
//
//
//
//
// let todoData = null

// async function getData() {
// 	try {
// 		// fetch
// 		// const response = await fetch('https://jsonplaceholder.typicode.com/todos')
// 		// todoData = await response.json()

// 		// axios
// 		const response = await axios.get(
// 			'https://jsonplaceholder.typicode.com/todos'
// 		)
// 		todoData = await response.data

// 		console.log(todoData)
// 		renderTodo(todoData)
// 	} catch (error) {
// 		console.error('Ошибка запроса:', error.message)
// 	}
// }
// getData()

// // async function postData() {
// // 	try {
// // 		const newTodo = {
// // 			userId: 1,
// // 			title: 'Новая задача',
// // 			completed: false,
// // 		}

// // 		const response = await axios.post(
// // 			'https://jsonplaceholder.typicode.com/todos',
// // 			newTodo,
// // 			{
// // 				headers: {
// // 					'Content-Type': 'application/json',
// // 				},
// // 			}
// // 		)
// // 		const createdTodo = [response.data]
// // 		console.log('Созданный TODO:', createdTodo)
// // 		renderTodo(createdTodo)
// // 	} catch (error) {
// // 		console.error('Ошибка запроса:', error.message)
// // 	}
// // }
// // postData()

// function renderTodo(todoData) {
// 	const carCards = document.querySelector('.carCards')
// 	carCards.innerHTML = todoData
// 		// .slice(0, 10)
// 		.map(
// 			todo =>
// 				`
// 				<div class="carCard">
//           <h2>Задача #${todo.id}</h2>
//           <p>${todo.title}</p>
//           <p>Статус: ${todo.completed ? '✅ Выполнено' : '❌ Не выполнено'}</p>
//       	</div>
// 			`
// 		)
// 		.join('')
// }

// let todos = null

// async function getTodos() {
// 	try {
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts')

// 		todos = await response.json()

// 		console.log(todos)
// 		renderTodos(todos)
// 	} catch {
// 		console.error('Error')
// 	}
// }

// function renderTodos(todoData) {
// 	const dataCards = document.querySelector('.todoCards')
// 	dataCards.innerHTML = todoData
// 		.slice(0, 20)
// 		.map(
// 			data =>
// 				`
// 				<div class="carCard">
//           <h2>Задача #${data.id}</h2>
//           <p>${data.title}</p>
//           <p>Статус: ${data.completed ? '✅ Выполнено' : '❌ Не выполнено'}</p>
//       	</div>
// 			`
// 		)
// 		.join('')
// }

// getTodos()

// CRUD

// create - post
// read - get
// update - put/patch
// delete - delete

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// 📌 Create (POST)
async function createPost(data) {
	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})

		const result = await response.json()
		console.log('✅ Пост создан:', result)
		return result
	} catch (error) {
		console.error('❌ Ошибка:', error.message)
	}
}

// 📌 Read (GET)
async function getPosts() {
	try {
		const response = await fetch(apiUrl)

		const data = await response.json()
		console.log('📜 Список постов:', data.slice(0, 15))
		return data
	} catch (error) {
		console.error('❌ Ошибка:', error.message)
	}
}

// 📌 Update (PUT) с проверкой JSON-ответа
async function updatePost(id, newData) {
	try {
		const response = await fetch(`${apiUrl}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newData),
		})

		if (!response.ok)
			throw new Error(`Ошибка при обновлении (код ${response.status})`)

		// Проверяем, содержит ли ответ JSON
		const contentType = response.headers.get('content-type')
		if (!contentType || !contentType.includes('application/json')) {
			throw new Error('Ответ не в JSON формате')
		}

		const result = await response.json()
		console.log(`🔄 Пост ${id} обновлен:`, result)
		return result
	} catch (error) {
		console.error('❌ Ошибка:', error.message)
	}
}

// 📌 Delete (DELETE)
async function deletePost(id) {
	try {
		const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' })

		console.log(`🗑 Пост ${id} удален`)
		return response.ok
	} catch (error) {
		console.error('❌ Ошибка:', error.message)
	}
}

// ⚡ Тестирование всех функций
async function testCRUD() {
	console.log('🔹 Тестирование CRUD-функций...')

	// 🟢 Создание поста
	const newPost = await createPost({
		title: 'Тестовый пост',
		body: 'Содержимое поста',
		userId: 1,
	})
	if (!newPost) return

	// 🔵 Получение всех постов
	await getPosts()

	// 🟠 Обновление поста
	const updatedPost = await updatePost(1, {
		title: 'Обновленный заголовок',
		body: 'Обновленный текст',
		userId: 1,
	})
	if (!updatedPost) return

	// 🔴 Удаление поста
	await deletePost(newPost.id)

	console.log('✅ Тестирование завершено!')
}

// Запуск теста
testCRUD()
