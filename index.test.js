const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times that is round - 2:00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it("Handles second half of 12 o'clock - 12:40", () => {
    const timeInWords = convertTimeToWords('12:40');
    expect(timeInWords).toBe('twenty to one');
  });
});
