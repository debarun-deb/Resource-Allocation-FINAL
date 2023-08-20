const ccf = "https://i.ibb.co/VQ9MPB8/ccf.jpg";
const mphall = "https://i.ibb.co/xhCDXQf/Multipurpose-Hall.jpg";
const sh = "https://i.ibb.co/1mZ2FcQ/Seminar-hall.jpg";

module.exports = (updateForm) => {
  const cleaningStatus = savedForm.Cleaning ? "Requested" : "Not-Requested";
  const technicianStatus = savedForm.Technician ? "Requested" : "Not-Requested";
  const soundStatus = savedForm.Sound ? "Requested" : "Not-Requested";

  let imgPath = mphall;
  if (savedForm.resourceName === "Seminar Hall") {
    imgPath = sh;
  } else if (savedForm.resourceName === "Multipurpose Hall") {
    imgPath = mphall;
  } else if (savedForm.resourceName === "Central Computing Facility") {
    imgPath = ccf;
  }

  const startDate = new Date(savedForm.startDate).toDateString();
  const endDate = new Date(savedForm.endDate).toDateString();

  return `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 620px) {
    .u-row {
      width: 600px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-50 {
      width: 300px !important;
    }
  
    .u-row .u-col-100 {
      width: 600px !important;
    }
  
  }
  
  @media (max-width: 620px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: 100% !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  table,
  tr,
  td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_1 .v-container-padding-padding { padding: 24px 10px 320px !important; } #u_content_heading_1 .v-font-size { font-size: 40px !important; } #u_content_heading_1 .v-line-height { line-height: 110% !important; } #u_content_text_1 .v-text-align { text-align: justify !important; } #u_row_10 .v-row-columns-background-color-background-color { background-color: #f9fcfd !important; } #u_content_heading_9 .v-container-padding-padding { padding: 20px 10px 0px !important; } #u_content_heading_9 .v-text-align { text-align: center !important; } #u_content_heading_10 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_10 .v-text-align { text-align: center !important; } #u_content_text_9 .v-container-padding-padding { padding: 5px 10px 15px !important; } #u_content_text_9 .v-text-align { text-align: center !important; } #u_content_heading_12 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_12 .v-text-align { text-align: center !important; } #u_content_text_11 .v-container-padding-padding { padding: 5px 10px 15px !important; } #u_content_text_11 .v-text-align { text-align: center !important; } #u_content_heading_13 .v-container-padding-padding { padding: 10px 10px 0px !important; } #u_content_heading_13 .v-text-align { text-align: center !important; } #u_content_text_12 .v-container-padding-padding { padding: 5px 10px 15px !important; } #u_content_text_12 .v-text-align { text-align: center !important; } #u_content_heading_14 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_14 .v-text-align { text-align: center !important; } #u_content_heading_4 .v-container-padding-padding { padding: 40px 10px 0px !important; } #u_content_heading_4 .v-text-align { text-align: center !important; } #u_content_text_14 .v-container-padding-padding { padding: 5px 10px 15px !important; } #u_content_text_14 .v-text-align { text-align: center !important; } #u_content_heading_6 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_6 .v-text-align { text-align: center !important; } #u_content_text_19 .v-container-padding-padding { padding: 5px 10px 15px !important; } #u_content_text_19 .v-text-align { text-align: center !important; } #u_content_heading_15 .v-container-padding-padding { padding: 0px 10px !important; } #u_content_heading_15 .v-text-align { text-align: center !important; } #u_content_text_15 .v-container-padding-padding { padding: 5px 10px 15px !important; } #u_content_text_15 .v-text-align { text-align: center !important; } #u_content_button_1 .v-size-width { width: auto !important; } }
      </style>
    
    
  
  <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
      
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent;">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;break-word;word-break: break-word;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-color: #00a6c0;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
      <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="https://cdn.templates.unlayer.com/assets/1637641020328-121.png" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1637641020328-121.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image: url('${imgPath}');background-repeat: no-repeat;background-position: center top;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-image: url('images/image-5.png');background-repeat: no-repeat;background-position: center top;background-color: #00a6c0;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_heading_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;height:90px;padding:36px 10px 150px;font-family:arial,helvetica,sans-serif;" align="left">
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
      <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->
      
  
  
    
    
      <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="https://cdn.templates.unlayer.com/assets/1637647544348-ffffffffff.png" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1637647544348-ffffffffff.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->
    
  <div class="u-row-container" style="padding: 0px;background-image: url('images/image-3.png');background-repeat: no-repeat;background-position: center top;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-break: break-word;background-color: #fbfdff;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-image: url('images/image-3.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-color: #fbfdff;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 35px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #4b4949; line-height: 150%; text-align: justify; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 150%;"><span style="font-size: 16px; line-height: 24px; font-family: Rubik, sans-serif;">Your request has been ${savedForm.status} </span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
      <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->
      
  
  
    
    
      <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="https://cdn.templates.unlayer.com/assets/1637648770599-ffffffffff.png" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1637648770599-ffffffffff.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->
    
  <div id="u_row_10" class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ecf0f1;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image: url('images/image-4.png');background-repeat: no-repeat;background-position: left top;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-image: url('images/image-4.png');background-repeat: no-repeat;background-position: left top;background-color: #ecf0f1;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="300" style="width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_heading_9" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h4 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 26px; font-weight: 400;">${savedForm.resourceName}</h4>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_heading_10" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">Event Details</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_9" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: 'courier new', courier; font-size: 15px; line-height: 25.2px;">${savedForm.eventDetails}</span></strong></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="297" style="width: 297px;padding: 0px;border-top: 0px solid transparent;border-left: 3px solid #d8edfd;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 3px solid #d8edfd;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_heading_12" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">Start Date:</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_11" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;">${startDate}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_heading_13" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">End Date</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_12" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="line-height: 140%;">${endDate}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>

    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
      <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->
      
  
  
    
    
      <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="%20" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="%20" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d0eeff;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image: url('%20');background-repeat: no-repeat;background-position: center top;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-image: url('%20');background-repeat: no-repeat;background-position: center top;background-color: #d0eeff;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 3px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #000000; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 26px; font-weight: 400;">Form ID:</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 23px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #000000; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong><span style="font-family: 'courier new', courier; line-height: 28px; font-size: 20px;">${savedForm.formID}</span></strong></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
      <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->
      
  
  
    
    
      <!--[if gte mso 9]>
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;">
          <tr>
            <td background="https://cdn.templates.unlayer.com/assets/1637647522258-ffffffffff.png" valign="top" width="100%">
        <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
          <v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1637647522258-ffffffffff.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
        <![endif]-->
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f9fcfd;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-image: url('images/image-2.png');background-repeat: no-repeat;background-position: center top;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-image: url('images/image-2.png');background-repeat: no-repeat;background-position: center top;background-color: #f9fcfd;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_heading_4" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">Phone Number:</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_14" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-family: 'courier new', courier; font-size: 18px; line-height: 25.2px;">${savedForm.phoneNumber}</span></strong></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_heading_6" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">Cleaning:</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_19" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;">${cleaningStatus}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  

  <table id="u_content_heading_6" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">Technician</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_19" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;">${technicianStatus}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_heading_15" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 0px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 class="v-text-align v-line-height v-font-size" style="margin: 0px; color: #34495e; line-height: 140%; text-align: left; word-wrap: break-word; font-family: 'Rubik',sans-serif; font-size: 21px; font-weight: 400;">Sound:</h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_15" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 15px 50px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;">${soundStatus}</p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
      <!--[if gte mso 9]>
        </v:textbox></v:rect>
      </td>
      </tr>
      </table>
      <![endif]-->
      
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #fbfdff;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-color: #fbfdff;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:50px 10px 60px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
  <div class="v-text-align" align="center">
    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:resourcemsg@gmail.com" style="height:65px; v-text-anchor:middle; width:342px;" arcsize="3%"  stroke="f" fillcolor="#3aaee0"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
      <a href="mailto:resourcemsg@gmail.com" target="_blank" class="v-button v-size-width v-font-size" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #3aaee0; border-radius: 2px;-webkit-border-radius: 2px; -moz-border-radius: 2px; width:59%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
        <span class="v-line-height" style="display:block;padding:21px 25px 20px;line-height:120%;"><span style="font-size: 20px; line-height: 24px; font-family: Rubik, sans-serif;"><span style="line-height: 24px; font-size: 20px;">Contact Us</span></span></span>
      </a>
      <!--[if mso]></center></v:roundrect><![endif]-->
  </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
        
        <img align="center" border="0" src="images/image-1.jpeg" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 580px;" width="580"/>
        
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
    
    
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row v-row-columns-background-color-background-color" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #000000;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr class="v-row-columns-background-color-background-color" style="background-color: #000000;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="88%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 50px 30px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div class="v-text-align v-line-height v-font-size" style="font-size: 14px; color: #ecf0f1; line-height: 200%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 200%;"><span style="font-family: Rubik, sans-serif; font-size: 14px; line-height: 28px;">If you have questions regarding your data, please leave us an email at resourcemsg@gmail.com.</span></p>
  <p style="font-size: 14px; line-height: 200%;"> </p>
  <p style="font-size: 14px; line-height: 200%;"><span style="font-family: Rubik, sans-serif; font-size: 14px; line-height: 28px;"> </span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    </div>
    
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
  
  `;
};
