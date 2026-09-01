import { MongoClient } from "mongodb";

import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const cliente = new MongoClient(
  "mongodb+srv://gabrielpaduat_db_user:root@socketio.2mlmoic.mongodb.net/?appName=Socketio",
);
let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
