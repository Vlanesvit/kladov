function changeStepImg() {
	const stepBtn = document.querySelectorAll('.rs-steps__desc .rs-steps__spollers_title')
	const stepImg = document.querySelectorAll('.rs-steps__picture .rs-steps__img')

	if (stepBtn.length > 0 && stepImg.length > 0) {
		stepBtn.forEach((item, index) => {
			item.addEventListener('click', function (e) {
				e.preventDefault()
				stepImg.forEach(img => {
					img.classList.remove('_spoller-active')
				});

				stepImg[index].classList.add('_spoller-active')
			})
		});
	}
}
changeStepImg()