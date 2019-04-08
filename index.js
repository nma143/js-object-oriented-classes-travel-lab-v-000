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

    let numVerticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let numHorizontalBlocks = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return numVerticalBlocks + numHorizontalBlocks;
  }

  estimatedTime(peak)
  {
    if (peak)
    {
      return this.blocksTravelled/3;
    }
    else
    {
      return this.blocksTravelled/2;
    }
  }


}
