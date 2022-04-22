$(document).ready(function () {
    $('#checkin-table').DataTable();

    $('.thead-checkbox').on('change', function() {
      $('.tbody-checkbox').prop('checked', this.checked);
    });
    $('.tbody-checkbox').on('change', function() {
    $('.thead-checkbox').prop('checked', $('.tbody-checkbox:checked').length===$('.tbody-checkbox').length);
    });

      
} );