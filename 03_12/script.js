/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class MobilePhone {
    constructor(brand, model, storage, color, batteryLevel) {
      this.brand = brand;
      this.model = model;
      this.storage = storage; //in GB
      this.color = color;
      this.batteryLevel = batteryLevel; // %
      this.isPowerOn = false; //default power off
    }
  
    //Method to power on the phone
    powerOn() {
      if (this.isPowerOn) {
        console.log(`${this.model} is already powered on.`);
      } else {
        this.isPowerOn = true;
        console.log(`${this.model} is now power on.`);
      }
    }
  
    // Method to power off the phone
    powerOff() {
      if (!this.isPoweredOn) {
        console.log(`${this.model} is already powered off.`);
      } else {
        this.isPoweredOn = false;
        console.log(`${this.model} is now powered off.`);
      }
    }
  
    // Method to charge the phone
    chargePhone(amount) {
      this.batteryLevel += amount;
      if (this.batteryLevel > 100) {
        this.batteryLevel = 100;
      }
      console.log(`${this.model} is now charged to ${this.batteryLevel}%.`);
    }
  }
  
  //Creating a new MobilePhone object
  const myPhone = new MobilePhone("Samsung", "S21", 128, "Black", 80);
  
  //testing the methods
  myPhone.powerOn();
  myPhone.chargePhone(10);
  
  console.log(myPhone);
  