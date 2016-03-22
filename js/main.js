//Show quotes
function show_zq(){
  $('.quote').css('display', 'none');
  $('#zane_quote').css('visibility','visible').hide().fadeIn('slow');
  $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
}

function show_aq(){
  $('.quote').css('display', 'none');
  $('#arnold_quote').css('visibility','visible').hide().fadeIn('slow');
  $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
}

function show_pq(){
  $('.quote').css('display', 'none');
  $('#paige_quote').css('visibility','visible').hide().fadeIn('slow');
  $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
}

//Function To Display Popup
function bmr_show() {
if($('#popupbmr').is(":visible")){
  $('#popupbmr').hide();
} else {
  $('#popupbmr').show();
}
}


function tdee_show() {
  if($('#popuptdee').is(":visible")){
  $('#popuptdee').hide();
} else {
  $('#popuptdee').show();
}
}

function macro_show() {
  if($('#popupmacro').is(":visible")){
  $('#popupmacro').hide();
} else {
  $('#popupmacro').show();
}
}

//Function to Calculate Basal Metabolic Rate
function calculate_bmr(){
  event.preventDefault();
  var bmr = 0; 
  if($('#gender').val() === 'male'){
    bmr = Math.round(66 + (($('#weight').val() * 6.23) + ($('#height').val() * 12.7 
      - ($('#age').val() * 6.8)))); 
    $('#show_bmr').html(bmr);
  } else {
    bmr = Math.round(655 + (($('#weight').val() * 4.35) + ($('#height').val() * 4.7) 
      - ($('#age').val() * 4.7)));
    $('#show_bmr').html(bmr + ' kcals');
  }
}

//Function to Calculate Total Daily Energy Expenditure 
function calculate_tdee(){
  event.preventDefault();
  var tdee = 0; 
  var activity_factor = 0; 
  if($('#activity_level').val() === 'la'){
    activity_factor = 1.2;
  } else if($('#activity_level').val() === 'ma'){
    activity_factor = 1.375;
  } else if($('#activity_level').val() === 'va'){
    activity_factor = 1.55; 
  } else if($('#activity_level').val() === 'ea'){
    activity_factor = 1.725;
  }
    tdee = activity_factor * ($('#bmr').val());
    $('#show_tdee').html(tdee + ' kcals');
}

//Function to Calculate Macronutrients
function calculate_macros(){
  event.preventDefault();
  var calories, protein, carbs, fats; 
  if($('#fitness_goal').val() === 'fat_loss'){
    calories = parseInt($('#tdee').val() - 500); 
    protein = Math.floor((calories * .40)/4); 
    carbs = Math.floor((calories * .25)/4);
    fats = Math.floor((calories * .35)/9);
  } else if($('#fitness_goal').val() === 'maintainence'){
    calories = $('#tdee').val();  
    protein = Math.floor((calories * .40)/4); 
    carbs = Math.floor((calories * .40)/4);
    fats = Math.floor((calories * .20)/9);
  } else if($('#fitness_goal').val() === 'muscle_gain'){
    calories = parseInt($('#tdee').val()) + 200;  
    protein = Math.floor((calories * .40)/4); 
    carbs = Math.floor((calories * .40)/4);
    fats = Math.floor((calories * .40)/9);
  } 
  $('#calories').html(calories + ' kcals');
  $('#protein').html(protein + ' grams');
  $('#carbs').html(carbs + ' grams');
  $('#fats').html(fats + ' grams');
}

//Scroll to chart on exercise selection
  $('#bp').on('click', function(){
    $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
  });

  $('#ohp').on('click', function(){
    $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
  });

  $('#dl').on('click', function(){
    $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
  });

  $('#squat').on('click', function(){
    $("html, body").animate({ 
    scrollTop: $(document).height()-$(window).height() });
  });

//High Chart 
  $(function () {
    $('#chart_container').highcharts({
        chart: {},
         title: {
          text: 'Exercise',
          style: {
            color: 'red'
          }
         },

        xAxis: {
         categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
          title: {
                text: 'Time Frame',
                style: {
                    fontWeight: 'bold',
                    color: 'black'
                }
            },
        },

         yAxis: {
            title: {
                text: 'Weight',
                style: {
                    fontWeight: 'bold',
                    color: 'black'
                }
            },
            gridLineColor: '#333'
        },

        series: [{
            data: [],
            color: 'red',
            shadow: {
              color: 'gray',
              width: 10,
              offsetX: 0,
              offsetY: 0
            }
        }]
    });

    // the button action
    $('#progress').click(function () {
        var w1, w2, w3, w4, weight, myData, mySeries, chart;
        w1 = parseInt($('#week1').val());
        w2 = parseInt($('#week2').val());
        w3 = parseInt($('#week3').val());
        w4 = parseInt($('#week4').val());
        myData = [w1,w2, w3, w4];
        chart = $('#chart_container').highcharts();
        chart.series[0].setData(myData);
    });
});
