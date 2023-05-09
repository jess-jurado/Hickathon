import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Injectable } from '@angular/core';
import { Pool } from 'pg';

@Injectable({
  providedIn: 'root'
})
export class PostgresServide {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'user-name',
      host: 'localhost',
      database: 'name-your-database',
      password: 'your-password',
      port: 5432 // this is the default postgreSQL port
    });
  }

  async query(query: string, params?: any[]): Promise<any> {
      const client = await this.pool.connect();
      try {
        const result = await client.query(query, para);
        return result.rows;
    } finally {
        client.release();
    }
  }
}
