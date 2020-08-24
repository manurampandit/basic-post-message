console.log('helsslasdfaso');

function broadcastevent() {
    console.log('insidebroadcast event');
    // window.parent.postMessage('message_post', '*');
    const obj = {
        item: 'some message',
        id: 3,
        extra: 'a basic extra message'
    };
    window.parent.postMessage(obj, '*');
}