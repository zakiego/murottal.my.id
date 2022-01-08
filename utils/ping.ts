export default async function Ping({
  qari_id,
  type,
}: {
  qari_id: string;
  type: string;
}) {
  console.log(qari_id);
  const { error } = await fetch("https://murottal.my.id/api/v1/ping", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ qari_id, type }), // body data type must match "Content-Type" header
  }).then((resp) => resp.json());

  if (error) {
    console.log(error);
  }
}
