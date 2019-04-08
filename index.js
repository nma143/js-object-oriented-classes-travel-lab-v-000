class Driver
{
  constructor(name, startDate)
  {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year)
  {
      return year - this.startDate.getFullYear();
  }
}

class Route
{
  constructor(beginningLocation, endingLocation)
  {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled()
  {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    Console.log("Hey");
    let numAvenues = this.endingLocation.horizontal - this.beginningLocation.horizontal;
    Console.log(numAvenues);
    let numStreets = eastWest.findIndex(this.endingLocation.vertical) - eastWest.findIndex(this.beginningLocation.vertical);
    return numAvenues + numStreets;
  }
}
