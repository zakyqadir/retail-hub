/**
 * Matahari Retail Operations Portal - Google Apps Script Cloud Sync Backend
 * 
 * PETUNJUK PEMASANGAN:
 * 1. Buka https://script.google.com/home lalu klik "New project" (atau buka Google Sheet baru > Extensions > Apps Script).
 * 2. Hapus semua kode yang ada di editor, lalu paste seluruh isi file ini.
 * 3. Klik "Deploy" (pojok kanan atas) > "New deployment".
 * 4. Klik ikon gerigi (Select type) > pilih "Web app".
 * 5. Isi pengaturan berikut:
 *    - Description: Retail Hub Sync Backend
 *    - Execute as: Me (email Anda)
 *    - Who has access: Anyone (Siapa saja, termasuk anonim)  <-- PENTING!
 * 6. Klik "Deploy", izinkan otorisasi jika diminta (Review Permissions > Advanced > Go to Untitled project).
 * 7. Salin "Web App URL" (akhiran /exec).
 * 8. Tempelkan URL tersebut ke dalam modal "Sinkron / Cloud" di Retail Hub Anda!
 */

function doGet(e) {
  var properties = PropertiesService.getScriptProperties();
  
  // Jika dipanggil untuk menyimpan via GET: ?action=save&data=...
  if (e && e.parameter && e.parameter.action === 'save') {
    var rawData = e.parameter.data;
    if (rawData) {
      properties.setProperty('RETAIL_HUB_CONFIG', rawData);
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        timestamp: new Date().toISOString() 
      })).setMimeType(ContentService.MimeType.JSON);
    }
  }

  // Permintaan data (GET)
  var savedConfig = properties.getProperty('RETAIL_HUB_CONFIG');
  if (!savedConfig) {
    savedConfig = JSON.stringify([]);
  }
  
  return ContentService.createTextOutput(savedConfig)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var properties = PropertiesService.getScriptProperties();
  try {
    var rawData = "";
    if (e && e.postData && e.postData.contents) {
      rawData = e.postData.contents;
    } else if (e && e.parameter && e.parameter.data) {
      rawData = e.parameter.data;
    }

    if (rawData) {
      // Validasi JSON
      JSON.parse(rawData);
      properties.setProperty('RETAIL_HUB_CONFIG', rawData);
      
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        timestamp: new Date().toISOString() 
      })).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "error", 
        message: "No data payload received" 
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
