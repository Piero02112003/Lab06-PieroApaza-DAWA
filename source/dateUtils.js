function daysUntilChristmas() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // 11 es diciembre
    if (today.getMonth() == 11 && today.getDate() > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const oneDay = 1000 * 60 * 60 * 24; // Milisegundos en un día
    return Math.ceil((christmas.getTime() - today.getTime()) / oneDay);
  }
  
  function calculateAge(birthday) {
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  module.exports = {
    daysUntilChristmas,
    calculateAge,
  };
  