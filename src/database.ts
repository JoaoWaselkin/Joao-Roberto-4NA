import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://jaopablo4na_user:IhItfsUk6Yem83ojnYiRMqn7wYRgHe1f@dpg-cr7r2aq3esus73c141fg-a.oregon-postgres.render.com/jaopablo4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;