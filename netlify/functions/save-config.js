import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" }
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const id = (body && body.id ? String(body.id) : "").trim();
  if (!id) {
    return new Response(JSON.stringify({ error: "missing id" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }

  const record = {
    n: body.n ? String(body.n) : "",
    g: body.g ? String(body.g) : "",
    q: Array.isArray(body.q) && body.q.length ? body.q : null,
    updatedAt: new Date().toISOString()
  };

  const store = getStore("reviewbridge-businesses");
  await store.setJSON(id, record);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" }
  });
};
