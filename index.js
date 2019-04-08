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

    let numAvenues = this.endingLocation.horizontal - this.beginningLocation.horizontal;
    let numStreets = blocksTravelled.findIndex(this.endingLocation.vertical) - blocksTravelled.findIndex(this.beginningLocation.vertical);
    return numAvenues + numStreets;


  }
}
