//This function is used by FilterHeader.jsx file
export default function getValidDateFormat(startDate, endDate) {
    let computedStartDate, computedEndDate;

    if (startDate == null) {
        computedStartDate = null;
        computedEndDate = null;
        return "";
    }
    else if (startDate && endDate == null) {
        const d = new Date();
        endDate=d;
    }
    computedStartDate=computedDate(startDate),
    computedEndDate=computedDate(endDate)
    return [computedStartDate,computedEndDate]
}

function computedDate(incomingdate) {
    // Parse the date string to create a Date object
    const date = new Date(incomingdate);

    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(date.getDate()).padStart(2, '0');

    // Format as "Year-Month-Date"
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate; // Output: "2024-10-30"
}

//convert YYYY-MM-DD (like 2024-02-20) to DD Month, YYYY (like 20 February, 2024) and currently this function is used by ProductDiscoveryResults.jsx file
export function convertDateFormat(dateString){
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}