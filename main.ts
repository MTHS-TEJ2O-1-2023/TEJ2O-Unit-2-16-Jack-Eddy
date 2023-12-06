/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Dec 2023
 * This program sends a signal to another microbit if it gets too close to an object
*/

// setup
radio.setGroup(69)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// show recieved string
radio.onReceivedString(function (receivedString) {
  basic.clearScreen()
  basic.showString(receivedString)
  basic.showIcon(IconNames.Happy)
})
