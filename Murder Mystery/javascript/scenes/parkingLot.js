function parkingLotActions(action, state) {
    var newState = state;
    switch (action) {
        case 'RIL':
            newState = Object.assign(newState, {
                dialog: 'You decide to remain in the parking lot. Hey, nothing bad can ever happen in a Parking Lot!',
                choices: ['Enter the Office', 'Remain in parking lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL2'],
            });


            break;
        case 'RIL2':
            newState = Object.assign(newState, {
                dialog: 'You continue to wait in the parking lot. Your mind drifts as you think about the bad things that could potentially happen in the lot.',
                choices: ['Enter the Office', 'Remain in Parking Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL3'],
            });


            break;
    }
    switch (action) {
        case 'RIL3':
            newState = Object.assign(newState, {
                dialog: 'You realise the immense doom you yourself are in for continuing to wait in the dreaded parking lot. Perhaps its time to enter the office building.',
                choices: ['Enter the office', 'Remain in the Lot Of Doom'],
                actions: ['officelot.ETO', 'parkingLot.RIL4'],
            });


            break;
    }
    switch (action) {
        case 'RIL4':
            newState = Object.assign(newState, {
                dialog: 'People are beginning to notice you. You\'ve been down here for 4 hours now. Perhaps you should head up to the office.',
                choices: ['Enter the Office', 'Remain in your newfound concrete abode'],
                actions: ['officelot.ETO', 'parkingLot.RIL5'],
            });


            break;
    }
    switch (action) {
        case 'RIL5':
            newState = Object.assign(newState, {
                dialog: 'The Concrete welcomes you. It\'s been a good 6 hours now. Concrete is warm. And happy.',
                choices: ['Enter the office', 'Remain in the Parking Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL6'],
            });


            break;
    }

    switch (action) {
        case 'RIL6':
            newState = Object.assign(newState, {
                dialog: 'You are one with the concrete. The narrator is getting bored with this. Perhaps you should enter the building.',
                choices: ['Enter the office', 'Remain in the Parking Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL7'],
            });


            break;
    }
    switch (action) {
        case 'RIL7':
            newState = Object.assign(newState, {
                dialog: 'The Parking Lot is nice. The Parking lot is good. People have tried to remove you from the lot. Those people aren\'t here anymore.',
                choices: ['Enter the office', 'Remain in the Parking Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL8'],
            });


            break;
    }
    switch (action) {
        case 'RIL8':
            newState = Object.assign(newState, {
                dialog: 'The concept of Time has vanished from your mind. You have ascended due to this parking lot. It blesses you for your stay. Perhaps you should enter the office now. Please.',
                choices: ['Enter the office', 'Remain in the Parking Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL9'],
            });


            break;
    }
    switch (action) {
        case 'RIL9':
            newState = Object.assign(newState, {
                dialog: 'The Parking Lot is your new friend. You have shared many good memories with it. Especially that time when you spent an ENTIRE MINUTE not entering the office building and instead staying in the Lot. Perhaps you should enter the Office now. What more is there in this lot?',
                choices: ['Enter the Office', 'Remain in the Parking Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL10'],
            });


            break;
    }
    switch (action) {
        case 'RIL10':
            newState = Object.assign(newState, {
                dialog: 'You know that the game only advances if you enter the building, right? Please enter the building. This choice Lost its charm after the first 5 turns.',
                choices: ['Remain in the parking lot', 'Enter the office'],
                actions: ['parkingLot.RIL11', 'officelot.ETO'],
            });


            break;
    }
    switch (action) {
        case 'RIL11':
            newState = Object.assign(newState, {
                dialog: 'Dang. I thought that would work. This is your last chance to enter the building peacefully. After that, I will have to intervine with my Narrator powers.',
                choices: ['Enter the Office', 'Remain in the Lot'],
                actions: ['officelot.ETO', 'parkingLot.RIL12'],
            });


            break;
    }
    switch (action) {
        case 'RIL12':
            newState = Object.assign(newState, {
                dialog: 'Ok, fine. You want to stay with your lot? FINE. Do whatever I dont care. Its your time you\'re wasting. When you\'re ready hit the button.',
                choices: ['Remain in the lot', 'Enter the office'],
                actions: ['parkingLot.RIL13', 'officelot.ETO'],
            });


            break;
    }
    switch (action) {
        case 'RIL13':
            newState = Object.assign(newState, {
                dialog: 'Congratu. freak\'in. Lations. This is a loop. Have fun. When you get bored just hit that convienient Enter office option.',
                choices: ['Remain in the lot for another few days. Has it been days? I couldn\'t tell you.', 'ENTER THE OFFICE'],
                actions: ['parkingLot.RIL13', 'officelot.ETOM'],
            });


    }
    return newState;
}

