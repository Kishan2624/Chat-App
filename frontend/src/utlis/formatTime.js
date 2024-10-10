// Function to format the time as "HH:mm"
const formatTime = (dateString) => {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM
  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? String(hours).padStart(2, "0") : "12"; // Ensure 12:00 is displayed as 12:00
  return `${hours}:${minutes} ${ampm}`; // Return formatted time
};

export default formatTime;
