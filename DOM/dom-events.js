const e1 = document.getElementById("event1");
const e2 = document.getElementById("event2");
const e3 = document.getElementById("event3");

e1.addEventListener('click', () => {
    alert("Event-1 was clicked");
})

e2.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Event-2 was clicked");
})

e3.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Event-3 was clicked");
})


// When elements receive events, such events propagate to their parents and ancestors upward in the DOM tree. This is the concept of Event Bubbling, and it allows parent elements to handle events that occur on their children's elements.