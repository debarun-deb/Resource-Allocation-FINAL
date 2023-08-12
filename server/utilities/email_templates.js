module.exports = (savedForm , imageUrl) => {
  return `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f0f0f0;
          padding: 20px;
        }
        h2 {
          color: #007BFF;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 8px;
        }
        strong {
          font-weight: bold;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <h2>Form Submission Confirmation</h2>
      <p>Hello, your form has been successfully submitted.</p>
      <ul>
        <li><strong>Form ID:</strong> ${savedForm.formID}</li>
        <li><strong>Resource Name:</strong> ${savedForm.resourceName}</li>
        <li><strong>Event Name:</strong> ${savedForm.eventName}</li>
        <li><strong>Event Details:</strong> ${savedForm.eventDetails}</li>
        <li><strong>Approved Time:</strong> ${savedForm.approvedTime}</li>
        <li><strong>Phone Number:</strong> ${savedForm.phoneNumber}</li>
        <li><strong>Start Date:</strong> ${savedForm.startDate}</li>
        <li><strong>End Date:</strong> ${savedForm.endDate}</li>
        <li><strong>Technician:</strong> ${savedForm.Technician}</li>
        <li><strong>Cleaning:</strong> ${savedForm.Cleaning}</li>
        <li><strong>Sound:</strong> ${savedForm.Sound}</li>
        <li><strong>Status:</strong> ${savedForm.isSubmitted}</li>
      </ul>
      <img src="data:image/png;base64,${imageUrl}" alt="SMIT LOGO" style="max-width: auto; height: auto;">
    </body>
    </html>
  `;
};
