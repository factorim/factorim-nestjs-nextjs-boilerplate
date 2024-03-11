import { EmailType, Lang } from '@prisma/client'

export const emailTemplates = [
  {
    type: EmailType.DELETE_ACCOUNT,
    subject: 'Account deletion code',
    lang: Lang.en,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
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

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <a href="https://factorim.io" target="_blank">
      <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
      </a>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong>Here’s your security code:</strong></span></p>
<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Hi there,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a> Account. Please use the code above to validate your account deletion.</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Note: The code will expire in {{validation_expiration}} minutes, so please verify soon!</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Thank you,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>
<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
`,
    design: {
      body: {
        id: 'Yb5caniIP1',
        rows: [
          {
            id: '-aRf1NE3F4',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'xvOKr09qPd',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'Pq9W5LojwO',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '3-gQqOz5mG',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong>Here’s your security code:</strong></span></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'jrDEgcmzOX',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Hi there,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a> Account. Please use the code above to validate your account deletion.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Note: The code will expire in {{validation_expiration}} minutes, so please verify soon!</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'nNppkfEekd',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Thank you,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'W9I2SPPq_P',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 11,
    },
  },
  {
    type: EmailType.DELETE_ACCOUNT,
    subject: 'Code de suppression de compte',
    lang: Lang.fr,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
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

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <a href="https://factorim.io" target="_blank">
      <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
      </a>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre code de sécurité :</span></strong></p>
<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Bonjour,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a>. Veuillez utiliser le code ci-dessus pour valider la suppression de votre compte.</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Remarque : Le code expirera dans 15 minutes, veuillez donc le vérifier rapidement !</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Merci,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">L'équipe de Factorim</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>
<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank"><span style="font-size: 14px; line-height: 19.6px;">https://discord.gg/Tv3KVHfQMf</span></a></p>
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
`,
    design: {
      body: {
        id: 'Yb5caniIP1',
        rows: [
          {
            id: '-aRf1NE3F4',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'xvOKr09qPd',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'mM35rdcgAT',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '3-gQqOz5mG',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre code de sécurité :</span></strong></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'Xo3ZbnhmUx',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Bonjour,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a>. Veuillez utiliser le code ci-dessus pour valider la suppression de votre compte.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Remarque : Le code expirera dans 15 minutes, veuillez donc le vérifier rapidement !</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'yOnfbxNBmE',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Merci,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">L\'équipe de Factorim</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'B79yizPYah',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ=="><span style="font-size: 14px; line-height: 19.6px;">https://discord.gg/Tv3KVHfQMf</span></a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 11,
    },
  },
  {
    type: EmailType.CHANGE_EMAIL,
    subject: 'Email change code',
    lang: Lang.en,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
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

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <a href="https://factorim.io" target="_blank">
      <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
      </a>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong>Here’s your security code:</strong></span></p>
<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Hi there,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a> Account. Please use the code above to verify ownership of your email.</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Note: The code will expire in {{validation_expiration}} minutes, so please verify soon!</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Thank you,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>
<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
`,
    design: {
      body: {
        id: 'Yb5caniIP1',
        rows: [
          {
            id: '-aRf1NE3F4',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'xvOKr09qPd',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'zEt5uSdSHs',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '3-gQqOz5mG',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong>Here’s your security code:</strong></span></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '22ATGFKCGb',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Hi there,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a> Account. Please use the code above to verify ownership of your email.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Note: The code will expire in {{validation_expiration}} minutes, so please verify soon!</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'ycKavJZJ4-',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Thank you,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '8KjDnWlFW9',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 11,
    },
  },
  {
    type: EmailType.CHANGE_EMAIL,
    subject: "Code de changement d'email",
    lang: Lang.fr,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
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

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <a href="https://factorim.io" target="_blank">
      <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
      </a>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre code de sécurité :</span></strong></p>
<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Bonjour,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a>. Veuillez utiliser le code ci-dessus pour vérifier la propriété de votre email.</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Remarque : Le code expirera dans 15 minutes, veuillez donc le vérifier rapidement !</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Merci,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">L'équipe de Factorim</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>
<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
`,
    design: {
      body: {
        id: 'Yb5caniIP1',
        rows: [
          {
            id: '-aRf1NE3F4',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'xvOKr09qPd',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: '3LwG7LtyqN',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '3-gQqOz5mG',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre code de sécurité :</span></strong></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'Pj0RGUcabL',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Bonjour,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a>. Veuillez utiliser le code ci-dessus pour vérifier la propriété de votre email.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Remarque : Le code expirera dans 15 minutes, veuillez donc le vérifier rapidement !</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'KW5GswSf-e',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Merci,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">L\'équipe de Factorim</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'rHaEMRRhrg',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 11,
    },
  },
  {
    type: EmailType.RESET_PASSWORD,
    subject: 'Reset your password',
    lang: Lang.en,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
          @media only screen and (min-width: 520px) {
      .u-row {
        width: 500px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 500px !important;
      }
    
    }
    
    @media (max-width: 520px) {
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
    
    table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
        </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          <a href="https://factorim.io" target="_blank">
          <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
          </a>
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Here’s your security link:</span></strong></p>
    <p style="font-size: 14px; line-height: 140%;">{{validation_link}}</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;">Hi there,</p>
    <p style="font-size: 14px; line-height: 140%;"> </p>
    <p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a> Account. Please use the link above to reset your password.</p>
    <p style="font-size: 14px; line-height: 140%;"> </p>
    <p style="font-size: 14px; line-height: 140%;">Note: The link will expire in {{validation_expiration}} minutes, so please verify soon!</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;">Thank you,</p>
    <p style="font-size: 14px; line-height: 140%;"> </p>
    <p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
    `,
    design: {
      body: {
        id: 'Q7M_xrxQeG',
        rows: [
          {
            id: 'L_bEzz836W',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'RbUJhcWd4j',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'K_RQECQGzn',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '5sqvqyJNzU',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Here’s your security link:</span></strong></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_link}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                  {
                    id: 'DHmFOGQHn-',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Hi there,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a> Account. Please use the link above to reset your password.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Note: The link will expire in {{validation_expiration}} minutes, so please verify soon!</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                  {
                    id: 'Zm02V1gPUv',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Thank you,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                  {
                    id: 'IWS8bEdQZn',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
        footers: [],
        headers: [],
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 16,
    },
  },
  {
    type: EmailType.RESET_PASSWORD,
    subject: 'Réinitialisez votre mot de passe',
    lang: Lang.fr,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
          @media only screen and (min-width: 520px) {
      .u-row {
        width: 500px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 500px !important;
      }
    
    }
    
    @media (max-width: 520px) {
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
    
    table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
        </style>
      
      
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          <a href="https://factorim.io" target="_blank">
          <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
          </a>
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre lien de sécurité :</span></strong></p>
    <p style="font-size: 14px; line-height: 140%;">{{validation_link}}</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;">Bonjour,</p>
    <p style="font-size: 14px; line-height: 140%;"> </p>
    <p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a>. Veuillez utiliser le lien ci-dessus pour réinitialiser votre mot de passe.</p>
    <p style="font-size: 14px; line-height: 140%;"> </p>
    <p style="font-size: 14px; line-height: 140%;">Remarque : Le lien expirera dans {{validation_expiration}} minutes, veuillez donc le vérifier rapidement !</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%;">Merci,</p>
    <p style="font-size: 14px; line-height: 140%;"> </p>
    <p style="font-size: 14px; line-height: 140%;">L'équipe de Factorim</p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
    `,
    design: {
      body: {
        id: 'Q7M_xrxQeG',
        rows: [
          {
            id: 'L_bEzz836W',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'RbUJhcWd4j',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'UP3NwamwFx',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '5sqvqyJNzU',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre lien de sécurité :</span></strong></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_link}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                  {
                    id: 'FXYj3iiTN3',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Bonjour,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a>. Veuillez utiliser le lien ci-dessus pour réinitialiser votre mot de passe.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Remarque : Le lien expirera dans {{validation_expiration}} minutes, veuillez donc le vérifier rapidement !</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                  {
                    id: '8wAGX-LivC',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Merci,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">L\'équipe de Factorim</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                  {
                    id: 'Lz6o18S5ea',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      fontSize: '14px',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                    hasDeprecatedFontControls: true,
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
        footers: [],
        headers: [],
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 16,
    },
  },
  {
    type: EmailType.SIGN_UP,
    subject: 'Sign up confirmation code',
    lang: Lang.en,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
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

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <a href="https://factorim.io" target="_blank">
      <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
      </a>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong>Here’s your security code:</strong></span></p>
<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Hi there,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a> Account. Please use the code above to validate your account.</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Note: The code will expire in {{validation_expiration}} minutes, so please verify soon!</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Thank you,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>
<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
`,
    design: {
      body: {
        id: 'Yb5caniIP1',
        rows: [
          {
            id: '-aRf1NE3F4',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'xvOKr09qPd',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'OMPtpccHcl',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '3-gQqOz5mG',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 20px; line-height: 28px;"><strong>Here’s your security code:</strong></span></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'oyw_wXoAsi',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Hi there,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">We’ve received a security request from your <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a> Account. Please use the code above to validate your account.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Note: The code will expire in {{validation_expiration}} minutes, so please verify soon!</p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'M0TiWNi754',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Thank you,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">The Factorim Team</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'Ocnsg25B8m',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Problems or questions?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_3',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 4,
        u_content_image: 1,
      },
      schemaVersion: 11,
    },
  },
  {
    type: EmailType.SIGN_UP,
    subject: "Code de confirmation d'inscription",
    lang: Lang.fr,
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
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

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      <a href="https://factorim.io" target="_blank">
      <img align="center" border="0" src="https://factorim.io/images/logos/factorim-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 238px;" width="238"/>
      </a>
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre code de sécurité :</span></strong></p>
<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Bonjour,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank">factorim.io</a>. Veuillez utiliser le code ci-dessus pour valider votre compte.</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">Remarque : Le code expirera dans 15 minutes, veuillez donc le vérifier rapidement !</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">Merci,</p>
<p style="font-size: 14px; line-height: 140%;"> </p>
<p style="font-size: 14px; line-height: 140%;">L'équipe de Factorim</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>
<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank">https://discord.gg/Tv3KVHfQMf</a></p>
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
`,
    design: {
      body: {
        id: 'Yb5caniIP1',
        rows: [
          {
            id: '-aRf1NE3F4',
            cells: [1],
            values: {
              _meta: { htmlID: 'u_row_1', htmlClassNames: 'u_row' },
              anchor: '',
              columns: false,
              padding: '0px',
              hideable: true,
              deletable: true,
              draggable: true,
              selectable: true,
              hideDesktop: false,
              duplicatable: true,
              backgroundColor: '',
              backgroundImage: {
                url: '',
                size: 'custom',
                repeat: 'no-repeat',
                position: 'center',
                fullWidth: true,
              },
              displayCondition: null,
              columnsBackgroundColor: '',
            },
            columns: [
              {
                id: 'xvOKr09qPd',
                values: {
                  _meta: { htmlID: 'u_column_1', htmlClassNames: 'u_column' },
                  border: {},
                  padding: '0px',
                  backgroundColor: '',
                },
                contents: [
                  {
                    id: 'sp4LvtH4ep',
                    type: 'image',
                    values: {
                      src: {
                        url: 'https://factorim.io/images/logos/factorim-logo.png',
                        width: 238,
                        height: 48,
                      },
                      _meta: {
                        htmlID: 'u_content_image_1',
                        htmlClassNames: 'u_content_image',
                      },
                      action: {
                        name: 'web',
                        attrs: { href: '{{href}}', target: '{{target}}' },
                        values: {
                          href: 'https://factorim.io',
                          target: '_blank',
                        },
                      },
                      anchor: '',
                      altText: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      textAlign: 'center',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px 10px 40px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: '3-gQqOz5mG',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;"><strong><span style="font-size: 20px; line-height: 28px;">Voici votre code de sécurité :</span></strong></p>\n<p style="font-size: 14px; line-height: 140%;">{{validation_code}}</p>',
                      _meta: {
                        htmlID: 'u_content_text_1',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'I2AQBtKcHn',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Bonjour,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Nous avons reçu une demande de sécurité de votre compte <a rel="noopener" href="https://factorim.io" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZ2FtZW5pY2hlLmFwcCIsInRhcmdldCI6Il9ibGFuayJ9fQ==">factorim.io</a>. Veuillez utiliser le code ci-dessus pour valider votre compte.</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">Remarque : Le code expirera dans 15 minutes, veuillez donc le vérifier rapidement !</p>',
                      _meta: {
                        htmlID: 'u_content_text_5',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'luiBMNEo-h',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%;">Merci,</p>\n<p style="font-size: 14px; line-height: 140%;"> </p>\n<p style="font-size: 14px; line-height: 140%;">L\'équipe de Factorim</p>',
                      _meta: {
                        htmlID: 'u_content_text_2',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                  {
                    id: 'd6rl9ti2Bl',
                    type: 'text',
                    values: {
                      text: '<p style="font-size: 14px; line-height: 140%; text-align: center;"><strong>Des problèmes ou des questions ?</strong></p>\n<p style="font-size: 14px; line-height: 140%; text-align: center;"><a rel="noopener" href="https://discord.gg/Tv3KVHfQMf" target="_blank" data-u-link-value="eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vZGlzY29yZC5nZy9aeXJwQ1h1cSIsInRhcmdldCI6Il9ibGFuayJ9fQ==">https://discord.gg/Tv3KVHfQMf</a></p>',
                      _meta: {
                        htmlID: 'u_content_text_4',
                        htmlClassNames: 'u_content_text',
                      },
                      anchor: '',
                      hideable: true,
                      deletable: true,
                      draggable: true,
                      linkStyle: {
                        inherit: true,
                        linkColor: '#0000ee',
                        linkUnderline: true,
                        linkHoverColor: '#0000ee',
                        linkHoverUnderline: true,
                      },
                      textAlign: 'left',
                      lineHeight: '140%',
                      selectable: true,
                      hideDesktop: false,
                      duplicatable: true,
                      containerPadding: '10px',
                      displayCondition: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
        values: {
          _meta: { htmlID: 'u_body', htmlClassNames: 'u_body' },
          linkStyle: {
            body: true,
            linkColor: '#0000ee',
            linkUnderline: true,
            linkHoverColor: '#0000ee',
            linkHoverUnderline: true,
          },
          textColor: '#000000',
          fontFamily: { label: 'Arial', value: 'arial,helvetica,sans-serif' },
          popupWidth: '600px',
          popupHeight: 'auto',
          borderRadius: '10px',
          contentAlign: 'center',
          contentWidth: '500px',
          popupPosition: 'center',
          preheaderText: '',
          backgroundColor: '#e7e7e7',
          backgroundImage: {
            url: '',
            size: 'custom',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          contentVerticalAlign: 'center',
          popupBackgroundColor: '#FFFFFF',
          popupBackgroundImage: {
            url: '',
            size: 'cover',
            repeat: 'no-repeat',
            position: 'center',
            fullWidth: true,
          },
          popupCloseButton_action: {
            name: 'close_popup',
            attrs: {
              onClick:
                "document.querySelector('.u-popup-container').style.display = 'none';",
            },
          },
          popupCloseButton_margin: '0px',
          popupCloseButton_position: 'top-right',
          popupCloseButton_iconColor: '#000000',
          popupOverlay_backgroundColor: 'rgba(0, 0, 0, 0.1)',
          popupCloseButton_borderRadius: '0px',
          popupCloseButton_backgroundColor: '#DDDDDD',
        },
      },
      counters: {
        u_row: 1,
        u_column: 1,
        u_content_text: 5,
        u_content_image: 1,
        u_content_button: 1,
      },
      schemaVersion: 11,
    },
  },
]
