import { list } from '@vercel/blob';
// Assicurati di configurare le variabili d'ambiente per Vercel, incluso BLOB_READ_WRITE_TOKEN
import { error } from '@sveltejs/kit';

export async function GET() {
  try {
    const { blobs, hasMore } = await list({
      // opzioni, se necessario, come `limit`, `prefix`, ecc.
      token: process.env.BLOB_READ_WRITE_TOKEN // Assicurati che questo token sia sicuro!
    });

    return new Response(JSON.stringify({ blobs, hasMore }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error(err);
    return error(500, 'Errore durante il recupero dei blobs');
  }
}
