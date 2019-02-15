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
        type:(type)=>{//remeber type = ref or nonref

            let html, element;
    
            //create html string with placeholder text
            if(type === 'ref'){
              element = '';
            html = '';
            } else if(type === 'nonref') {
              element = '';
            html = '';
            }
    
            //insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',html);
          },
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
    let days, arriveDate, departDate;
    arriveDate = document.querySelector("#arrive").valueAsDate;
    departDate = document.querySelector("#depart").valueAsDate;
    refundable = document.querySelector("#ref").value;
    days = dataController.days_between(arriveDate,departDate)
    refundable = dataController.type(refundable)
    console.log('refundable', refundable)

}

  




  