const TELEGRAM_TOKEN = '8958646518:AAFM9zM-yywATL78jpT9sQO1qlDXMwpu5p8';
const TELEGRAM_CHAT_ID = '8757337591';

async function uploadToTelegram(file) {
  const formData = new FormData();
  formData.append('chat_id', TELEGRAM_CHAT_ID);
  formData.append('photo', file);

  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`, {
    method: 'POST',
    body: formData
  });

  const data = await res.json();
  if (!data.ok) throw new Error('Upload failed');

  // Alaina ny file_id lehibe indrindra
  const photos = data.result.photo;
  const fileId = photos[photos.length - 1].file_id;

  // Alaina ny URL permanent
  const fileRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/getFile?file_id=${fileId}`);
  const fileData = await fileRes.json();
  const filePath = fileData.result.file_path;

  return `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${filePath}`;
}
