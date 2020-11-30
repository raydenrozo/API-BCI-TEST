/**
 * this module contains all configs globals functions
 * @author Jonathan Rozo <jonathan.rozo@gmail.com>
 * @version 1.0.0
 */
//=======================================
// Define environments for production and development
// ======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=======================================
// Define ports for production and development
// environments
// ======================================
process.env.PORT = process.env.PORT || 3000;