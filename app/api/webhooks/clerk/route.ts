import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!SIGNING_SECRET) {
      return new Response('Error: Missing CLERK_WEBHOOK_SECRET', { status: 500 });
    }

    const headerPayload = await headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error: Missing Svix headers', { status: 400 });
    }

    const body = await req.text(); // CAMBIO: Usar text() en lugar de json()
    const wh = new Webhook(SIGNING_SECRET);
    
    let evt: WebhookEvent;
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;

    const eventType = evt.type;

    if (eventType === 'user.created') {
      const { id } = evt.data;
      console.log(`Procesando usuario: ${id}`);
      // Tu lógica de base de datos irá aquí después
    }

    return new Response('Webhook procesado', { status: 200 });

  } catch (err) {
    console.error('ERROR CRÍTICO EN WEBHOOK:', err); // ESTO SALDRÁ EN TUS LOGS DE VERCEL
    return new Response('Error interno', { status: 500 });
  }
}