Build Brite
=================

Build Brite  is an arduino hack built on top of my repo build status code. It uses a tri-color LED and an Arduino to create a physical indicator that shines green when your project on GitHub is building, red when it is not, and blue when it is pending. You can use this to monitor a shared repository among a team so you don't have to stay right on top of emails to monitor for problems.  


##Dependencies
Build Brite is built in Node.js. You will need [Node.js](http://nodejs.org/ "download node.js") and [npm](https://npmjs.org "download npm")
then run "npm install" in order to install [octonode](https://github.com/pksunkara/octonode  "octonode repository"), and [johnny-five](https://github.com/rwaldron/johnny-five "Johnny-five repository").

You also need an Arduino! Any arduino will do, as long as it can load [Firmata](http://firmata.org/wiki/Main_Page "learn about Firmata").

A USB cable to attach your Arduino to your machine. 

Lastly, a [tri-color LED](https://www.sparkfun.com/products/10820). I got mine at Radio Shack for $1.79

###Optional
You may want to buy a breadboard and some resistors to make your end product less of a hack. The purpose of not doing so was to show how little you need to get started. 


##Hardware Setup

![example](http://i.imgur.com/lyPdWgE.jpg)
For instructions on doing this with a breadboard go [here](http://www.instructables.com/id/Fading-RGB-LED-Arduino/ "breadboard instructions")

Your LED should have four prongs. Those are diodes. The longest one is your anode(you may have a common cathode instead of an anode), and the other three are cathodes. Your anode will receive power, and ditribute it to your cathodes. You need to put the three cathodes in three pins on the arduino. Make sure they are pins that have pulse-width modulation. Pulse-width modulation means that varying amounts of power will be provided to your LED and that is what is needed to mix light colors into the color you are looking for. 

After you insert your cathodes (usually pins 9, 10, and 11 on arduino) you need to get power to your anode. In the photo above I used a wire attached to the anode on the LED to do so. Put the wire in the 5v pin. 

Lastly, hook the USB up to your arduino, and then to your computer. 

You're ready to go! Time to move onto the software part.  


##Software setup
In order to authenticate to github, you need to create a token on your account, and replace the placeholder in Build Brite. It's important to authenticate as you need to be someone with push access to a repo to get its build status. Then, replace the placeholder text for your user name and the repository name. 


That's it! You're ready to go!

Please fork and customize for your environment, OR, make it your own by adding components and sending a pull request. 


________________________________________________________________



This repository is dedicated to [Jessica Lord](https://github.com/jlord) for her hard and amazing work documenting [Sheetsee.js](https://github.com/jlord/sheetsee.js).
