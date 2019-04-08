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

    let numVerticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;

    let numHorizontalBlocks = eastWest.findIndex(this.endingLocation.horizontal) - eastWest.findIndex( this.beginningLocation.horizontal );
    return numAvenues + numHorizontalBlocks;
  }
}
