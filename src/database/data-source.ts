import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { getDatabaseConfig } from '../config/database.config';

config();

const dataSource = new DataSource(getDatabaseConfig());
export default dataSource;
