
/* ====================================
Инициализация библиотеки для input file
==================================== */
function initFilepond() {
	// Регаем плагины
	FilePond.registerPlugin(
		FilePondPluginFileEncode,
		FilePondPluginFileValidateSize,
		FilePondPluginFileValidateType,
		FilePondPluginImageExifOrientation,
		FilePondPluginImageCrop,
		FilePondPluginImageResize,
	);

	const inputs = document.querySelectorAll('input.filepond')
	inputs.forEach(input => {
		// Инициализация
		FilePond.create(
			input,
			{
				labelIdle: `
				<span class="upload-icon">
					<img src="./img/icons/upload.svg" alt="">
				</span>
				<span class="anc-16-medium">
					Загрузить проект
				</span>
				<span class="anc-12-regular">
					Общий вес файлов не более 15 Мб
				</span>`,
			}
		);
	});
}
initFilepond()