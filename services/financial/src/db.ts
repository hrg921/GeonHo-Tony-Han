import { createConnection } from 'typeorm';

let connection;

export async function connectDB() {
  if (!connection) {
    connection = await createConnection({
      type: 'mongodb',
      url:
        'mongodb+srv://hrg921:Gksrjsgh921@cluster0-8qydn.mongodb.net/geonho?retryWrites=true&w=majority',
    });
  }
}
