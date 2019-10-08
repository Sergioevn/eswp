$(function() {
	$('#roller').click(function() {
		let result = Math.floor(Math.random() * 6) + 1;
		$('#romeImg').prop('src', './pic/rome/' + result + '.jpg');
	
		
	

	});
})