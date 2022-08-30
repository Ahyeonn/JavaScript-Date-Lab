const bday = new Date('9/26/1965') // get your birthday
const now = new Date()    // get todays date
const diff = now - bday   // calculate the difference in ms
const secs = diff / 1000  // get the seconds
const mins = secs / 60    // get minutes
const hrs = mins / 60     // get hours
const days = hrs / 24     // get days
const yrs = days / 365.25 // get years
console.log('Seconds:', secs)
console.log('Minutes:', mins)
console.log('Hours:', hrs)
console.log('days:', days)
console.log('Years:', yrs)

const n = Date.parse('9/26/1965') // calling the parse method on class Date while
// the above function is making a new instance and can call any methods

class MyClass {
    constructor() {
        this.tastycenter = 'something good'
    }
}
new MyClass() 