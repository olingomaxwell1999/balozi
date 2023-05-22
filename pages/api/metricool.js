import http from 'http';
import url from 'url';

const trackingCode = '<Your Metricool Tracking Code Here>';

export default function handler(req, res) {
  const { query } = url.parse(req.url, true);

  if (query.code === 'metricool') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.status(200).send(trackingCode);
  } else {
    res.status(404).send('');
  }
}