$(document).ready(function(){
    //API call to theBoredAPI to get an activity that we will use as a fortune
    $.get('https://www.boredapi.com/api/activity?participants=1', (data) => {  
        //define variables so they are accessible where we need them to be
        let windowText = undefined
        let hoverState = undefined
      //create an 'i see...' mouseover event for boredbutton
        $('#boredButton').on('mouseenter',()=>{
            console.log('entered')
            if(windowText == undefined){
                hoverState = $('<p id="hoverTalk">').text('I see...')
             hoverState.css({
                'color': 'purple',
                'font-size': '30px',
                'position':'fixed',
                'left': '45%',
                'animation': 'sparkle 1s infinite',
                //'background-color': 'gray'
            })
            $('#childContainer').append(hoverState);
            }});
             //handles the logic of clicking on the button to get a fortune
             $('#boredButton').on('click', () => {
                    //this removes the "I see.." when the fortune is shown
                     hoverState.empty()
                     //set a variable to the activity we got from theBoredAPI
                     let activity = data.activity;
                     //create an HTML div to display the fortune and set its text
                     windowText = $('<p id="fortune">').text('You Will ' + activity);
                     //dynamically changing the css for the fortune. It doesnt need to be dynamic it just is.
                     windowText.css({
                         'color': 'purple',
                         'position':'fixed',
                         'left': '40%',
                         'animation': 'sparkle 1s infinite',
                         'background-color': 'gray'
                     });
                     //append the fortune to the container with the fortune teller image.
                     $('#childContainer').append(windowText);
                 });
})
            //function for clicking the wizard and lifting the curtain 
            $('#wizardGuy').on('click', function() {
                console.log('dont click me!')
                //change wizards text to defeated 
                $('#wizardTalk').text('Thwarted again! I need to go back to wizard college')
                //fades curtain/wizard
                $('#curtainCover').addClass('sparkleAndHinge');
            });
        });  
    //invoking wizards text change functions one after another 


        setTimeout(()=>{wizardTalk6()}, 5000)
        setTimeout(()=>{wizardTalk1()}, 7000)
        setTimeout(()=>{wizardTalk2()}, 9000)
        setTimeout(()=>{wizardTalk3()}, 11000)
        setTimeout(()=>{wizardTalk4()}, 13000)
        setTimeout(()=>{wizardTalk5()}, 15000)
            



    //wizards text changes
function wizardTalk1(){
    $('#wizardTalk').text('YOU CANNOT POSSIBLY MATCH MY POWER')
}
function wizardTalk2(){
    $('#wizardTalk').text('I HAVE CREATED SPELLS THAT ARE BANNED')
}
function wizardTalk3(){
    $('#wizardTalk').text('SPELL LIKE BYPASS PAYWALL!!!!')
}
function wizardTalk4(){
    $('#wizardTalk').text('now if i could figure out a different material component other than gold coins...')
}
function wizardTalk5(){
    $('#wizardTalk').text('Either way, I cannot let you in to see the fortune teller')
}
function wizardTalk6(){
    $('#wizardTalk').text('Leave here and do not look back')
}




