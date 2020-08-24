console.log('helsslo');
window.addEventListener('message', receiveMessage.bind(this), false);

//callback to execute on recieving messages from iframe
async function receiveMessage(event) {
  console.log('********Logging event details', event, event.data);
//   if (event.data === 'message_post') {
//     console.log('a message posted with message message_post');
//   }
  if (event.data.id == 3) {
    console.log('logging event now');
    console.log(event.data);
  }
}