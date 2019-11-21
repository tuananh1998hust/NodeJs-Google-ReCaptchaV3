import app from './app';
import Key from './config/key';

async function Start() {
  const { port } = Key;

  app.listen(port, () => console.log(`Server is running on port ${port}`));
}

// Start Server
Start();
