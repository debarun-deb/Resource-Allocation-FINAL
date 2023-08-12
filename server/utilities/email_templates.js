// emailTemplates.js

module.exports = (savedForm) => {
  return `
  <!DOCTYPE html>
  <html xml:lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <!--yahoo fix-->
  
  </head>
  
  <head>
    <!--Help character display properly.-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!--Set the initial scale of the email.-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Force Outlook clients to render with a better MS engine.-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--Help prevent blue links and autolinking-->
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <!--prevent Apple from reformatting and zooming messages.-->
    <meta name="x-apple-disable-message-reformatting">
  
    <!--target dark mode-->
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
  
  
    <!-- Allow for better image rendering on Windows hi-DPI displays. -->
    <!--[if mso]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
  
    <!--to support dark mode meta tags-->
    <style type="text/css">
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }
    </style>
  
    <style type="text/css">
      .body-fix {
        height: 100% !important;
        margin: 0 auto !important;
        padding: 0 !important;
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
      }
  
      div[style*="margin:16px 0"] {
        margin: 0 !important;
      }
  
      table,
      td {
        border-collapse: collapse !important;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      img {
        border: 0;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        display: block;
      }
  
      p,
      h1,
      h2,
      h3 {
        padding: 0;
        margin: 0;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
  
      u+#body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
  
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
  
      a:hover {
        text-decoration: none !important;
      }
  
      .mobile {
        display: none;
      }
    </style>
  
    <!--mobile styles-->
    <style>
      @media screen and (max-width:600px) {
        .wMobile {
          width: 95% !important;
        }
  
        .wInner {
          width: 80% !important;
        }
  
        .desktop {
          width: 0 !important;
          display: none !important;
        }
  
        .mobile {
          display: block !important;
        }
      }
    </style>
  
    <!--dark mode styles-->
    <!--these are just example classes that can be used.-->
    <style>
      @media (prefers-color-scheme: dark) {
  
        /* Shows Dark Mode-Only Content, Like Images */
        .dark-img {
          display: block !important;
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          max-width: inherit !important;
          line-height: auto !important;
          margin-top: 0px !important;
          visibility: inherit !important;
        }
  
        /* Hides Light Mode-Only Content, Like Images */
        .light-img {
          display: none;
          display: none !important;
        }
  
        /* Custom Dark Mode Background Color */
        .darkmode {
          background-color: #100E11 !important;
        }
        .darkmode2 {
          background-color: #020203 !important;
        }
        .darkmode3 {
          background-color: #1b181d !important;
        }
  
        /* Custom Dark Mode Font Colors */
        h1, h3, p, span, a, ol, li {
          color: #fdfdfd !important;
        }
          h2, h2 a { color: #028383 !important; }
  
  
        /* Custom Dark Mode Text Link Color */
        .link { color: #028383 !important; }
        .footer a.link{ color: #fdfdfd !important; }
      }
  
      /* Copy dark mode styles for android support */
      /* Shows Dark Mode-Only Content, Like Images */
      [data-ogsc] .dark-img {
        display: block !important;
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        max-width: inherit !important;
        line-height: auto !important;
        margin-top: 0px !important;
        visibility: inherit !important;
      }
  
      /* Hides Light Mode-Only Content, Like Images */
      [data-ogsc] .light-img {
        display: none;
        display: none !important;
      }
  
      /* Custom Dark Mode Background Color */
      [data-ogsc] .darkmode {
        background-color: #100E11 !important;
      }
      [data-ogsc] .darkmode2 {
        background-color: #020203 !important;
      }
      [data-ogsc] .darkmode3 {
        background-color: #1b181d !important;
      }
  
      /* Custom Dark Mode Font Colors */
      [data-ogsc] h1, [data-ogsc] h3, [data-ogsc] p, [data-ogsc] span, [data-ogsc] a, [data-ogsc] li {
        color: #fdfdfd !important;
      }
        [data-ogsc] h2, [data-ogsc] h2 a { color: #028383 !important; }
  
      /* Custom Dark Mode Text Link Color */
      [data-ogsc] .link { color: #028383 !important; }
  
      [data-ogsc] .footer a.link { color: #fdfdfd !important; }
    </style>
  
    <!--correct superscripts in Outlook-->
    <!--[if (gte mso 9)|(IE)]>
          <style>
            sup{font-size:100% !important;}
          </style>
          <![endif]-->
    <title></title>
  </head>
  
  <body id="body" class="darkmode body body-fix">
      <div role="article" aria-roledescription="email" aria-label="Email from Resource-Allocation" xml:lang="en" lang="en">
  
          <!--hidden preheader with preh-header spacer hack-->
          <div class="example-builder-preview-text" style="display:none;font-size:0px;color:transparent;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;"><!--preview text-->&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
  
        <!--start of email-->
        <table class="darkmode" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">
            <!--main content area-->
            <tr>
                <td align="center" valign="top" style="padding: 0 15px;">
                    <table class="wMobile" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%;">
                          <!--header-->
                          <tr>
                              <td align="left" valign="middle" style="padding: 60px 5px 45px 5px;">
  
                                      <!--dark mode logo image-->
                                      <!--[if !mso]><! -->
                                      <div class="dark-img" style="display:none; overflow:hidden; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;">
                                        <img src="logo-dark.png" width="100" alt="Resource-Allocation" style="color: #ffffff; font-family: 'Trebuchet MS', Arial, sans-serif; font-weight:bold; font-size: 20px; line-height:40px; text-decoration: none; margin: 0; padding: 0;" border="0" />
                                      </div>
                                      <!--<![endif]--></a>
                              </td>
                          </tr>
  
  
                          <tr>
                              <td align="center" valign="top">
                                  <!--Greeting-->
                                  <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:16px; line-height:22px; color:#0a080b; margin: 0 0 30px; padding:0; text-align: left;">Your reservaton for ${savedForm.resourceName} for the time period: ${savedForm.startDate} to ${savedForm.endDate}, has been ${savedForm.isSubmitted} </p>
  
                                  <!--Message content-->
                                  <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:16px; line-height:22px; color:#0a080b; margin: 0 0 30px; padding:0; text-align: left;">Your form ID is <ran target="_blank" style="color: #028383; text-decoration: underline;"> ${savedForm.formID}.</ran><br><br>Other details regarding this request include:<br>
                                    Cleaning: ${savedForm.Cleaning}<br>
                                    Sound Technician: ${savedForm.Technician} <br>
                                    Sound Systems: ${savedForm.Sound} <br>
                                    <br><br>
                                  For any queries and issues please contact us at resourcemsg@outlook.com.
  
                                  <!--Message Sign off-->
                                  <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:16px; line-height:22px; color:#0a080b; margin: 0 0 30px; padding:0; text-align: left;">Sign off,</p>
                              </td>
                          </tr>
  
                          <!--Signature block-->
                          <tr>
                              <td align="left" valign="top">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tr>
                                          <!--headshot of person sending the email-->
                                          <td align="left" valign="middle" style="padding-right: 20px;">
                                              <img src="https://via.placeholder.com/50" alt="Your Headshot" width="50" height="50" style="color: #33373E; font-family: 'Trebuchet MS', Arial, sans-serif; font-weight:bold; font-size:14px; line-height:28px; text-decoration: none; margin: 0; padding: 0;" />
                                          </td>
                                          <!--Person the email is from-->
                                          <td align="left" valign="middle">
                                              <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:16px; line-height:20px; color:#0a080b; margin: 0; padding:0; text-align: left;">Resource-Allocation SMIT<br /></p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
  
                          <!--footer-->
                          <tr>
                              <td align="left" valign="top" style="padding-left: 5px;">
                                  <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:16px; line-height:20px; color:#0a080b; margin: 30px 0; padding:0; text-align: left;">----------</p>
                                  <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:13px; line-height:17px; color:#0a080b; margin: 0; padding:0; text-align: left;">
                                  <p style="font-family: 'Trebuchet MS', Arial, sans-serif; font-size:13px; line-height:17px; color:#0a080b; margin: 30px 0; padding:0; text-align: left;"></p>
                              </td>
                          </tr>
                     </table>
                  </td>
             </tr>
         </table>
     </div>
  
     <!--analytics-->
  </body>
  
  </html>
    `;
};

// emailTemplates.js
// module.exports = (savedForm) => {
//     return `
//       <html>
//       <body>
//         <h2>Form Submission Confirmation</h2>
//         <p>Hello, your form has been successfully submitted.</p>
//         <ul>
//           <li><strong>Form ID:</strong> ${savedForm.formID}</li>
//           <li><strong>Resource Name:</strong> ${savedForm.resourceName}</li>
//           <li><strong>Event Name:</strong> ${savedForm.eventName}</li>
//           <li><strong>Event Details:</strong> ${savedForm.eventDetails}</li>
//           <li><strong>Approved Time:</strong> ${savedForm.approvedTime}</li>
//           <li><strong>Phone Number:</strong> ${savedForm.phoneNumber}</li>
//           <li><strong>Start Date:</strong> ${savedForm.startDate}</li>
//           <li><strong>End Date:</strong> ${savedForm.endDate}</li>
//           <li><strong>Technician:</strong> ${savedForm.Technician}</li>
//           <li><strong>Cleaning:</strong> ${savedForm.Cleaning}</li>
//           <li><strong>Sound:</strong> ${savedForm.Sound}</li>
//           <li><strong>Status:</strong> ${savedForm.isSubmitted}</li>
//         </ul>
//       </body>
//       </html>
//     `;
//   };
