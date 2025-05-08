
import { predictNext } from '../../utils/predictor';
import triglock from '../../core/triglock.json';
import baccarat from '../../core/baccarat_agent.json';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { result, history } = req.body;

  if (!['p', 'b', 't'].includes(result)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const prediction = predictNext(result, history, triglock, baccarat);
  res.status(200).json(prediction);
}
