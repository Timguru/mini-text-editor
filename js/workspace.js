    //cretae our timer for counting
    var counter = 0
    function convertToSeconds(s){
           var min = floor(s/60)
           var sec = s % 60
           return nf(min,2) + ':' + nf(sec,2)
    }

    setup = () =>{

        var timer = select("#timer")
        timer.html(convertToSeconds(counter))

        //function to create time increment
        timeIt  = () =>{
            counter++
            timer.html(convertToSeconds(counter))
        }

        setInterval(timeIt,1000)
    }
    
    //Allow the document body to be edited
    const enableEditMode = ()=> {
       richTextField.document.designMode = 'on'
     
   }
   //commands to be carried out by the buttons
    const execCmd  =(command) => {
        richTextField.document.execCommand(command,false,null)
      }
   //commands to be carried out by the select and input groups
    const execCommandWithArgs = (command,arg) =>{
        richTextField.document.execCommand(command,false,arg)
    }
  
    //Make the document body editable or not
    toggleEdit = ()=>{
        if(isInEditMode) {
            richTextField.document.designMode = 'off'//Not Editable
            isInEditMode = false
        }else {
            richTextField.document.designMode = 'on' //editable
            isInEditMode = true
        }
    }