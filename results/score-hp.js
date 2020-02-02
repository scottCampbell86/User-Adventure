
function scoreMadness(madness) {
  if (madness <= 0) {
      return 'dead';
  }
  if (madness < 35) {
      return 'frail';
  }
  return 'healthy';
}

export default scoreMadness;