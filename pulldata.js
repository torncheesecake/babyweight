$(function()
{

	var start = moment().subtract(29, 'days');
	var end = moment();

	function cb(start, end)
	{
		$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
	}

	$('#reportrange').daterangepicker(
	{
		startDate: start,
		endDate: end,
		ranges:
		{
			'Today': [moment(), moment()],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'Last 60 Days': [moment().subtract(59, 'days'), moment()],
			'Last 90 Days': [moment().subtract(89, 'days'), moment()]
		}
	}, cb);

	cb(start, end);

});
