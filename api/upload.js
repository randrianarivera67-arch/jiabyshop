export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const TG_TOKEN = process.env.TG_TOKEN;
  const TG_CHAT = process.env.TG_CHAT;
  
  try {
    const { base64, filename } = req.body;
    const buffer = Buffer.from(base64, 'base64');
    const blob = new Blob([buffer]);
    
    const fd = new FormData();
    fd.append('chat_id', TG_CHAT);
    fd.append('photo', blob, filename);
    
    const r = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendPhoto`, {
      method: 'POST', body: fd
    });
    const d = await r.json();
    if (!d.ok) throw new Error('Upload failed');
    
    const fileId = d.result.photo[d.result.photo.length-1].file_id;
    const fr = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/getFile?file_id=${fileId}`);
    const fd2 = await fr.json();
    const url = `https://api.telegram.org/file/bot${TG_TOKEN}/${fd2.result.file_path}`;
    
    res.status(200).json({ url });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
