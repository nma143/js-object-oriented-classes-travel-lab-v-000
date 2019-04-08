class Driver
{
  constructor(name, startDate)
  {
    this.name = name;
    this.startDate = startDate;
  }

  startDate()
  {
    this.startDate = Date.parse(this.startDate);
  }

}
