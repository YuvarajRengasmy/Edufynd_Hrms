export const localDate = (data) => {
    const date = new Date(data).setUTCHours(0, 0, 0, 0);
    const localDate = new Date(date).toDateString();
    return localDate;
  };
  
  export const getMonthYear = (data) => {
    const date = new Date(data);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };
  
  export const timeCal = (date1) => {
    var date2 = new Date().getTime();
    date1 = new Date(date1).getTime();
    var res = Math.abs(date2 - date1) / 1000;
    var days = Math.floor(res / 86400);
    var hours = Math.floor(res / 3600) % 24;
    var minutes = Math.floor(res / 60) % 60;
    var seconds = Math.floor(res % 60);
    var diff = "";
    if (days > 0) {
      diff = days + " days ";
    }
    if (hours > 0) {
      diff = diff + hours + " hours ";
    }
    if (days === 0 && minutes > 0) {
      diff = diff + minutes + " min ";
    }
    if (hours === 0 && seconds > 0) {
      diff = diff + seconds + " sec ";
    }
    return diff ? diff + "ago" : "recently";
  };
  export const timeCall = (date1) => {
    var date2 = new Date().getTime();
    date1 = new Date(date1).getTime();
    var res = Math.abs(date2 - date1) / 1000;
  
    var hours = Math.floor(res / 3600) % 24;
    var minutes = Math.floor(res / 60) % 60;
    var seconds = Math.floor(res % 60);
    var diff = "";
   
    if (hours > 0) {
      diff = diff + hours + " hours ";
    }
    if (minutes > 0) {
      diff = diff + minutes + " minutes ";
    }
  
    if (hours === 0 && seconds > 0) {
      diff = diff + seconds + " sec ";
    }
    return diff ? diff + "ago" : "recently";
  };
  export const formatDate = (data) => {
    const date = new Date(data);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  export const formatYear = (data) => {
    const date = new Date(data);
   
    const year = date.getFullYear();
    return `${year}`;
  };

  export const workingHours = (data) => {
    // Convert milliseconds to seconds
    const seconds = data / 1000;
  
    // Calculate hours and minutes
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
  
    // Build the output string
    let diff = '';
  
    if (hours > 0) {
      diff += `${hours} hours `;
    }
  
    if (minutes > 0 || hours > 0) { // Include minutes if there's an hour or more
      diff += `${minutes} minutes `;
    }
  
    return diff ? diff.trim() : '0 minutes'; // Return '0 minutes' if there's no difference
  };
  
  // Example usage:
  
  export const formatYears = (data) => {
    const date = new Date(data);
    return date.toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

export const formatDated = (data) => {
  const date = new Date(data);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};