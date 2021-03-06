const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New timers, tasks, operations are recorded from myFile running
myFile.runContent()

function shouldContinue() {
    // Check one: Any pending setTimeout, setInterval, setImmediate?
    // Check two: Any pending OS tasks ? (Like server listening to port)
    // Check three: Any pending long running operations? (Like fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
    // Node looks at pendingTimers and sees if any functions are ready to be
    // called
}
