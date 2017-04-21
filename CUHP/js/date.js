
 $(function() {

    //populate our years select box
    $('#years').append($('<option></option>').val('').html('---YEAR---'));
    for (i = new Date().getFullYear(); i > 1900; i--){
        $('#years').append($('<option></option>').val(i).html(i));
    }
    //populate our months select box
    $('#months').append($('<option></option>').val('').html('---MONTH---'));
    for (i = 1; i < 13; i++){
        $('#months').append($('<option></option>').val(i).html(i));
    }
    //populate our Days select box
    updateNumberOfDays(); 

    //"listen" for change events
    $('#years, #months').change(function(){
        updateNumberOfDays(); 
    });

});

//function to update the days based on the current values of month and year
function updateNumberOfDays(){
    $('#days').html('');
    month = $('#months').val();
    year = $('#years').val();
    days = daysInMonth(month, year);
    $('#days').append($('<option></option>').val('').html('---DAY---'));
    for(i=1; i < days+1 ; i++){
            $('#days').append($('<option></option>').val(i).html(i));
    }
}

//helper function
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}