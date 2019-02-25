const dataController = (()=>{

    return {
        days_between : (arrive,depart) => {
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24;
        // Convert both dates to milliseconds
        var date1_ms = arrive.getTime();
        var date2_ms = depart.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);
        // Convert back to days and return
        return  Math.round(difference_ms/ONE_DAY);
        },
        type:(rateCode)=>{
            let html, element = '.target__nonref';
            if(rateCode === 'ref'){
              html = '';
              document.querySelector(element).style.display = 'none';
            } else if(rateCode === 'nonref') {
              html = '<p>Your Booking is non-refundable & non-transferable</p>';
              document.querySelector(element).style.display = 'block';
            }
            document.querySelector(element).innerHTML = html;
          },
          lengthOfStay:(days)=>{
            let html, element = '.target__policy';
            if(days >= 29 ){
              html = '<p>Please cancel 14 days prior to check-in time at 2pm of your arrival date, to avoid the cancellation fee of 7 nights charge</p>';
            } else if(days >= 7 && days <=28  ) {
                html = '<p>Please cancel 72 hours prior to check-in time at 2pm of your arrival date, to avoid the cancellation fee of 3 nights charge</p>';
            }else{
                html = '<p>Please cancel 24 hours prior to check-in time at 2pm of your arrival date, to avoid the cancellation fee of 1 night charge</p>';
            }
            document.querySelector(element).innerHTML = html
          },
          day:(days)=>{
              let html, element = '.target__date';
              html = `<p>You are staying with us for ${days} days of fun in the sun!</p>`
              document.querySelector(element).innerHTML = html
          }
    }
        
})();



//onclick event of submit btn
document.getElementById("formField").addEventListener('submit', fnSubmit);

//incase user presses enter instead of using submit btn
document.addEventListener('keypress', event =>{
    if(event.keyCode === 13 || event.which === 13){
      fnSubmit(event);
    }
});

function fnSubmit(e){
    e.preventDefault();
    
    let days, arriveDate, departDate, refundable, policy, date, rateCode;
    
    arriveDate = document.querySelector("#arrive").valueAsDate;
    departDate = document.querySelector("#depart").valueAsDate;
    rateCode = document.querySelector("#ref").value;
    
    days = dataController.days_between(arriveDate,departDate);
    refundable = dataController.type(rateCode);
    policy = dataController.lengthOfStay(days);
    date = dataController.day(days);
    
    return days, refundable, policy, date
}

  




  
