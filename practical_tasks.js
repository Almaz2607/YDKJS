// ----compare------------------------------
const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
    var [, meetingStartHour, meetingStartMinutes] =
        startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

    durationMinutes = Number(durationMinutes);

    if (
        typeof meetingStartHour == 'string' &&
        typeof meetingStartMinutes == 'string'
    ) {
        let durationHours = Math.floor(durationMinutes / 60);
        durationMinutes = durationMinutes - durationHours * 60;

        let meetingEndHour = Number(meetingStartHour) + durationHours;
        let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

        if (meetingEndMinutes > 60) {
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes = meetingEndMinutes - 60;
        }

        // generate fully qualified time strings (to simplify comparison)
        let meetingStart = `${meetingStartHour.padStart(
            2,
            '0'
        )}:${meetingStartMinutes.padStart(2, '0')}`;
        let meetingEnd = `${String(meetingEndHour).padStart(2, '0')}:${String(
            meetingEndMinutes
        ).padStart(2, '0')}`;

        return meetingStart >= dayStart && meetingEnd <= dayEnd;
    }

    return false;
}

console.log(scheduleMeeting('7:00', 15)); // false
console.log(scheduleMeeting('07:15', 30)); // false
console.log(scheduleMeeting('7:30', 30)); // true
console.log(scheduleMeeting('11:30', 60)); // true
console.log(scheduleMeeting('17:00', 45)); // true
console.log(scheduleMeeting('17:30', 30)); // false
console.log(scheduleMeeting('18:00', 15)); // false

// ----clousers------------------------------------
function range(start, end) {
    start = Number(start) || 0;

    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end);
        };
    } else {
        end = Number(end) || 0;
        return getRange(start, end);
    }

    function getRange(start, end) {
        var init = [];
        for (let i = start; i <= end; i++) {
            init.push(i);
        }
        return init;
    }
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []

console.log(start4(6)); // [4,5,6]

// ----prototype-----------------------------------
function randMax(max) {
    return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
    symbols: ['X', 'Y', 'Z', 'W', '$', '*', '<', '@'],

    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        this.position =
            (this.position + 100 + randMax(100)) % this.symbols.length;
    },

    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    },
};

var slotMachine = {
    reels: [Object.create(reel), Object.create(reel), Object.create(reel)],

    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },

    display() {
        var lines = [];
        // display all 3 lines on the slot machine
        for (let linePos = -1; linePos <= 1; linePos++) {
            let line = this.reels.map(function getSlot(reel) {
                var slot = Object.create(reel);

                slot.position =
                    (reel.symbols.length + reel.position + linePos) %
                    reel.symbols.length;

                return reel.display.call(slot);
            });
            lines.push(line.join(' | '));
        }
        return lines.join('\n');
    },
};

slotMachine.spin();
console.log(slotMachine.display());
// < | @ | *
// @ | X | <
// X | Y | @
slotMachine.spin();
console.log(slotMachine.display());
// Z | X | W
// W | Y | $
// $ | Z | *
