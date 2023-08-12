module.exports = (savedForm) => {
  const cleaningStatus = savedForm.Cleaning ? "Requested" : "Not-Requested";
  const technicianStatus = savedForm.Technician ? "Requested" : "Not-Requested";
  const soundStatus = savedForm.Sound ? "Requested" : "Not-Requested";

  const startDate = new Date(savedForm.startDate).toDateString();
  const endDate = new Date(savedForm.endDate).toDateString();

  return `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        h2 {
          color: #007BFF;
          text-decoration: underline;
          margin-bottom: 20px
        }
        p {
          font-size: 16px;
          line-height: 1.5;
          color: #000000
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          font-size: 16px;
          margin-bottom: 10px;
          color: #000000
        }
        strong {
          font-weight: bold;
        }
        .highlight {
          background-color: #f9f9f9;
          padding: 5px;
          border-radius: 5px;
        }
        .problem {
          color: #FF0000;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Form Submission Confirmation</h2>
        <p>Hello, your form has been successfully submitted.</p>
        <p>Your reservation for <strong>${savedForm.resourceName}</strong> with Form ID: <strong>${savedForm.formID}</strong> has been reserved from <strong>${startDate}</strong> to <strong>${endDate}</strong> and has been submitted.</p>
        <p>Other details regarding the request:</p>
        <ul>
          <li><strong>Cleaning:</strong> ${cleaningStatus}</li>
          <li><strong>Technician:</strong> ${technicianStatus}</li>
          <li><strong>Sound:</strong> ${soundStatus}</li>
        </ul>
        <p class="problem">If you have any queries regarding this email, please contact us at <a href="mailto:resourcemsg@gmail.com">resourcemsg@gmail.com</a>.</p>
        <p>Sign off,</p>
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/XSXqWYT/smitlogo.png" alt="smitlogo" border="0" style="max-width: 100%; height: auto;"></a>
      </div>
    </body>
    </html>
  `;
};
