function onSubmit() {
  var form = FormApp.getActiveForm();
  var date = new Date(-60-60*24*30);

 var formResponses = form.getResponses(date);

 /* for (var i = 0; i < formResponses.length; i++) {
  }*/

   var formResponse = formResponses[formResponses.length-1];
   var itemResponses = formResponse.getItemResponses();

  MailApp.sendEmail("yourmail@gmail.com", "someemailtoresponce@gmail.com",
                    "Subject",
                    " NEw Response: "+itemResponses[0].getItem().getTitle()+": "+itemResponses[0].getResponse()
                      +"     / "+itemResponses[1].getItem().getTitle()+": "+itemResponses[1].getResponse()
                      +"    /    "+itemResponses[2].getItem().getTitle()+": "+itemResponses[2].getResponse()
                      +"    /     "+itemResponses[3].getItem().getTitle()+": "+itemResponses[3].getResponse()
                      + ' Response in month: '+formResponses.length
                     );
 
}
