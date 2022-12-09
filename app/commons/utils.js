const STARTING_UII_KEY = "A000";
export function to2Decimals(value) {
  return (Math.round(value * 100) / 100).toFixed(2);
}
export function generateUIDD() {
  return (
    STARTING_UII_KEY + Math.random().toString(30).substring(6).toUpperCase()
  );
}
