function validation()
{
    let fullName= document.getElementById('full-name').value
    let gender= document.getElementById('gender').value
    let hobbies= document.getElementById('hobbies')

    let error = false

    // here we can that the full name has atleast 5 char or more and has atleast 1 space

    if(fullName.length >=5 && fullName.includes(' ')){
        document.getElementById('full-name-valid').style.display='block'
        document.getElementById('full-name-invalid').style.display='none'
     }else{
        document.getElementById('full-name-valid').style.display='none'
        document.getElementById('full-name-invalid').style.display='block'
        error = true
     }

    //  here we check that for gender select at least one 
     if(gender != 'None'){
        document.getElementById('gender-valid').style.display='block'
        document.getElementById('gender-invalid').style.display='none'
     }else{
        document.getElementById('gender-valid').style.display='none'
        document.getElementById('gender-invalid').style.display='block'
        error = true
     }

    //  here we check that for hobbies select at least one 
     
     let checkboxes= document.getElementsByName('hob')
     let values = []
     for(let i=0;i< checkboxes.length;i++){
        if(checkboxes[i].checked){
            values.push(checkboxes[i].value)
        }
        if(values.length>0){
            document.getElementById('hobbies-valid').style.display='block'
            document.getElementById('hobbies-invalid').style.display='none'
          }
        else{
            document.getElementById('hobbies-valid').style.display='none'
           document.getElementById('hobbies-invalid').style.display='block'
           error = true
         }
     }

     let val=[]
     for(let i=0;i<values.length-1;i++){
         val[i]=values[i]
     }


    //  here we set the alert

     if(error)
     {  if(val.length!=0){
         
        alert(`Hobbies of ${fullName} (${gender}) are ${val.toString()} and ${values[values.length-1]}`)
     }else{
         alert(`Hobbies of ${fullName} (${gender}) are ${values[values.length-1]}`)
     }

    // here we create reset method

        document.getElementById('registration-form').reset()

    // here we fix the valid invalid msg after reset

        let validFeedback=document.getElementsByClassName('valid-feedback')
      for(let i=0;i<validFeedback.length;i++){
         validFeedback[i].style.display='none'
      }
      let invalidFeedback=document.getElementsByClassName('invalid-feedback')
      for(let i=0;i<invalidFeedback.length;i++){
         invalidFeedback[i].style.display='none'
      }
     }

}
